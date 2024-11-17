import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative hero-bg text-white flex flex-col text-center items-center justify-center h-[50vh]">
      <div className=" absolute w-full h-full top-0 left-0  bg-opacity-70 bg-black"></div>
      <article className="z-[1]">
        <h1 className="text-[1.8rem] tracking-wide mb-[1rem]">
          Welcome to Eclat Service de Nettoyage
        </h1>
        <p className="text-[1rem] tracking-wide mb-[2rem]">
          We are delighted to welcome you to eclat cleaning service welcoming
          you soon
        </p>
        <Link
          href="#about"
          className="bg-transparent border-blue-50 border-[1px] border-solid py-[1rem] px-[1.5rem] inline-block"
        >
          Know More
        </Link>
      </article>
    </section>
  )
}

export default Hero
