import React from 'react'
import Commercial from './service/Commercial'
import { ourService } from '@/utils/core'

const Service = () => {
  return (
    <section className="grid gap-8 mb-8">
      {ourService.map((item) => {
        return (
          <div key={item.service}>
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
