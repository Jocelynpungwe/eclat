import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/utils/links'
import Logo from './header/Logo'
// import { MapPin } from 'lucide-react'
import { PhoneCall } from 'lucide-react'
import { MailOpen } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react'
import LogoBig from './header/LogoBig'

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 justify-center items-center bg-black text-center text-white text-opacity-45 flex-shrink-0 py-[4rem]">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col md:grid md:grid-cols-2 justify-center items-center mb-8">
          <div className="md:hidden">
            <Logo />
          </div>
          <div className="hidden md:block ">
            <LogoBig />
          </div>
          <p className="text-white opacity-45 md:text-left">
            We’re not just a cleaning company; we’re your partners in creating
            cleaner, healthier, and more vibrant spaces.
          </p>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 md:text-left container">
        <div className="mb-8  ">
          <h4 className="font-bold text-[1.3rem] mb-4">Featured Links</h4>
          <ul className="flex flex-col justify-center  gap-[1rem]">
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

        <div className="flex flex-col  mx-auto w-full max-md:justify-center  max-md:items-center">
          <h4 className="font-bold text-[1.3rem] mb-4">Get In Touch</h4>
          <div className="flex flex-col">
            <div className=" grid grid-cols-[auto_1fr] gap-8 justify-start items-center my-1">
              <span className="text-[var(--secondary-color)]">
                <MailOpen />
              </span>
              <p className="text-[var(--secondary-color)] text-left">
                Eclatservicecontact@gmail.com
              </p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-8 justify-center items-center my-1">
              <span className="text-[var(--secondary-color)]">
                <PhoneCall />
              </span>
              <div>
                <p className="text-[var(--secondary-color)] text-left">
                  873 655 2430 EN
                </p>
                <p className="text-[var(--secondary-color)] text-left">
                  873 455 6670 FR
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-8 justify-center items-center my-1">
              <div>
                <Link
                  href="https://www.instagram.com/eclatservicedenettoyage/"
                  className="text-[var(--secondary-color)] text-4 capitalize tracking-wider"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
              <div>
                <Link
                  href="https://www.facebook.com/profile.php?id=61569705604156"
                  className="text-[var(--secondary-color)] text-4 capitalize tracking-wider"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* <div className=" grid grid-cols-[auto_1fr] gap-8 justify-center items-center my-1">
              <span className="text-[var(--secondary-color)]">
                <MapPin />
              </span>
              <p className="text-[var(--secondary-color)] text-left">
                71 Rue Bellehumeur, Gatineau
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-8 container">
        <p className="font-bold">Copyright 2024. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
