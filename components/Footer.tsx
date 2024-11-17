import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/utils/links'
import Logo from './header/Logo'
import { MapPin } from 'lucide-react'
import { PhoneCall } from 'lucide-react'
import { MailOpen } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-black text-center text-white text-opacity-45 flex-shrink-0 py-[4rem]">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center mb-8">
          <div>
            <Logo />
          </div>
          <p className="text-white opacity-45">
            Empower your style with ECLACT SERVICE - Where fashion meets faith.
          </p>
        </div>
        <div className="mb-8">
          <h4 className="font-bold text-[1.3rem] mb-4">Featured Links</h4>
          <ul className="flex flex-col justify-center gap-[15px]">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className="text-[var(--secondary-color)] text-4 capitalize tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="mb-8 ">
          <h4 className="font-bold text-[1.3rem] mb-4">Open Hours</h4>
          <p className="text-[var(--secondary-color)] mb-4">
            Monday - Friday: 9h - 18h
          </p>
          <p className="text-[var(--secondary-color)] mb-4">
            Saturday: 9am - 4pm
          </p>
          <p className="text-[var(--secondary-color)] mb-4">
            Sunday: 9am - 4pm
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[1.3rem] mb-4">Get In Touch</h4>
          <div className="flex flex-col">
            <div className="mx-auto w-full grid grid-cols-[auto_1fr] gap-8 justify-center items-center my-4">
              <span className="text-[var(--secondary-color)]">
                <MailOpen />
              </span>
              <p className="text-[var(--secondary-color)] text-left">
                cogebisco@gmail.com
              </p>
            </div>
            <div className="mx-auto w-full grid grid-cols-[auto_1fr] gap-8 justify-center items-center my-4">
              <span className="text-[var(--secondary-color)]">
                <PhoneCall />
              </span>
              <p className="text-[var(--secondary-color)] text-left">
                +243 997 760 547
              </p>
            </div>
            <div className="mx-auto w-full grid grid-cols-[auto_1fr] gap-8 justify-center items-center my-4">
              <span className="text-[var(--secondary-color)]">
                <MapPin />
              </span>
              <p className="text-[var(--secondary-color)] text-left">
                71 reu bellehumair, Gatineu,
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold">Copyright 2024. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
