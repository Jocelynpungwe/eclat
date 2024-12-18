import React from 'react'
import AboutTitle from './about/AboutTitle'
import { MapPin } from 'lucide-react'
import { PhoneCall } from 'lucide-react'
import { MailOpen } from 'lucide-react'
import ContactInfo from './contact/ContactInfo'
import ContactForm from './contact/ContactForm'
type ContactInfo = {
  id: number
  icon: React.JSX.Element
  title: string
  desc: string
  descTwo?: string
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
      desc: '873 655 2430 EN',
      descTwo: '873 455 6670 FR',
    },
    {
      id: 3,
      icon: <MapPin />,
      title: 'Address',
      desc: 'Gatineau',
    },
  ]

  return (
    <section id="contact" className="py-[6rem]  bg-gray-200">
      <div className="container md:grid md:grid-cols-2 md:justify-center md:items-center ">
        <div className="mb-8">
          <AboutTitle title="Contact Us" desc="Feel Free to get in touch" />
          <p className="tracking-[1.5] leading-6 opacity-45 mb-8">
            Feel Free to Reach Out for Assistance or Inquiries
          </p>
          {contactArray.map((item) => {
            return (
              <div key={item.id} className="mb-8">
                <ContactInfo
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  descTwo={item.descTwo}
                />
              </div>
            )
          })}
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
