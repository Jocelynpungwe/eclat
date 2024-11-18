import React from 'react'
import Image from 'next/image'
import { type ServiceType } from '@/utils/core'
import Link from 'next/link'

const Commercial = ({ icon, service, desc, alt }: ServiceType) => {
  return (
    <section className="bg-white px-[1rem] py-[2rem] header-shadow w-full h-full">
      <div className=" h-[200px] mb-4">
        <Image
          src={icon}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="text-center">
        <h2 className="font-bold text-[1.2rem] mb-[1.5rem]">{service}</h2>
        <p className="tracking-[1.5] leading-6 opacity-45  mb-[2rem] text-[0.8rem]">
          {desc}
        </p>
        <Link
          href="/booking"
          className="py-4 px-8 bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] transition-all duration-300 ease-in-out text-white "
        >
          Enquire Now
        </Link>
      </div>
    </section>
  )
}

export default Commercial
