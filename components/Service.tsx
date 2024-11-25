import React from 'react'
import Commercial from './service/Commercial'
import { ourService } from '@/utils/core'

const Service = () => {
  return (
    <section className="grid lg:grid-cols-[1fr_1fr_1fr] gap-8 my-4 justify-center items-center lg:py-8">
      {ourService.map((item) => {
        return (
          <div key={item.service} className="w-full h-full">
            <Commercial
              icon={item.icon}
              service={item.service}
              desc={item.desc}
              alt={item.alt}
            />
          </div>
        )
      })}
    </section>
  )
}

export default Service
