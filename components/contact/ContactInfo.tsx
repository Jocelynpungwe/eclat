import React from 'react'
type ContactInfoProps = {
  icon: React.JSX.Element
  title: string
  desc: string
  descTwo?: string
}

const ContactInfo = ({ icon, title, desc, descTwo }: ContactInfoProps) => {
  return (
    <article className="grid grid-cols-[auto_1fr] gap-4 items-center justify-center">
      <span className="w-[3rem] h-[3rem] lg:h-[3.5rem] lg:[3.5rem] grid mx-auto place-items-center rounded-[50%] text-[10rem] text-white bg-[var(--secondary-color)]">
        {icon}
      </span>
      <div>
        <h4 className="font-bold text-[1.2rem] lg:text-[1.4rem]">{title}</h4>
        <p className="tracking-[1.5] leading-6 opacity-45 text-[1rem]">
          {desc}
        </p>
        {descTwo && (
          <p className="tracking-[1.5] leading-6 opacity-45 text-[1rem] ">
            {descTwo}
          </p>
        )}
      </div>
    </article>
  )
}

export default ContactInfo
