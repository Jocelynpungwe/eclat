'use client'
import React from 'react'

const ContactBtn = () => {
  return (
    <button
      onClick={() => console.log('get in touch')}
      className="py-[1rem] px-[1.5rem] text-white font-bold bg-[var(--primary-color)] uppercase tracking-wider"
    >
      Get in touch
    </button>
  )
}

export default ContactBtn
