
"use client";

import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { useRouter } from "next/navigation";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "JOB SYNC:",
    },
    {
      text: "Connecting",
    },
    {
      text: "Talent",
    },
    {
      text: "with",
    },
    {
      text: "Opportunity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];


  const router = useRouter();

  const handleJoinNowClick = () => {
    router.push("/signup"); // Navigate to the Signup page
  };

  const handleSignupClick = () => {
    router.push("/login"); // Navigate to the Login page
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-2 items-center justify-center px-2"
      >
       
        <div className="flex flex-col items-center justify-center     py-4 md:pt-12 text-center">
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-4">
            <button className="w-36 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
            onClick={handleJoinNowClick}
            >
              Join now
            </button>
            <button className="w-36 h-10 rounded-xl bg-white text-black border border-black text-sm"
            onClick={handleSignupClick}
            >
              Signup
            </button>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
