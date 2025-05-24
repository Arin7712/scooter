'use client'
import React from 'react'
import { Navbar1 } from './ui/navbar-1'
import { DotPattern } from './ui/dot-pattern'
import { cn } from '@/lib/utils'
import { AnimatedShinyTextDemo } from './ui/AnimatedTextDemo'
import { Dancing_Script } from 'next/font/google'
import { Button } from './ui/button'
import Image from 'next/image'
import { InfiniteSlider } from './ui/infinite-slider'
import { motion } from 'framer-motion'

const font = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const fadeInProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true }
}

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-neutral-100">
      {/* Background Image */}
      <Image 
        src="/herobg.png" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover object-left-top z-0" 
        width={1000}
        height={1000}
      />

      <Navbar1 />
      
      <DotPattern
        cy={1}
        cr={1}
        cx={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        )}
      />

      <div className='flex flex-col pt-[4rem] items-center justify-center md:px-0 px-[2rem]'>
  <div className='flex flex-col md:max-w-5xl items-center justify-center gap-6 text-center z-50'>

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
      Sales hiring,<br />
      <span className={font.className}>Solved</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
      className='text-neutral-700 text-md max-w-xl'
    >
      Scooter is a sales hiring engine that uses AI and behavioral science to help you find the right driver for your GTM race.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      viewport={{ once: true }}
    >
      <Button className='bg-gradient-to-b from-zinc-600 to-black px-6 rounded-full'>
        Join the Waitlist
      </Button>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      viewport={{ once: true }}
      className='text-xs text-zinc-600 pt-6 font-medium'
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
        <Image src='/w1.png' alt='Image 1' width={100} height={100} />
        <Image src='/w2.png' alt='Image 2' width={100} height={100} />
        <Image src='/w2.png' alt='Image 3' width={100} height={100} />
        <Image src='/w4.png' alt='Image 4' width={100} height={100} />
      </InfiniteSlider>
    </motion.div>

  </div>
</div>

    </div>
  )
}

export default Hero
