'use client'
import React from 'react'

const ContactBtn = () => {
  return (
    <button
      onClick={() => console.log('get in touch')}
      className="py-[1rem] px-[1.5rem] text-white font-bold bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] uppercase tracking-wider transition-all ease-in-out duration-300"
    >
      Get in touch
    </button>
  )
}

export default ContactBtn
