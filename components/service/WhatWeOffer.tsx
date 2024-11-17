import Image from 'next/image'
import React from 'react'
import whyImage from '@/public/images/hero-clean.jpg'
import AboutTitle from '../about/AboutTitle'
import { ourService } from '@/utils/core'
import Offers from './Offers'
import ContactBtn from '../header/ContactBtn'
const WhatWeOffer = () => {
  return (
    <div className="grid sm:grid-cols-2">
      <Image
        src={whyImage}
        alt="lady cleaning the house"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div>
        <AboutTitle
          title="Services We Offer"
          desc="Discover our expertise: A range of service tailored for you"
        />
        {ourService.map(({ icon, service, desc }) => {
          return (
            <Offers icon={icon} desc={desc} service={service} key={service} />
          )
        })}
        <ContactBtn />
      </div>
    </div>
  )
}

export default WhatWeOffer
