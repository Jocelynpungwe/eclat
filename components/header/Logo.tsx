import React from 'react'
import logo from '@/public/images/logo-eclat.png'
import Image from 'next/image'

const Logo = () => {
  return (
    <>
      <Image
        src={logo}
        alt="eclat service de nettoyage logo"
        height={100}
        width={100}
      />
    </>
  )
}

export default Logo