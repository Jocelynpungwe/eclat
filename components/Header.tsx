import React from 'react'
import Logo from './header/Logo'
import Navbar from './header/Navbar'
import HamburgerBtn from './header/HamburgerBtn'
import ContactBtn from './header/ContactBtn'
const Header = () => {
  return (
    <header className=" header-shadow">
      <div className="flex justify-between py-[2rem] container h-[12vh] items-center ">
        <Logo />
        <div className="hidden">
          <Navbar />
        </div>
        <HamburgerBtn />
        <div className="hidden">
          <ContactBtn />
        </div>
      </div>
    </header>
  )
}

export default Header
