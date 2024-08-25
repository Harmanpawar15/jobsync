
"use client"
import Chat from "@/components/chat";
import FeaturedItems from "@/components/Features";
import { TypewriterEffectSmoothDemo } from "@/components/landingPage";
import Pricing from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
 
  return (
    <div>
    
    {/* <MessageForm/> */}
   
   <TypewriterEffectSmoothDemo/>
  <FeaturedItems/>
  <Pricing/> 
    <Chat/>
  
    </div>
  );
}
