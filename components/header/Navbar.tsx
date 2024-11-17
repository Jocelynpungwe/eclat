import React from 'react'
import { navLinks } from '@/utils/links'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-x-[3rem]">
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
