'use client'

import { Tabs } from '@/components/ui/tabs'

export function About() {
  const tabs = [
    {
      title: 'About',
      value: 'about',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black '>
          <p>About me</p>
          <AboutContent />
        </div>
      )
    },
    {
      title: 'Skills',
      value: 'skills',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black '>
          <p>Skills</p>
          <SkillContent />
        </div>
      )
    }
  ]

  return (
    <div className='h-[700px] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-16 mt-4'>
      <Tabs tabs={tabs} />
    </div>
  )
}

const AboutContent = () => {
  return (
    <p className='text-14 font-medium text-center md:text-start md:text-16 text-white mt-4'>
      I’m currently an 3-year student majoring in Software Engineering who
      started programming back in 2021 and turned it into a hobby.
      <br />
      <br />
      My experience is mostly about Front-end development. I use Javascript as
      my main programing language for both Frontend and Backend and of course JS
      related ecosystem stuff. Beside that, I also love to explore other fields
      like DevOps & System stuff
      <br />
      <br />
      Besides from programming, I also do web design, listen to music. I also
      like trekking, mountaining or just carry my backpack to everywhere and
      enjoy.
    </p>
  )
}

const SkillContent = () => {
  return (
    <ul className='h-full text-14  text-start md:text-16 text-white font-light flex flex-col mt-4 gap-2'>
      <li>
        <span className='text-white font-semibold'>Language</span> : Javascript
      </li>
      <li>
        <span className='text-white font-semibold'> Client-side </span>:
        Vue/Nuxt, ReactJS/NextJS
      </li>
      <li>
        <span className='text-white font-semibold'>Server-side</span>: NestJS,
        ExpressJS
      </li>
      <li>
        <span className='text-white font-semibold'>
          Programming fundamental
        </span>
        : DSA, OOP, Database, SOLID Principle
      </li>
      <li>
        <span className='text-white font-semibold mr-1'>
          Knowledge of software architecture and design concepts
        </span>
        like Clean Architecture, DDD, and TDD
      </li>
      <li>
        <span className='text-white font-semibold'>Database</span>: MongoDB,
        MySQL, PostgreSQL
      </li>
      <li>Figma, Git as a tool</li>
    </ul>
  )
}
