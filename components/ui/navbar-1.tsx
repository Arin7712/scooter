"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Link } from "react-scroll";
import { default as Link2 } from "next/link";

const navItems = [
  { name: "Home", href: "home" },
  { name: "Problem", href: "problem" },
  { name: "About", href: "about" },
  { name: "Pricing", href: "contact" },
];

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-center w-full py-6 px-4 z-50">
      <div className="flex items-center justify-between w-full px-6 py-3 bg-gradient-to-b from-zinc-600 to-black rounded-full shadow-lg md:max-w-[80%] lg:max-w-[85%] relative z-10">

        {/* Left - Logo and Nav Items */}
        <div className="flex items-center gap-10 flex-shrink-0">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <h1 className="text-2xl text-neutral-200 font-medium">Scooter</h1>
          </motion.div>

          {/* Nav Links (beside logo) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link to={item.href} smooth={true} duration={1000} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-sm hover:cursor-pointer text-neutral-300 hover:text-white transition-all duration-200">
                    {item.name}
                  </div>
                </motion.div>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right - Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link2 href="https://quizlibrary.thescooter.ai/">
            <div className="inline-flex hover:cursor-pointer items-center justify-center px-5 py-2 text-sm text-white border-[1px] bg-none rounded-full transition-colors hover:bg-white hover:text-black duration-300">
              Quiz
            </div>
          </Link2>

          <Link2 href="/contact">
            <motion.div className="hidden lg:block" transition={{ duration: 0.3, delay: 0.2 }}>
              <div className="inline-flex hover:cursor-pointer items-center justify-center px-5 py-2 text-sm text-black bg-white rounded-full transition-colors hover:bg-transparent hover:text-white border-[1px]">
                Get Started
              </div>
            </motion.div>
          </Link2>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden flex items-center"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-6 w-6 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-neutral-950 z-50 pt-24 px-6 lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <h1 className="text-2xl text-neutral-200 font-medium">Scooter</h1>
            </div>
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-neutral-300" />
            </motion.button>
            <div className="flex flex-col space-y-6 pt-[4rem]">
              {navItems.map((item, index) => (
                <Link to={item.href} smooth={true} duration={1000} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-sm hover:cursor-pointer text-neutral-300 hover:text-white transition-all duration-200">
                      {item.name}
                    </div>
                  </motion.div>
                </Link>
              ))}
              <Link to="contact" smooth={true} duration={1000}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="pt-6"
                >
                  <div
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-black bg-white rounded-full hover:bg-gray-800 transition-colors"
                    onClick={toggleMenu}
                  >
                    Get Started
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Navbar1 };
