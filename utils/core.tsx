import { StaticImageData } from 'next/image'
import { Target } from 'lucide-react'
import { Eye } from 'lucide-react'
import { Trophy } from 'lucide-react'

export type CoreType = {
  id: number
  img: string
  title: string
  desc: string
}

export const coreValues: CoreType[] = [
  {
    id: 1,
    img: 'first image',
    title: 'Mission',
    desc: 'the mission',
  },
  {
    id: 2,
    img: 'second image',
    title: 'vision',
    desc: 'the vision',
  },
  {
    id: 3,
    img: 'three image',
    title: 'efficient',
    desc: 'the efficient',
  },
]

export type MissionType = {
  id: number
  icon: React.JSX.Element
  title: string
  desc: string
}

export const coreMission: MissionType[] = [
  {
    id: 1,
    icon: <Target />,
    title: 'Mission',
    desc: 'This is a small description',
  },
  {
    id: 2,
    icon: <Eye />,
    title: 'Vision',
    desc: 'This is a small description',
  },
  {
    id: 3,
    icon: <Trophy />,
    title: 'Objectives',
    desc: 'This is a small description',
  },
]

import floor1 from '@/public/images/floor1.jpg'
import floor2 from '@/public/images/floor2.jpg'
import floor3 from '@/public/images/floor3.jpg'
import kitchen1 from '@/public/images/kitchen1.jpg'
import kitchen2 from '@/public/images/kitchen2.jpg'
import kitchen3 from '@/public/images/kitchen3.jpg'
import kitchen4 from '@/public/images/kitchen4.jpg'
import kitchen5 from '@/public/images/kitchen5.jpg'
import kitchen6 from '@/public/images/kitchen6.jpg'
import shower1 from '@/public/images/shower1.jpg'
import shower2 from '@/public/images/shower2.jpg'
import toilet1 from '@/public/images/toilet1.jpg'
import toilet2 from '@/public/images/toilet2.jpg'
import work1 from '@/public/images/work1.jpg'
import work2 from '@/public/images/work2.jpg'
import work3 from '@/public/images/work3.jpg'
import work4 from '@/public/images/work4.jpg'
import work6 from '@/public/images/work6.jpg'
import com1 from '@/public/images/com-1.jpg'
import com2 from '@/public/images/com-2.jpg'
import com3 from '@/public/images/com-3.jpg'

export type PortfolioImgType = {
  id: number
  image: StaticImageData[]
}

export const porfolioImg: PortfolioImgType[] = [
  { id: 0, image: [com1, com2, com3] },
  { id: 1, image: [floor1, floor2, floor3] },
  {
    id: 2,
    image: [kitchen1, kitchen2, kitchen3, kitchen4, kitchen5, kitchen6],
  },
  {
    id: 3,
    image: [shower1, shower2],
  },
  {
    id: 4,
    image: [toilet1, toilet2],
  },
  {
    id: 5,
    image: [work1, work2, work3, work4, work6],
  },
]

export type ServiceType = {
  icon: StaticImageData
  service: string
  desc: string
  alt: string
}

import heroImg from '@/public/images/hero-clean.jpg'
export const ourService: ServiceType[] = [
  {
    icon: heroImg,
    service: 'Residential Cleaning',
    desc: 'we clean all residential',
    alt: 'the type of image',
  },
  {
    icon: heroImg,
    service: 'Cleaning of professional premises',
    desc: 'we clean all professional premises',
    alt: 'the type of image',
  },
  {
    icon: heroImg,
    service: 'Commercial Cleaning',
    desc: 'we clean commercial places',
    alt: 'the type of image',
  },
]
