import CalendlyEmbed from '@/components/CalendlyEmbed'
import { Navbar2 } from '@/components/Navbar2'
import { Navbar1 } from '@/components/ui/navbar-1'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col relative'>
            <Navbar2/>
                <CalendlyEmbed/>


    </div>
  )
}

export default page
