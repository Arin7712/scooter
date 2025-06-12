"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
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
    const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

    React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 100);
      }
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // run initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center w-full py-6 px-4 z-50 fixed top-0 relative">
      <motion.div 
        transition={{ duration: 0.4 }} className="flex items-center justify-between w-full px-6  py-3 bg-gradient-to-b from-zinc-600 to-black rounded-full shadow-lg md:max-w-[80%] lg:max-w-[85%]  z-10">

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
              <ScrollLink to={item.href} smooth={true} duration={1000} key={index}>
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
              </ScrollLink>
            ))}
          </nav>
        </div>

        {/* Right - Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link2 href="https://quizlibrary.thescooter.ai/">
            <div className="inline-flex hover:cursor-pointer md:block hidden items-center justify-center px-5 py-2 text-sm text-white border-[1px] bg-none rounded-full transition-colors hover:bg-white hover:text-black duration-300">
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

            <div className="flex items-center gap-2">
          <Link2 href="https://quizlibrary.thescooter.ai/">
            <div className="inline-flex hover:cursor-pointer md:hidden block items-center justify-center px-5 py-2 text-sm text-white border-[1px] bg-none rounded-full transition-colors hover:bg-white hover:text-black duration-300">
              Quiz
            </div>
          </Link2>
          {/* Mobile Menu Button */}
          <motion.button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-neutral-200" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-200" />
          )}
        </motion.button>
            </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-zinc-600 to-black border-neutral-300 border-[1px] rounded-2xl z-50 mt-24 mx-6 py-6 px-6 md:hidden h-fit"
            initial={{ opacity: 0, y: "0%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "0%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <ScrollLink
                  to={item.href}
                  key={i}
                  smooth={true}
                  duration={1000}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <a
                      href={item.href}
                      className="text-base text-neutral-200 font-medium"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                </ScrollLink>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <Link2
                  href="https://calendly.com/aringawande7712/30min"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-neutral-800 bg-neutral-200 rounded-full hover:bg-gray-800 transition-colors"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link2>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Navbar1 };
