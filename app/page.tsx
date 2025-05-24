import { FaqSectionWithCategoriesDemo } from '@/components/FAQs'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Problem2 from '@/components/Problem2'
import TextTiltCard from '@/components/TiltCard'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Problem/>
      <Problem2/>
      <FaqSectionWithCategoriesDemo/>
    </div>
  )
}

export default page
