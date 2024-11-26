'use client'
import React from 'react'
import Link from 'next/link'

const ContactBtn = () => {
  return (
    // <button
    //   onClick={() => console.log('get in touch')}
    //   className="py-[1rem] px-[1.5rem] text-white font-bold bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] uppercase tracking-wider transition-all ease-in-out duration-300 lg:text-[1.2rem]"
    // >
    //   Get in touch
    // </button>
    <Link
      href="#contact"
      className="py-[1rem] px-[1.5rem] text-white font-bold bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] uppercase tracking-wider transition-all ease-in-out duration-300 lg:text-[1.2rem]"
    >
      Contact Us
    </Link>
  )
}

export default ContactBtn
