'use client'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'

export function TypeWriterEffectName() {
  const words = [
    {
      text: 'Hi'
    },
    {
      text: "I'm"
    },
    {
      text: 'namanh.',
      className: 'text-blue-500 dark:text-blue-500'
    }
  ]
  return (
    <div className='flex flex-col items-center justify-center '>
      <TypewriterEffectSmooth words={words} />
    </div>
  )
}

export function TypeWriterEffectJob() {
  const words = [
    {
      text: 'Frontend'
    },
    {
      text: 'Developer'
    },
    {
      text: '|'
    },
    {
      text: 'Full-stack'
    },
    {
      text: 'JS'
    },
    {
      text: '|'
    },
    {
      text: 'DevOps'
    },
    {
      text: 'Enthusiast'
    }
  ]
  return (
    <div className='flex flex-col items-center justify-center mx-4 my-4 '>
      <TypewriterEffectSmooth words={words} className='text-sm text-accent ' />
    </div>
  )
}
