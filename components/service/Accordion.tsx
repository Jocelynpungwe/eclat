'use client'
import React, { useState } from 'react'

type AccordionItem = {
  title: string
  content: string
}

type AccordionProps = {
  items: AccordionItem[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggleItem(index)}
            className="flex justify-between w-full p-4 text-left text-gray-800 font-semibold focus:outline-none"
          >
            <span>{item.title}</span>
            <span
              className={`${
                activeIndex === index ? 'transform rotate-180' : ''
              } transition-transform duration-300`}
            >
              &#9660;
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 text-gray-600 bg-gray-50">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
