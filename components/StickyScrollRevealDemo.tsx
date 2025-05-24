"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { ClipboardList, LaptopMinimalCheck, ShieldX, Trophy, UserRoundCheck } from "lucide-react";

const content = [
  {
    title: "Share you wishlist",
    icon: <ClipboardList/>,
    description:
      "We generate and distribute a sharp, high-signal JD",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Candidates apply",
    icon: <LaptopMinimalCheck/>,
    description:
      "Resume + voice-based cv validation",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=640&q=75"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "We enrich every profile in motion",
    icon: <UserRoundCheck/>,
    description:
      "Motion, tools, ICP, deal size, territory, tenure",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "We assess what resumes can’t",
    icon: <ShieldX/>,
    description:
      "Candidates complete a short and engaging assessment that understands key traits: - Grit, Coachability, Communication, Sales Judgement",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
    {
    title: "You get a ranked shortlist",
    icon: <Trophy/>,
    description:
      "Structured profiles, scored assessments, and video clips",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
