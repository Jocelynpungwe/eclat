import React from 'react'
import AboutTitle from './about/AboutTitle'
import { MapPin } from 'lucide-react'
import { PhoneCall } from 'lucide-react'
import { MailOpen } from 'lucide-react'
import ContactInfo from './contact/ContactInfo'

type ContactInfo = {
  id: number
  icon: React.JSX.Element
  title: string
  desc: string
}

const Contact = () => {
  const contactArray: ContactInfo[] = [
    {
      id: 1,
      icon: <MailOpen />,
      title: 'Email Address',
      desc: 'eclactservicecontact@gmail.com',
    },
    {
      id: 2,
      icon: <PhoneCall />,
      title: 'Phone No',
      desc: '0788870082',
    },
    {
      id: 3,
      icon: <MapPin />,
      title: 'Address',
      desc: '71 reu bellehumer',
    },
  ]

  return (
    <section className="container py-[4rem] md:grid md:grid-cols-2 md:justify-center md:items-center">
      <div className="mb-8">
        <AboutTitle title="Contact Us" desc="Feel Free to get in touch" />
        <p className="mb-8">
          Feel Free to Reach Out for Assistance or Inquiries
        </p>
        {contactArray.map((item) => {
          return (
            <div key={item.id} className="mb-8">
              <ContactInfo
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            </div>
          )
        })}
      </div>
      <div>
        CONTACT FORM FROM MAILCHIMP WILL BE HERE FOR ADVERICING PURPOSES
      </div>
    </section>
  )
}

export default Contact
