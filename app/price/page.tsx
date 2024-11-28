import AboutTitle from '@/components/about/AboutTitle'
import PriceDisplay from '@/components/price/PriceDisplay'
import { priceList, additionalList } from '@/utils/price'
import React from 'react'

const page = () => {
  return (
    <section className="py-[12rem] container ">
      <h1 className="text-[2rem] font-bold">Prices Page</h1>
      <div
        className="bg-[var(--secondary-color)] text-white text-center py-12 px-12 my-8 "
        id="residential"
      >
        <p className="text-[1rem]">
          Below are packaged prices, customizable to your needs. Scroll down to
          view prices for all the cleaning services we offer. Adjust services to
          suit your preferences and ensure a thorough, tailored cleaning
          experience.
        </p>
      </div>
      <div className="py-12">
        <AboutTitle
          title="Package Price"
          desc="This price package are for Residential Cleaning, Move In & Out Cleaning, Deep Cleaning, Pre Sale Cleaning"
          textColor="black"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-8 lg:grid-cols-3">
        {priceList.map((price) => {
          return (
            <div key={price.id}>
              <PriceDisplay
                title={price.title}
                list={price.list}
                desc={price.desc}
                price={price.price}
              />
            </div>
          )
        })}
      </div>
      <div className="py-12">
        <AboutTitle
          title="Additions"
          desc="If your proparty has extra or additional areas beyond the specified packege above, add them at the prices listed below."
          textColor="black"
        />
      </div>

      <div
        className="grid sm:grid-cols-2 gap-8 lg:grid-cols-3 "
        id="commercial"
      >
        {additionalList.map((price) => {
          return (
            <div key={price.id}>
              <PriceDisplay list={price.list} desc={price.desc} />
            </div>
          )
        })}
      </div>
      <div className="py-12">
        <AboutTitle
          title="OFFICES, WAREHOUSES, COMMERCIAL?"
          desc=""
          textColor="black"
        />
      </div>
      <div className="bg-[var(--secondary-color)] text-white text-center py-12 px-12 ">
        <p className="text-[1rem]">
          If you have a Construction company, office, warehouse, commercial or
          your property size is not listed, please contact us on the link below
          for a free viewing and quote.
        </p>
      </div>
    </section>
  )
}

export default page
