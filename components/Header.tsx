import React from 'react'
import Logo from './header/Logo'
import Navbar from './header/Navbar'
import HamburgerBtn from './header/HamburgerBtn'
import ContactBtn from './header/ContactBtn'
import LogoBig from './header/LogoBig'
const Header = () => {
  return (
    <header className="fixed top-0 right-0 z-10 bg-white w-full header-shadow">
      <div className="flex items-center justify-between py-[2.5rem] mx-auto w-[95%] max-w-[1200px] h-[14vh]">
        <div className="md:hidden">
          <Logo />
        </div>
        <div className="hidden md:grid">
          <LogoBig />
        </div>
        <div className="hidden md:grid mt-4">
          <Navbar />
        </div>
        <div className="md:hidden">
          <HamburgerBtn />
        </div>
        <div className="hidden md:grid">
          <ContactBtn />
        </div>
      </div>
    </header>
  )
}

export default Header
