import {
  ArrowRight,
  Check,
  CircleCheckBig,
  X,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";

const withoutScooter = [
  "Write a job description from scratch",
  "Hire an external recruiter or agency (8-15% of CTC)",
  "Post on multiple platforms and pray for reach",
  "Sift through 100+ resumes",
  "Manually filter for basic relevance",
  "Search LinkedIn to validate claims",
  "Conduct phone screens to check communication",
  "Repeat yourself 10 times per day",
  "Guess if they actually sold or just supported",
  "Forget who said what by the 7th call",
  "Get ghosted after shortlisting",
  "Chase referrals to fill pipeline",
  "Realize late they never sold to your ICP or motion",
  "Figure out too late they lacked grit or coachability",
];

const withScooter = [
  "Share your requirements (<10 minutes)",
  "Get a ranked shortlist of high-fit, validated candidates in 7–10 days",
  "You only meet candidates who can actually sell and you see them in action before the first call",
];

const Comparision = () => {
  return (
    <div className="relative py-[6rem] px-6 lg:px-[10rem] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* With Scooter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white shadow-sm border rounded-xl p-8 flex flex-col justify-between min-h-full relative"
        >
                <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 w-full h-full opacity-30",
          "[mask-image:linear-gradient(to_bottom,white_52%,transparent)]",
          "mask-size-100 mask-repeat-no-repeat",
          "pointer-events-none"
        )}
      />
          <div className="flex items-center gap-3 mb-4">
            <CircleCheckBig className="text-green-500 size-6" />
            <h2 className="text-2xl font-medium text-neutral-800">With Scooter</h2>
          </div>

          <div className="space-y-4 text-neutral-700 text-sm pt-2">
            {withScooter.map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check className="text-green-600 size-4" />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Button className="bg-gradient-to-b from-zinc-700 to-black text-white px-6 py-2 rounded-full shadow-md hover:shadow-inner hover:shadow-zinc-800/60 transition-all text-sm flex items-center gap-2">
              Yes, I want it <ArrowRight className="size-5" />
            </Button>
          </div>
        </motion.div>

        {/* Without Scooter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-neutral-100 border rounded-xl p-8 flex flex-col min-h-full"
        >
          <h2 className="text-2xl font-medium text-neutral-800 mb-6">Without Scooter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-neutral-500 text-sm">
            {withoutScooter.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-red-100 p-1 rounded-full">
                  <X className="text-red-500 size-4" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Comparision;
