"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DotPattern } from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import { BellRing, Sparkles, X } from "lucide-react";
import { TextAnimate } from "./magicui/text-animate";
import { Dancing_Script } from "next/font/google";

// Fade-in animation variant with delay
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const font = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })


const Problem2 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <>
      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 0.11; }
          50% { opacity: 0.13; }
          70% { opacity: 0.12; }
          80% { opacity: 0.13; }
          90% { opacity: 0.11; }
        }

        .noise-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" ><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)" /></svg>');
          animation: flicker 3s infinite ease-in-out;
          z-index: 0;
          opacity: 0.11;
          mix-blend-mode: screen;
        }
      `}</style>


      <div className="relative py-[6rem] md:gap-0 gap-[4rem] flex md:flex-row flex-col items-center justify-between md:h-screen overflow-hidden bg-black px-6 md:px-[6rem]">
        <DotPattern
          cy={1}
          cr={1}
          cx={1}
          className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
          )}
        />
        <div className="noise-bg" />
        {/* Text on left with sequential fade-in */}
        <motion.div
          ref={sectionRef}
          className="md:w-1/2 flex flex-col gap-6 md:gap-[1rem] text-neutral-500"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h1
            variants={fadeInVariant}
            custom={0}
            className="md:text-4xl text-3xl md:max-w-[85%] font-medium"
          >
            You've built the <span className="text-neutral-200">car.</span> But
            how do you pick the{" "}
            <span className="text-neutral-200">right driver?</span>
          </motion.h1>

          <motion.p
            variants={fadeInVariant}
            custom={1}
            className="text-sm md:max-w-[70%] text-neutral-300"
          >
            Sales is mission-critical — but most teams still hire reps using
            resumes, referrals, and gut feel.
          </motion.p>

          <motion.div
            variants={fadeInVariant}
            custom={2}
            className="flex flex-col gap-4 pt-[3rem] pb-[3rem]"
          >
            <div className="flex gap-2 items-center text-neutral-400">
              <div className="bg-white rounded-full p-1">
                <X className="text-black size-4" />
              </div>
              <p className="text-sm">No signal on how they sell</p>
            </div>
            <div className="flex gap-2 items-center text-neutral-400">
              <div className="bg-white rounded-full p-1">
                <X className="text-black size-4" />
              </div>
              <p className="text-sm">No clue on who they've sold to</p>
            </div>
            <div className="flex gap-2 items-center text-neutral-400">
              <div className="bg-white rounded-full p-1">
                <X className="text-black size-4" />
              </div>
              <p className="text-sm">No insight into grit, coachability, or intent</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            custom={3}
            className="flex gap-2 items-center text-sm bg-white z-50 px-4 py-2 rounded-md w-fit text-black font-medium"
          >
            <BellRing className="text-black size-5" />
            1 in 3 reps fail within 6 months.
          </motion.div>
        </motion.div>

        {/* Animated image on right */}
        <motion.div
          initial={{ x: "100vw" }}
          animate={isInView ? { x: "10vw" } : {}}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 12,
            duration: 2.5,
          }}
          className="relative z-10 w-full md:w-1/2 space-y-12 md:block hidden"
        >
          <Image src="/f3.png" alt="F1 Car" width={500} height={100} />
          
        </motion.div>
                <motion.div
          initial={{ x: "100vw" }}
          animate={isInView ? { x: "0vw" } : {}}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 12,
            duration: 2.5,
          }}
          className="relative z-10 w-full  space-y-12 md:hidden block"
        >
          <Image src="/f3.png" alt="F1 Car" width={500} height={100} />
          
        </motion.div>
      </div>
    </>
  );
};

export default Problem2;
