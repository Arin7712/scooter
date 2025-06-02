"use client";

import React, { useRef, useState } from "react";
import { Navbar1 } from "./ui/navbar-1";
import { DotPattern } from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import { AnimatedShinyTextDemo } from "./ui/AnimatedTextDemo";
import { Dancing_Script } from "next/font/google";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { AnimatedListDemo } from "./AnimatedListDemo";

const font = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Hero = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hire, setHire] = useState("Looking to get hired");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append(hire, "351e1131-0e51-4df4-9857-e7f1c826fecf");
    formData.append("access_key", "351e1131-0e51-4df4-9857-e7f1c826fecf");

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
      setIsDialogOpen(false); // Close dialog here ✅
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="relative h-auto overflow-hidden bg-neutral-50">
      {/* Background Image */}
      <Image
        src="/herobg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-left-top z-0 opacity-30"
        width={1000}
        height={1000}
      />
      {/* <div className="absolute top-[30%] right-[35%] z-10 flex justify-start px-6 w-full h-[40%]">
        <AnimatedListDemo />
      </div> */}

      <Navbar1 />

      <DotPattern
        cy={1}
        cr={1}
        cx={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="flex flex-col pt-[4rem] items-center justify-center lg:px-0 px-[6rem] pb-[6rem]">
        <div className="flex flex-col md:max-w-5xl items-center justify-center gap-6 text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <AnimatedShinyTextDemo />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className={`lg:text-[5.5rem] text-6xl`}
          >
            Sales hiring
            <br />
            <span className={`${font.className} text-blue-500`}>Solved</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-neutral-700 text-md md:px-0 px-6 md:max-w-xl"
          >
            Scooter uses{" "}
            <span className="text-blue-500 font-medium">
              AI + behavioral science
            </span>{" "}
            to help you hire better sales talent, faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <div>
                  <Button
                    onClick={() => setIsDialogOpen(true)}
                    className="bg-gradient-to-b flex items-center gap-2 from-zinc-600 to-black px-6 rounded-full shadow-md transition-all duration-400 hover:shadow-inner hover:shadow-zinc-800/60"
                  >
                    Join the Waitlist
                    <ArrowRight />
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join the Waitlist</DialogTitle>
                  <DialogDescription>
                    Sign up to stay in the loop and be among the first to
                    explore our launch. Early supporters always get the best!
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <motion.form
                    onSubmit={onSubmit}
                    className="md:mx-auto flex md:max-w-screen-md flex-col gap-6 rounded-lg border-[1px] p-10 z-50 bg-white shadow-2xl"
                  >
                    <motion.div className="flex gap-4">
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="firstname">First Name</Label>
                        <Input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="lastname">Last Name</Label>
                        <Input
                          type="text"
                          id="lastname"
                          name="lastname"
                          placeholder="Last Name"
                        />
                      </div>
                    </motion.div>
                    <motion.div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </motion.div>
                    <motion.div className="grid w-full items-center gap-1.5">
                      <motion.div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="subject">Objective</Label>
                        <Select
                          name="subject"
                          required
                          onValueChange={(value) => setHire(value)}
                        >
                          <SelectTrigger id="subject" className="w-full">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Hiring for sales">
                              Hiring for sales
                            </SelectItem>
                            <SelectItem value="Looking to get hired">
                              Looking to get hired
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </motion.div>
                    <motion.div>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="bg-gradient-to-b flex items-center gap-2 from-zinc-600 to-black px-6 rounded-full shadow-md transition-all duration-400 hover:shadow-inner hover:shadow-zinc-800/60"
                      >
                        {loading ? "Please wait..." : "Submit"}
                        <ArrowRight />
                      </Button>
                    </motion.div>
                  </motion.form>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-xs text-zinc-600 pt-6 font-medium"
          >
            Our recent clients:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
          >
            <InfiniteSlider
              gap={24}
              reverse
              className="flex flex-col items-center justify-center gap-6 text-center max-w-sm md:max-w-xl"
            >
              <Image src="/w1.png" alt="Image 1" width={100} height={100} />
              <Image src="/w2.png" alt="Image 2" width={100} height={100} />
              <Image src="/w3.png" alt="Image 3" width={100} height={100} />
              <Image src="/w4.png" alt="Image 4" width={100} height={100} />
            </InfiniteSlider>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
