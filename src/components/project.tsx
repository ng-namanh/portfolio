import { projectItems } from '@/lib/constants'
import Card from './card-container'
import SectionWrapper from './section-wrapper'
import React from 'react'
import Link from 'next/link'

function Projects() {
  return (
    <SectionWrapper title='Projects' id='project' className='mb-16'>
      <div className='grid md:grid-cols-2 md:gap-10 gap-4 mt-8 w-full'>
        <Link
          href='https://github.com/ng-namanh/aerocamp'
          className='cursor-pointer'
        >
          <Card
            title={projectItems[0].title}
            description={projectItems[0].description}
            imageUrl={projectItems[0].image}
            techstack={['reactjs', 'expressjs', 'mongodb', 'expressjs']}
          />
        </Link>
        <Link href='https://gdschanu.com/'>
          <Card
            title={projectItems[1].title}
            description={projectItems[1].description}
            imageUrl={projectItems[1].image}
            techstack={['nuxtjs', 'sass', 'typescript']}
          />
        </Link>
      </div>
    </SectionWrapper>
  )
}
export default Projects
