'use client'
import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const TextTiltCard = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-50, 50], [10, -10])
  const rotateY = useTransform(x, [-50, 50], [-10, 10])

const handleMouseMove = (event: React.MouseEvent) => {
  if (!cardRef.current) return;

  const rect = cardRef.current.getBoundingClientRect();
  const offsetX = event.clientX - rect.left - rect.width / 2;
  const offsetY = event.clientY - rect.top - rect.height / 2;
  x.set(offsetX);
  y.set(offsetY);
};

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="bg-white shadow-xl rounded-xl p-10 w-80 text-center transition-transform"
    >
      <h2 className="text-2xl font-bold mb-2">👋 Welcome</h2>
      <p className="text-gray-600">
        This block tilts slightly based on your cursor. Clean, smooth, and fun!
      </p>
    </motion.div>
  )
}

export default TextTiltCard
