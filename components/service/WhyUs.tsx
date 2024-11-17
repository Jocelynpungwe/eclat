import React from 'react'
import AboutTitle from '../about/AboutTitle'
import Accordion from './Accordion'

const WhyUs = () => {
  const accordionItems = [
    {
      title: 'What is your refund policy?',
      content: 'We offer a full refund within 30 days of purchase.',
    },
    {
      title: 'Do you offer customer support?',
      content: 'Yes, customer support is available 24/7 via email and phone.',
    },
    {
      title: 'Can I upgrade my plan later?',
      content:
        'Absolutely, you can upgrade at any time through your account settings.',
    },
  ]
  return (
    <div className="grid sm:grid-cols-2">
      <div>
        <AboutTitle
          title="Eclat service"
          desc="why choose our eclat services"
        />
        <p>this is a description of why us</p>
        <p>this is a description of why us</p>
      </div>
      <div>
        <h3>Key feature</h3>
        <Accordion items={accordionItems} />
      </div>
    </div>
  )
}

export default WhyUs
