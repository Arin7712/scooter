import {
  ArrowRight,
  Check,
  CircleCheckBig,
  X,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

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
    <div className="relative py-[6rem] gap-[6rem] flex lg:flex-row flex-col items-center justify-center md:h-screen overflow-hidden px-6 md:px-[10rem]">
      
      {/* Card 1 with animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-neutral-100 border-[1px] rounded-md p-6 space-y-8 flex flex-col items-center md:scale-[0.9]"
      >
        <h1 className="text-2xl underline underline-offset-2">
          Without Scooter
        </h1>
        <div className="flex flex-col gap-4">
          {withoutScooter.map((item, i) => (
            <div
              className="flex items-center gap-2 text-sm text-neutral-400"
              key={i}
            >
              <X className="text-red-500 size-5" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Card 2 with delayed animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-neutral-100 shadow-md border-[1px] rounded-md p-6 py-10 w-fit md:max-w-2xl text-neutral-900 flex flex-col justify-start"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <CircleCheckBig className="text-green-500" />
            <h1 className="text-2xl font-medium underline">With Scooter</h1>
          </div>
        </div>

        <div className="md:px-4 md:pt-0 pt-4 flex flex-col gap-4">
          <div className="space-y-4 text-sm md:text-md pt-6">
            {withScooter.map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-neutral-600">
                <div>
                <Check className="text-green-500 size-5 " />
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>

        <div
              
            >
              <div className="flex flex-col gap-2 justify-between w-full pt-6">
                  <Button  className="bg-gradient-to-b flex items-center gap-2 from-zinc-600 to-black px-6 text-sm py-1 rounded-full shadow-md transition-all duration-400 hover:shadow-inner hover:shadow-zinc-800/60">
                  Yes, I want it <ArrowRight className="size-5" />
                </Button>
              </div>
            </div>
      </motion.div>
    </div>
  );
};

export default Comparision;
