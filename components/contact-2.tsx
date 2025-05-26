"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dancing_Script } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { DotPattern } from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const font = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fadeIn = (delay = 0, isVisible = false) => ({
  initial: { opacity: 0, y: 20 },
  animate: isVisible
    ? {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.6, ease: "easeOut" },
      }
    : "initial",
});

export const Contact2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "3d23dc08-f2aa-4289-8f0d-c2f9882982dc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast({
        title: "Form Submitted Successfully",
        description: "We'll be in touch soon!",
      });
      setResult("Form Submitted Successfully");
      setLoading(false);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      ref={ref}
      className="py-[6rem] md:px-0 px-6 relative bg-neutral-100"
    >
      <DotPattern
        cy={1}
        cr={1}
        cx={1}
        className={cn(
          "absolute inset-0 z-10 h-full w-full",
          "opacity-60",
          "[mask-image:radial-gradient(1400px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="container">
        <div className="md:mx-auto flex md:max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <motion.div
            className="mx-auto flex max-w-sm flex-col justify-between gap-10"
            {...fadeIn(0, isInView)}
          >
            <motion.div
              className="text-center lg:text-left flex flex-col md:justify-start justify-center md:items-start items-center"
              {...fadeIn(0.2, isInView)}
            >
              <h1 className="mb-4 text-5xl lg:mb-4 lg:text-6xl">
                Let's talk
                <br />
                <span className={`text-blue-500 ${font.className}`}>
                  Sales hiring
                </span>
              </h1>
              <p className="text-black mb-4">
                Want to explore if Scooter is right for your team?
              </p>
              <motion.div {...fadeIn(0.4, isInView)}>
                <Button className="bg-gradient-to-b flex items-center w-fit gap-2 from-zinc-600 to-black px-6 rounded-full shadow-md transition-all duration-400 hover:shadow-inner hover:shadow-zinc-800/60">
                  Setup a Call
                  <ArrowRight />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            className="md:mx-auto flex md:max-w-screen-md flex-col gap-6 rounded-lg border-[1px] p-10 z-50 bg-white shadow-2xl"
            {...fadeIn(0.5, isInView)}
          >
            <motion.div className="flex gap-4" {...fadeIn(0.6, isInView)}>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </motion.div>
            <motion.div
              className="grid w-full items-center gap-1.5"
              {...fadeIn(0.7, isInView)}
            >
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </motion.div>
            <motion.div
              className="grid w-full items-center gap-1.5"
              {...fadeIn(0.8, isInView)}
            >
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </motion.div>
            <motion.div
              className="grid w-full gap-1.5"
              {...fadeIn(0.9, isInView)}
            >
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="resize-none"
              />
            </motion.div>
            <motion.div {...fadeIn(1, isInView)}>
              <Button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-b flex items-center gap-2 from-zinc-600 to-black px-6 rounded-full shadow-md transition-all duration-400 hover:shadow-inner hover:shadow-zinc-800/60"
              >
                {loading ? "Please wait..." : "Send Message"}
                <ArrowRight />
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
