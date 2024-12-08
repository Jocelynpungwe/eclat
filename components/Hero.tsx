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
        <h1 className=" text-[1.8rem] md:text-[2.5rem] tracking-wide mb-[1rem] font-bold">
          Sparkling Clean, Every Time!
        </h1>
        <p className=" text-[0.875rem] md:text-[1rem] tracking-wide leading-[2] mb-[2rem] ">
          Say goodbye to dirt, dust, and allergens! Our professional cleaning
          service improve indoor air quality, enhance your lifestyle and improve
          productivity
        </p>
        <Link
          href="/booking"
          className="text-[0.875rem] md:text-[1rem] bg-transparent hover:bg-black transition-all duration-300 ease-in-out border-blue-50 border-[1px] border-solid py-[1rem] px-[1.5rem] inline-block"
        >
          Get Free Quote
        </Link>
      </article>
    </section>
  )
}

export default Hero
