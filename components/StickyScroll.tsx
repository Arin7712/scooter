'use client'
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  "Candidates apply through a behavioral-based form.",
  "We analyze data points using behavioral science.",
  "You receive structured profiles ranked by fit.",
  "Top candidates are revealed as you scroll.",
];

export const StickyScroll = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [0, -100 * (steps.length - 1)]);
  const y = useTransform(yRaw, (val) => `${val}vh`); // ✅ fixed this line

  return (
    <div
      ref={ref}
      className="relative"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="w-full max-w-xl"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="h-screen flex items-center justify-center text-center px-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold"
              >
                {step}
              </motion.h2>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
