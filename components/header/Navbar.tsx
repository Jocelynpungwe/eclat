import React from 'react'
import { navLinks } from '@/utils/links'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-x-[1.2rem] lg:gap-x-[3rem]">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className="text-[1rem] lg:text-[1.2rem] font-semibold tracking-wider hover:border-b-[0.1rem] hover:border-[var(--secondary-color)] transition-all ease-in-out duration-300 py-[0.5rem]"
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
