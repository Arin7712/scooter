"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Dancing_Script } from "next/font/google";

const font = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const testimonials = [
  {
    name: "Pawanjeet Singh",
    title: "VP Sales",
    company: "DemandFarm",
    quote:
      '"What stood out for me was being able to watch the candidate’s video and see real deal history before the first call. It gave me a clear sense of how they actually sell. I didn’t have to waste time on interviews that go nowhere."',
  },
    {
    name: "Gopala Naidu",
    title: "Founder",
    company: "Marconi Technologies",
    quote:
      '"We don’t have an HR or TA team, so we handed the entire process over to Scooter. They took our JD, ran the whole thing, and gave us a shortlist of people who were actually a great fit. It was like having a plug-and-play hiring team."',
  },
      {
    name: "Naqisa Silva",
    title: "CEO",
    company: "Discover Resorts",
    quote:
      '"We made a hire in under a week. No resume scanning, no job posting fatigue. Just saw how someone spoke and sold, and knew right away if they’d work for our team and customers. It made the decision easy."',
  },
];

const positions = [
  { top: "15%", left: "10%" },
  { bottom: "50%", right: "5%" },
  { top: "70%", left: "40%", transform: "translateX(-50%)" },
];

const mobilePositions = [
  { top: "5%", left: "2%" },
  { top: "65%", left: "20%" },
  { top: "28%", right: "5%" },
];

const rotations = [
  "rotate(-3deg)",
  "rotate(5deg)",
  "rotate(8deg)",
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
      className="py-[6rem] relative flex items-center justify-center h-[120vh] md:h-screen overflow-hidden bg-white"
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

      {testimonials.map((quote, i) => {
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
            className="absolute p-3 sm:p-4 rounded-md bg-neutral-200 text-[10px] font-medium text-zinc-800 z-0"
            style={{
              ...positionStyle,
              animation: `float${i} 4s ease-in-out ${i * 0.2}s infinite`,
              transform: `translateX(${moveX}px) translateY(${moveY}px) ${rotation}`,
              maxWidth: isMobile ? "70%" : "20%",
            }}
          >
            <div>
              <h1 className="text-lg">{quote.name}</h1>
              <p className="italic text-neutral-500 md:text-md text-sm">{quote.title}, {quote.company}</p>
              <p className="pt-6 text-neutral-600 font-normal text-xs">{quote.quote}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Problem;
