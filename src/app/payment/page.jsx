
"use client";
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { BackgroundGradient } from '@/components/ui/background-gradient';


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PreviewPage() {
  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-auto bg-neutral-900">
      {/* Add Background Beams */}
      <BackgroundBeams />
      {/* Add Background Gradient */}
      <BackgroundGradient />

      <div className="max-w-md w-full mx-auto rounded-lg p-8 shadow-lg bg-white dark:bg-black relative z-10">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-6">
          Upgrade to Pro
        </h2>
        
        {/* Pro Version Card - Custom Implementation */}
        <div className="mb-8 relative p-6 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-white mb-4">Pro Version</h3>
          <p className="text-neutral-200">
            Get access to exclusive features and premium support by upgrading to the Pro version.
          </p>
        </div>

        {/* Checkout Button */}
        <form action="/api/checkout_sessions" method="POST">
          <section>
            <button
              type="submit"
              role="link"
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            >
              Checkout &rarr;
              <BottomGradient />
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}

// Reusing the BottomGradient component for consistency
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
