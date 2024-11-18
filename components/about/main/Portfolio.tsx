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
          <p className="tracking-[1.5] leading-6 opacity-45  mb-[1.5rem] ">
            We offer a wide range of cleaning solutions to meet the unique needs
            of our residential, office, and commercial clients.
          </p>
        </div>
        <Service />
        <p className="tracking-[1.5] leading-6  my-[1.8rem] font-bold text-[1.2rem] text-center uppercase mt-4">
          Sweep through our completed projects to get a glimpse of the standard
          of service we deliver.
        </p>
        <PortfolioImages />
      </div>
    </section>
  )
}

export default Portfolio
