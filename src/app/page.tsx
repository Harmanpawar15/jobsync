
"use client"

import FeaturedItems from "@/components/Features";
import { TypewriterEffectSmoothDemo } from "@/components/landingPage";
import Pricing from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
 
  return (
    <div>
    
   <TypewriterEffectSmoothDemo/>
  <FeaturedItems/>
  <Pricing/> 
    
  
    </div>
  );
}
