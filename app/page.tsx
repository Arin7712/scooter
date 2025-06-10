'use client'
import { Contact2 } from '@/components/contact-2'
import { FaqSectionWithCategoriesDemo } from '@/components/FAQs'
import { Demo } from '@/components/FooterDemo'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Problem2 from '@/components/Problem2'
import { StickyScrollRevealDemo } from '@/components/StickyScrollRevealDemo'
import { Element } from 'react-scroll';
import React from 'react'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import Comparision from '@/components/Comparision'

const page = () => {
  return (
    <div>
      <Element name="home">
      <Hero/>
      </Element>
      <Comparision/>
      <Problem/>
      <Element name="problem">
      <Problem2/>
      </Element>
      {/* <Solution/> */}
      <Element name="about">
      <StickyScrollRevealDemo/>
      </Element>
      <FaqSectionWithCategoriesDemo/>
      <Element name="contact">
          <Contact2 
    />
    </Element>
    <Demo/>
    </div>
  )
}

export default page
