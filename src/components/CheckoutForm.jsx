// import React, { useEffect, useState } from 'react';
// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
// import convertToSubcurrency from '../../lib/convertToSubcurrency';

// const CheckoutForm = (amount  => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [errorMessage, setErrorMessage] = useState<string>();
//   const [clientSecret, setClientSecret] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchClientSecret = async () => {
//       try {
//         const res = await fetch('/api/create-payment-intent', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
//         });

//         const data = await res.json();
//         if (data.clientSecret) {
//           setClientSecret(data.clientSecret);
//         } else {
//           setErrorMessage('Failed to retrieve client secret');
//         }
//       } catch (error) {
//         setErrorMessage('Error fetching client secret: ' + (error as Error).message);
//       }
//     };

//     fetchClientSecret();
//   }, [amount]);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) return;

//     try {
//       const { error } = await stripe.confirmPayment({
//         elements,
//         clientSecret,
//         confirmParams: {
//           return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
//         },
//       });

//       if (error) {
//         setErrorMessage(error.message);
//       }
//     } catch (error) {
//       setErrorMessage('Error confirming payment: ' + (error as Error).message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!clientSecret || !stripe || !elements) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       {errorMessage && <div>{errorMessage}</div>}
//       <button disabled={!stripe || loading}>
//         {!loading ? `Pay $${(amount / 100).toFixed(2)}` : 'Processing...'}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;
