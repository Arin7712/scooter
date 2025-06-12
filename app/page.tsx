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
import Work from '@/components/Work'

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
      {/* <StickyScrollRevealDemo/> */}
      <Work/>
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



{/* 
            <div className="flex items-start">
            <div className="md:max-w-full w-full">
              {withScooter.map((item, index) => (
                <div
                  key={item.title + index}
                  className="border-b-[1px] border-neutral-600 pb-6 pt-6"
                >
                  <div>{item.icon}</div>
                  <motion.h2 className="text-md font-medium text-black mt-3">
                    {item.title}
                  </motion.h2>
                  <motion.p className="text-sm text-zinc-500 max-w-sm mt-1">
                    {item.description}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
  */}