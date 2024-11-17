import React from 'react'
import AboutTitle from '../AboutTitle'
import AboutCore from '../AboutCore'
import AboutHistory from '../AboutHistory'

const CoreValue = () => {
  return (
    <section className="bg-black py-[3rem]">
      <div className="container">
        <div className="grid sm:grid-cols-[250px_1fr]">
          <AboutTitle
            title="Our Core Values"
            desc="Navigating our path with integrity"
            textColor="white"
          />
          <p className="tracking-[1.5] leading-8 opacity-45  mb-[1rem] ">
            whether youre a business professional, researcher or industrial
            expert, our platform is designed with you in mind
          </p>
        </div>
        <AboutCore />
        <AboutHistory />
      </div>
    </section>
  )
}

export default CoreValue
