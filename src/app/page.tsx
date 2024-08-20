

import Chat from "@/components/chat";
import FeaturedItems from "@/components/Features";
import { TypewriterEffectSmoothDemo } from "@/components/landingPage";
import Pricing from "@/components/Pricing";
import { Signup } from "@/components/signup";

import Image from "next/image";

export default function Home() {
  return (
    <div>
    
    {/* <MessageForm/> */}
    <Signup/>
  <TypewriterEffectSmoothDemo/>
  <FeaturedItems/>
  <Pricing/>

    {/* <Chat/> */}
  
    </div>
  );
}
