import Card from './card-container'
import SectionWrapper from './section-wrapper'
import React from 'react'

function Projects() {
  return (
    <SectionWrapper title='Projects' id='project'>
      <div className='grid grid-cols-2 gap-10 mt-8'>
        <Card
          title='Aerocamp'
          description='AeroCamp is where people can join and choose favorite campgrounds for their trip, or can add your own campgrounds, write review'
          imageUrl='project1.png'
          techstack={['reactjs', 'expressjs', 'mongodb', 'expressjs']}
        />
        <Card
          title='GDSC HANU Platform'
          description='This is a demo for description'
          imageUrl='gdsc_platform.jpg'
          techstack={['nuxtjs', 'sass', 'typescript']}
        />
      </div>
    </SectionWrapper>
  )
}
export default Projects
