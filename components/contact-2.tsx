import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dancing_Script } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { DotPattern } from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

const font = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  return (
    <section className="py-[6rem] md:px-0 px-6 relative bg-neutral-100">
<DotPattern
  cy={1} // Less vertical spacing
  cr={1} // Same radius of dots
  cx={1} // Less horizontal spacing
  className={cn(
    "absolute inset-0 z-10 h-full w-full",
    "opacity-60",
    "[mask-image:radial-gradient(1400px_circle_at_center,white,transparent)]"
  )}
/>
      <div className="container">
        <div className="md:mx-auto flex md:max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left flex flex-col md:justify-start justify-center md:items-start items-center">
              <h1 className="mb-4 text-5xl  lg:mb-4 lg:text-6xl">
                Let's talk
                <br />
                <span className={`text-zinc-500 ${font.className}`}>
                  Sales hiring
                </span>
              </h1>
              <p className="text-black mb-4">
                Want to explore if Scooter is right for your team?
              </p>
              <Button className="bg-gradient-to-b flex items-center w-fit gap-2 from-zinc-600 to-black px-6 rounded-full shadow-md transition-all duration-400 hover:shadow-inner hover:shadow-zinc-800/60">
                Join the Waitlist
                <ArrowRight />
              </Button>
            </div>
            {/* <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Phone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="md:mx-auto flex md:max-w-screen-md flex-col gap-6 rounded-lg border-[1px] p-10 z-50 bg-white shadow-2xl">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name"/>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="resize-none"
              />
            </div>
              <Button className="bg-gradient-to-b flex items-center gap-2 from-zinc-600 to-black px-6 rounded-full shadow-md transition-all duration-400 hover:shadow-inner hover:shadow-zinc-800/60">
                Send Messsage
                <ArrowRight />
              </Button>          </div>
        </div>
      </div>
    </section>
  );
};
