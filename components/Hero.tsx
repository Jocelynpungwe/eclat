import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative hero-bg text-white flex flex-col text-center items-center justify-center h-[80vh] mt-[5rem]"
    >
      <div className=" absolute w-full h-full top-0 left-0  bg-opacity-70 bg-black"></div>
      <article className="z-[1] w-[90%] max-w-[850px]">
        <h1 className=" text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] tracking-wide mb-[1rem] font-bold">
          Trust the Cleaning Experts to Shine Your Space
        </h1>
        <p className=" text-[1.2rem] md:text-[1.5rem] tracking-wide mb-[2rem] ">
          Say goodbye to dirt, dust, and allergens! Our professional cleaning
          service improve indoor air quality, enhance your lifestyle and improve
          productivity
        </p>
        <Link
          href="#contact"
          className="md:text-[1.5rem] bg-transparent hover:bg-black transition-all duration-300 ease-in-out border-blue-50 border-[1px] border-solid py-[1rem] px-[1.5rem] inline-block"
        >
          Contact Us
        </Link>
      </article>
    </section>
  )
}

export default Hero
