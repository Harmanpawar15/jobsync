
"use client"
import Chat from "@/components/chat";
import FeaturedItems from "@/components/Features";
import { TypewriterEffectSmoothDemo } from "@/components/landingPage";
import Pricing from "@/components/Pricing";
import CheckoutForm from "@/components/CheckoutForm";


import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";




//const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "pk_test_51Pqecw01MD8w1tx7eCTdgdvRixo0LulKSsOs1o4uWiNpBAo7HADkxkRyhi95cFeWAmBorofloh9ySORRvAGijNOU00dLAygwdG");

import Image from "next/image";

export default function Home() {
  const amount = 49.99;
  return (
    <div>
    
    {/* <MessageForm/> */}
   
   <TypewriterEffectSmoothDemo/>
  <FeaturedItems/>
  <Pricing/> 
  <Elements stripe={stripePromise}>
        <CheckoutForm amount={amount} />
      </Elements>
  
    <Chat/>
  
    </div>
  );
}
