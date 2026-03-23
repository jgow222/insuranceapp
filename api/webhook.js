// api/webhook.js
// Vercel serverless function — handles Stripe webhooks
// Set this URL in Stripe Dashboard → Webhooks: https://yourdomain.com/api/webhook

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Raw body needed for webhook signature verification
export const config = { api: { bodyParser: false } };

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  const rawBody = await getRawBody(req);
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle events
  switch (event.type) {
    case 'setup_intent.succeeded':
      // Card saved successfully — claim is now "activated"
      console.log('SetupIntent succeeded:', event.data.object.id);
      break;

    case 'payment_intent.succeeded':
      // Success fee collected
      console.log('Payment succeeded:', event.data.object.id, '$' + (event.data.object.amount / 100).toFixed(2));
      break;

    case 'payment_intent.payment_failed':
      // Card declined when charging success fee
      console.log('Payment failed:', event.data.object.id, event.data.object.last_payment_error?.message);
      break;

    default:
      console.log('Unhandled event type:', event.type);
  }

  res.status(200).json({ received: true });
};
