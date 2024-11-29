import AboutTitle from '@/components/about/AboutTitle'
import Link from 'next/link'
import React from 'react'
import { UserPen } from 'lucide-react'
import { BookCheck } from 'lucide-react'
import { Speech } from 'lucide-react'

const page = () => {
  return (
    <section className="py-[12rem] container ">
      <h1 className="text-[2rem] font-bold">Booking Page</h1>
      <div className="bg-[var(--secondary-color)] text-white text-left py-12 px-12 my-8 ">
        <h2 className="text-[1.3rem] font-bold">How it works:</h2>
        <div className="flex  gap-4 my-4">
          <div className="rounded-full border-white border-[1px] w-[2rem] h-[2rem] flex justify-center items-center">
            <BookCheck />
          </div>
          <p>Get A Free Quote OR Book Directly</p>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="rounded-full border-white border-[1px] w-[2rem] h-[2rem] flex justify-center items-center">
            <UserPen />
          </div>
          <p>Logging using email address in our client hub</p>
        </div>
        <div className="flex gap-4">
          <div className="rounded-full border-white border-[1px] w-[2rem] h-[2rem] flex justify-center items-center">
            <Speech />
          </div>
          <p>
            Your Quote, Appointment, Invoce and Payment will be communicated in
            the client hub
          </p>
        </div>
      </div>

      <section className="grid md:grid-cols-3 gap-4">
        <div className="flex flex-col justify-between gap-6 header-shadow py-4 px-4">
          <AboutTitle
            title="Client Hub"
            desc="view your appointment, Quote, Invoice and Make payment. Use email to login "
          />

          <Link
            href="https://clienthub.getjobber.com/client_hubs/44a6a7a5-0f32-415b-ad8e-ed5d4233c4f9/login/new?source=share_login"
            className="text-center py-[1rem] px-[1.5rem] text-white font-bold bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] uppercase tracking-wider transition-all ease-in-out duration-300 lg:text-[1.2rem]"
          >
            Login
          </Link>
        </div>
        <div className="flex flex-col gap-6 header-shadow justify-between  py-4 px-4">
          <AboutTitle title="Bookings" desc="Book a direct appointment  " />
          <Link
            href="https://clienthub.getjobber.com/booking/b320892b-cffa-48a2-9bf7-2eef827132f8"
            className="text-center py-[1rem] px-[1.5rem] text-white font-bold bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] uppercase tracking-wider transition-all ease-in-out duration-300 lg:text-[1.2rem]"
          >
            Booking Now
          </Link>
        </div>
        <div className="flex flex-col gap-6 header-shadow justify-between py-4 px-4">
          <AboutTitle title="Free Quote" desc="Get a Free Quote" />

          <Link
            href="https://clienthub.getjobber.com/client_hubs/44a6a7a5-0f32-415b-ad8e-ed5d4233c4f9/public/work_request/new?source=social_media"
            className="text-center py-[1rem] px-[1.5rem] text-white font-bold bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] uppercase tracking-wider transition-all ease-in-out duration-300 lg:text-[1.2rem]"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </section>
  )
}

export default page
