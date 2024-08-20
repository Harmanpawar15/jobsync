// "use client";

// import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
// import { motion } from "framer-motion";
// import React from "react";
// import { AuroraBackground } from "../components/ui/aurora-background";

// export function TypewriterEffectSmoothDemo() {
//   const words = [
//     {
//       text: "JOB SYNC:",
//     },
//     {
//       text: "Connecting",
//     },
//     {
//       text: "Talent",
//     },
//     {
//       text: "with",
//     },
//     {
//       text: "Opportunity.",
//       className: "text-blue-500 dark:text-blue-500",
//     },
//   ];
//   return (

//     <AuroraBackground>
//       <motion.div
//         initial={{ opacity: 0.0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="relative flex flex-col gap-4 items-center justify-center px-4"
//       >

//     <div className="flex flex-col items-center justify-center h-[10rem] md:h-[25rem]  ">
//       {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
//         The road to freedom starts from here
//       </p> */}
//       <TypewriterEffectSmooth words={words} />
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
//         <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
//           Join now
//         </button>
//         <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
//           Signup
//         </button>
//       </div>
//     </div>

//     </motion.div>
//     </AuroraBackground>
//   );
// }



"use client";

import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";

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
            <button className="w-36 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Join now
            </button>
            <button className="w-36 h-10 rounded-xl bg-white text-black border border-black text-sm">
              Signup
            </button>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
