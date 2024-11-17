import React from 'react'
import { type ServiceType } from '@/utils/core'

const Offers = ({ icon, service, desc }: ServiceType) => {
  return (
    <div>
      <span>{icon}</span>
      <h3>{service}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Offers
