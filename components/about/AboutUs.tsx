import React from 'react'
import AboutTitle from './AboutTitle'
import { BookOpenCheck } from 'lucide-react'
const AboutUs = () => {
  return (
    <section className="text-left">
      <AboutTitle title="About Us" desc="Who we are" />
      <div className="grid grid-cols-[auto_1fr] gap-x-[1.5rem] py-[1rem]">
        <div className="flex items-center justify-center">
          <BookOpenCheck className="text-[var(--secondary-color)] w-[80px] h-[80px]" />
        </div>
        <p className="font-semibold tracking--[1.5] leading-4 mb-[0.5rem]">
          whether youre a business professional, researcher or industrial
          expert, our platform is designed with you in mind
        </p>
      </div>
      <p className="tracking-[1.5] leading-8 opacity-45  mb-[1rem]">
        whether youre a business professional, researcher or industrial expert,
        our platform is designed with you in mind
      </p>
      <p className="tracking-[1.5] leading-8 opacity-45 mb-[1rem]">
        whether youre a business professional, researcher or industrial expert,
        our platform is designed with you in mind
      </p>
      <p className="tracking-[1.5] leading-8 opacity-45  mb-[1rem]">
        whether youre a business professional, researcher or industrial expert,
        our platform is designed with you in mind
      </p>
    </section>
  )
}

export default AboutUs
