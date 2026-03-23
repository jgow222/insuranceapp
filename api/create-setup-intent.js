// api/create-setup-intent.js
// Vercel serverless function — creates a Stripe SetupIntent + Customer
// Called when user clicks "Activate Claim Tracking"

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, originalOffer, estimatedEntitlement, policyType } = req.body;

    if (!email) return res.status(400).json({ error: 'Email is required' });

    // 1. Create or retrieve Stripe Customer
    const existingCustomers = await stripe.customers.list({ email, limit: 1 });
    let customer;
    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
      // Update metadata with latest claim info
      customer = await stripe.customers.update(customer.id, {
        name,
        metadata: {
          originalOffer: String(originalOffer || ''),
          estimatedEntitlement: String(estimatedEntitlement || ''),
          policyType: policyType || '',
          claimActivatedAt: new Date().toISOString(),
        },
      });
    } else {
      customer = await stripe.customers.create({
        name,
        email,
        metadata: {
          originalOffer: String(originalOffer || ''),
          estimatedEntitlement: String(estimatedEntitlement || ''),
          policyType: policyType || '',
          claimActivatedAt: new Date().toISOString(),
        },
      });
    }

    // 2. Create SetupIntent to save the card on file (no charge yet)
    const setupIntent = await stripe.setupIntents.create({
      customer: customer.id,
      payment_method_types: ['card'],
      usage: 'off_session', // allows charging later without customer present
      metadata: {
        customerEmail: email,
        originalOffer: String(originalOffer || ''),
      },
    });

    res.status(200).json({
      clientSecret: setupIntent.client_secret,
      customerId: customer.id,
      setupIntentId: setupIntent.id,
    });
  } catch (err) {
    console.error('create-setup-intent error:', err);
    res.status(500).json({ error: err.message });
  }
};
