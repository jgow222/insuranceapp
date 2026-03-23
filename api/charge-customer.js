// api/charge-customer.js
// Vercel serverless function — charges the saved card when settlement is confirmed
// Called when user enters their final settlement amount and confirms

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const FEE_RATE = 0.12; // 12% of recovery delta

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { customerId, originalOffer, finalSettlement } = req.body;

    if (!customerId) return res.status(400).json({ error: 'customerId is required' });
    if (!originalOffer || !finalSettlement) return res.status(400).json({ error: 'originalOffer and finalSettlement are required' });

    const original = parseFloat(originalOffer);
    const final = parseFloat(finalSettlement);
    const delta = final - original;

    // Only charge if we improved the outcome
    if (delta <= 0) {
      return res.status(200).json({
        charged: false,
        message: 'No improvement over original offer — no fee charged.',
        delta,
      });
    }

    const feeAmount = Math.round(delta * FEE_RATE * 100); // in cents

    // Get the customer's saved payment method
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: 'card',
    });

    if (!paymentMethods.data.length) {
      return res.status(400).json({ error: 'No saved payment method found for this customer.' });
    }

    const paymentMethod = paymentMethods.data[0];

    // Create and confirm the PaymentIntent off-session (charge the saved card)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: feeAmount,
      currency: 'usd',
      customer: customerId,
      payment_method: paymentMethod.id,
      off_session: true,
      confirm: true,
      description: `ClaimMax success fee — ${FEE_RATE * 100}% of $${delta.toFixed(2)} recovery delta`,
      metadata: {
        originalOffer: String(original),
        finalSettlement: String(final),
        delta: String(delta),
        feeRate: String(FEE_RATE),
      },
    });

    res.status(200).json({
      charged: true,
      paymentIntentId: paymentIntent.id,
      amountCharged: feeAmount / 100,
      delta,
      status: paymentIntent.status,
    });
  } catch (err) {
    console.error('charge-customer error:', err);
    // Handle card errors gracefully
    if (err.type === 'StripeCardError') {
      return res.status(402).json({ error: err.message, code: err.code });
    }
    res.status(500).json({ error: err.message });
  }
};
