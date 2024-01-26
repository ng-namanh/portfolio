import Card from './card-container'
import SectionWrapper from './section-wrapper'
import React from 'react'

function Projects() {
  return (
    <SectionWrapper title='Projects' id='project'>
      <Card
        title='Aerocamp'
        description='This is a demo for description'
        imageUrl='project1.png'
      />
    </SectionWrapper>
  )
}
export default Projects
