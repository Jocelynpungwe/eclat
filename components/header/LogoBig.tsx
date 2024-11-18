import React from 'react'
import logo from '@/public/images/logo-eclat.png'
import Image from 'next/image'

const LogoBig = () => {
  return (
    <>
      <Image
        src={logo}
        alt="eclat service de nettoyage logo"
        height={130}
        width={130}
      />
    </>
  )
}

export default LogoBig
