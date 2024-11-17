import React from 'react'
import { type MissionType } from '../../utils/core'

const Core = ({ id, title, icon, desc }: MissionType) => {
  return (
    <article className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front flex flex-col">
          <span className="w-[4rem] h-[4rem] grid mx-auto place-items-center rounded-[50%] text-[10rem] text-white bg-black">
            {icon}
          </span>
          <h3 className="text-white capitalize text-[1.2rem] font-bold my-[1rem] tracking-widest">
            {title}
          </h3>
        </div>
        <div className="flip-card-back">
          <p className="text-white opacity-[0.75]">{desc}</p>
        </div>
      </div>
    </article>
  )
}

export default Core