import { Contact2 } from '@/components/contact-2'
import { FaqSectionWithCategoriesDemo } from '@/components/FAQs'
import { Demo } from '@/components/FooterDemo'
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
          <Contact2 
      title="Let's talk sales hiring"
      description="We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!"
      phone="(123) 34567890"
      email="email@example.com"
      web={{ label: "shadcnblocks.com", url: "https://shadcnblocks.com" }}
    />
    <Demo/>
    </div>
  )
}

export default page
