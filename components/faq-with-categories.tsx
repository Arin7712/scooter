"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface FaqSectionWithCategoriesProps
  extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    question: string;
    answer: string;
    category?: string;
  }[];
  contactInfo?: {
    title: string;
    description?: string;
    buttonText: string;
    onContact?: () => void;
  };
}

const FaqSectionWithCategories = React.forwardRef<
  HTMLElement,
  FaqSectionWithCategoriesProps
>(({ className, title, description, items, contactInfo, ...props }, ref) => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className={cn("py-16 w-full", className)}
      {...props}
    >
      <div className="container flex justify-center px-4">
        <div className="w-full max-w-5xl md:max-w-6xl lg:max-w-7xl xl:max-w-7xl flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center space-y-4 mb-12 max-w-2xl"
          >
            <h2 className="text-4xl text-foreground Font-medium">
              Have a Question ?<br />
              <span className="text-neutral-500">We've got you covered</span>
            </h2>
          </motion.div>

          {/* FAQ Items */}
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className={cn(
                    "w-full md:w-[700px] lg:w-[800px] xl:w-[800px] mx-auto",
                    "mb-4 rounded-xl",
                    "bg-neutral-200 text-card-foreground",
                    "border border-border/60",
                    "shadow-sm dark:shadow-black/10"
                  )}
                >
                  <AccordionTrigger
                    className={cn(
                      "px-6 py-4 text-left hover:no-underline",
                      "data-[state=open]:border-b data-[state=open]:border-border/60"
                    )}
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-md font-medium text-foreground group-hover:text-primary">
                        {item.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-4 pb-6">
                    {index === 2 ? (
                      <p className="text-muted-foreground leading-relaxed">
                        We go beyond experience and logos. Scooter evaluates:
                        <p className="flex flex-col gap-1 pt-2" typeof="bullet">
                          <li>Sales motion</li>
                          <li>ICP fit</li>
                          <li>Tools Used</li>
                          <li>
                            Behavioral traits like grit, coachability,
                            communication, and sales judgment
                          </li>
                        </p>
                      </p>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Contact Section */}
          {contactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + items.length * 0.1 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-4">{contactInfo.title}</p>
              {contactInfo.description && (
                <p className="text-sm text-muted-foreground mb-4">
                  {contactInfo.description}
                </p>
              )}
              <Button className="bg-gradient-to-b flex items-center w-fit gap-2 from-zinc-600 to-black px-6 rounded-full shadow-md transition-all duration-400 hover:shadow-inner hover:shadow-zinc-800/60">
                {contactInfo.buttonText}
                <ArrowRight />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
});

FaqSectionWithCategories.displayName = "FaqSectionWithCategories";
export { FaqSectionWithCategories };
