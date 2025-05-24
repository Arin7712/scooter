"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useInView, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { DotPattern } from "./dot-pattern";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    icon: React.ReactNode;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, rgb(6 182 212), rgb(16 185 129))",
    "linear-gradient(to bottom right, rgb(236 72 153), rgb(99 102 241))",
    "linear-gradient(to bottom right, rgb(249 115 22), rgb(234 179 8))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  // InView hook for left content
  const leftRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: true });

  return (
    <motion.div
      className="h-screen bg-neutral-100 overflow-y-auto flex md:flex-row flex-col py-[6rem] md:px-[6rem] px-6 justify-between md:relative rounded-md"
      ref={ref}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >

      {/* Left content with animations */}
      <div
        className="flex flex-col relative gap-4 w-full md:w-[50%] md:sticky md:top-10"
        ref={leftRef}
      >
                    <DotPattern
              cy={1}
              cr={1}
              cx={1}
              className={cn(
                "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
              )}
            />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="p-[0.1rem] bg-neutral-500 rounded-full w-fit"
        >
          <div className="px-6 py-2 w-fit flex items-center gap-1 text-xs bg-neutral-300 border-zinc-300 uppercase tracking-tight font-medium rounded-full border-[1px]">
            <Sparkles className="size-3" />
            The Solution
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          className="md:text-4xl text-3xl md:max-w-[85%] font-medium"
        >
          What we do
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="text-neutral-600 text-sm max-w-md"
        >
          <span className="text-black font-medium">
            Scooter brings structure, signal, and science to the point where
            sales hiring breaks down.
          </span>{" "}
          We replace resumes and gut-feel interviews with a structured,
          screening layer — built on behavioral science. You get the full
          picture of a candidate before the first call.
        </motion.p>
      </div>

      {/* Right content */}
      <div className="md:relative flex items-start md:w-[40%] md:pt-0 pt-6">
        <div className="md:max-w-full w-full">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="md:my-20 my-10 border-b-[1px] border-neutral-600 pb-6"
            >
              <div>{item.icon}</div>
              <motion.h2 className="text-2xl font-medium text-black mt-3">
                {item.title}
              </motion.h2>
              <motion.p className="md:text-md text-sm text-zinc-500 max-w-sm mt-1">
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};
