'use client'
import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Dancing_Script } from 'next/font/google'

const font = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })


const quotes = [
  "“We’re not getting signal on what’s working.”",
  "“I need someone who can actually execute, not just give advice.”",
  "“Content keeps getting deprioritized.”",
  "“Our pipeline is inconsistent.”",
  "“We need more sales reps.”",
  "“I wish I had someone to turn my ideas into action.”"
]

const positions = [
  { top: '10%', left: '5%' },
  { top: '10%', right: '5%' },
  { bottom: '20%', left: '10%' },
  { bottom: '10%', right: '5%' },
  { top: '60%', left: '50%', transform: 'translateX(-50%)' },
  { bottom: '60%', right: '30%' },
]

const rotations = [
  'rotate(-3deg)',
  'rotate(5deg)',
  'rotate(2deg)',
  'rotate(-6deg)',
  'rotate(8deg)',
  'rotate(3deg)',
]

const Problem = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const isInView = useInView(containerRef, { once: true, margin: '-100px' }) // trigger when near viewport

  const handleMouseMove = (e: any) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-[6rem] relative flex items-center justify-center h-screen overflow-hidden bg-white"
    >
      
      <h1 className="text-5xl text-center z-10 font-medium">
        Why Founders <br />
        <span className={`text-zinc-500 ${font.className}`}>Partner With Us</span>
      </h1>

      <style>
        {`
          ${rotations
            .map(
              (rotation, i) => `
            @keyframes float${i} {
              0%, 100% {
                transform: ${positions[i].transform || ''} ${rotation} translateY(0);
              }
              50% {
                transform: ${positions[i].transform || ''} ${rotation} translateY(-8px);
              }
            }
          `
            )
            .join('\n')}
        `}
      </style>

      {quotes.map((quote, i) => {
        const moveX = mousePos.x * 8 * (i % 2 === 0 ? 1 : -1)
        const moveY = mousePos.y * 5

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: i * 0.3, duration: 0.8 }}
            className="absolute p-3 sm:p-4 md:max-w-[20%] max-w-[40%] rounded-md bg-neutral-300 text-xs md:text-md font-medium text-zinc-800 z-0"
            style={{
              ...positions[i],
              animation: `float${i} 4s ease-in-out ${i * 0.3}s infinite`,
              transform: `var(--animation-transform, none) translateX(var(--move-x)) translateY(var(--move-y))`,
            }}
            onAnimationIteration={(e) => {
              e.currentTarget.style.setProperty(
                '--animation-transform',
                window.getComputedStyle(e.currentTarget).transform
              )
            }}
          >
            <p>{quote}</p>
          </motion.div>
        )
      })}
    </div>
  )
}

export default Problem
