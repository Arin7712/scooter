"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Dancing_Script } from "next/font/google";

const font = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const quotes = [
  "“Scooter helped us see beyond the resume — we finally hired someone who could actually sell.”",
  "“I spent less time interviewing and still made a better hire. That’s magic.”",
  "“The voice and video insights showed us things a CV never could.”",
  "“The structured screening was a game-changer. We saved weeks and avoided a bad hire.”",
  "“It’s like someone finally built a hiring tool that gets sales.”",
  "“Scooter’s process surfaced grit, communication, sales motion— all before the first call.”",
  "“We don’t have a recruiter — Scooter gave us structure we didn’t even know we needed.”",
  "“In sales, I hire for energy and motivation. Scooter helped us find that early.”",
];

const positions = [
  { top: "10%", left: "5%" },
  { top: "10%", right: "5%" },
  { bottom: "25%", left: "5%" },
  { bottom: "10%", right: "5%" },
  { top: "80%", left: "40%", transform: "translateX(-50%)" },
  { bottom: "80%", right: "30%" },
  { top: "30%", left: "20%" },
  { bottom: "40%", right: "15%" },
];

const mobilePositions = [
  { top: "5%", left: "5%" },
  { top: "10%", right: "5%" },
  { top: "30%", left: "60%" },
  { top: "60%", right: "35%" },
  { top: "30%", left: "5%" },
  { top: "80%", right: "5%" },
  { top: "80%", left: "5%" },
  { top: "110%", right: "5%" },
];

const rotations = [
  "rotate(-3deg)",
  "rotate(5deg)",
  "rotate(-10deg)",
  "rotate(-6deg)",
  "rotate(8deg)",
  "rotate(10deg)",
  "rotate(-4deg)",
  "rotate(6deg)",
];

const Problem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md = 768px
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-[6rem] relative flex items-center justify-center h-screen overflow-hidden bg-white"
    >
      <h1 className="text-5xl text-center z-10 font-medium">
        Why teams <br />
        <span className={`text-zinc-500 ${font.className}`}>Trust Scooter</span>
      </h1>

      <style>
        {`
          ${rotations
            .map(
              (rotation, i) => `@keyframes float${i} {
                0%, 100% {
                  transform: ${rotation} translateY(0);
                }
                50% {
                  transform: ${rotation} translateY(-8px);
                }
              }`
            )
            .join("\n")}
        `}
      </style>

      {quotes.map((quote, i) => {
        const moveX = mousePos.x * 8 * (i % 2 === 0 ? 1 : -1);
        const moveY = mousePos.y * 5;
        const positionStyle = isMobile ? mobilePositions[i] : positions[i];
        const rotation = rotations[i];

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="absolute p-3 sm:p-4 rounded-md bg-neutral-300 text-[10px] md:text-xs font-medium text-zinc-800 z-0"
            style={{
              ...positionStyle,
              animation: `float${i} 4s ease-in-out ${i * 0.2}s infinite`,
              transform: `translateX(${moveX}px) translateY(${moveY}px) ${rotation}`,
              maxWidth: isMobile ? "32%" : "20%",
            }}
          >
            <p>{quote}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Problem;
