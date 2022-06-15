// pages/api/checkout_sessions/cart.js

import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-03-02',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Validate the cart details that were sent from the client.
      const cart = req.body;

      //Sanity client performs merchQuery
      // The POST request is then validated against the data from Sanity.
      const cartItems = cart.map((product, i) => {
        return {
          price_data: {
            currency: 'pln',
            product_data: {
              name: product.variant
                ? product.name + product.variant
                : product.name,
              images: [product.images],
            },
            unit_amount: parseInt(product.price * 100),
          },
          quantity: product.quantity,
        };
      });

      // Create Checkout Sessions from body params.
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card', 'p24'],
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['PL'],
        },
        line_items: cartItems,
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}`,
      };
      const checkoutSession = await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
export const config = {
  api: {
    bodyParser: {
      sizeLimit: 'false',
    },
  },
};
