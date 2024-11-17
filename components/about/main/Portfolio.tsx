import React from 'react'
import AboutTitle from '../AboutTitle'
import PortfolioImages from '../PortfolioImages'
import Service from '@/components/Service'

const Portfolio = () => {
  return (
    <section className="py-[6rem] bg-blue-50">
      <div className="mx-auto w-[90%]">
        <div className="grid sm:grid-cols-[250px_1fr]">
          <AboutTitle
            title="Service We Offer"
            desc="Clean Sweep, Our before and after"
          />
          <p className="tracking-[1.5] leading-6 opacity-45  mb-[1rem] ">
            whether youre a business professional, researcher or industrial
            expert, our platform is designed with you in mind
          </p>
        </div>
        <Service />
        <PortfolioImages />

        <p className="tracking-[1.5] leading-6  mb-[1rem] font-bold text-[1.2rem] text-center uppercase mt-4">
          whether youre a business professional, researcher or industrial
          expert, our platform is designed with you in mind
        </p>
      </div>
    </section>
  )
}

export default Portfolio
