// import type { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';
// import { doc, updateDoc } from 'firebase/firestore';
// import { db } from '../../../firebase'; // Adjust the path according to your setup

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//   apiVersion: '2024-06-20',
// });

// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const sig = req.headers['stripe-signature'];

//   let event: Stripe.Event;

//   try {
//     event = stripe.webhooks.constructEvent(req.body, sig as string, endpointSecret);
//   } catch (err) {
//     res.status(400).send(`Webhook Error: ${(err as Error).message}`);
//     return;
    
//   }

//   if (event.type === 'checkout.session.completed') {
//     const session = event.data.object as Stripe.Checkout.Session;
//     const userId = session.client_reference_id;

//     if (userId) {
//       // Reset the request count or set a higher limit for the user
//       const userRef = doc(db, 'users', userId);
//       await updateDoc(userRef, {
//         requestCount: 0, // Reset request count
//         isPremium: true, // Mark user as premium
//       });
//     } else {
//       res.status(400).send('No user ID provided');
//       return;
//     }
//   }

//   res.status(200).send('Received');
// }
