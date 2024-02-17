import Projects from '@/components/project'
import Experience from '@/components/experience'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { About } from '@/components/about'
import {
  TypeWriterEffectJob,
  TypeWriterEffectName
} from '@/components/typewriter'

export default function Home() {
  return (
    <>
      <section className='mt-4 mb-16 md:mt-8 text-center flex flex-col justify-center items-center relative md:max-w-[700px] mx-auto'>
        <TypeWriterEffectName />
        <p className='font-bold text-14 md:text-20 text-accent mx-4 mb-4 '>
          Frontend Developer | Full-stack JS | DevOps Enthusiast
        </p>
        <Link
          href='https://drive.google.com/file/d/1KwIKmSiAjslsUbTxLmWDJtDj_hExyQ5n/view?usp=sharing'
          target='_blank'
        >
          <Button className='px-4 py-6 hover:bg-primary/70 mt-4'>
            <span className='text-20 font-bold text-white'>My Resume</span>
          </Button>
        </Link>
      </section>
      <About />
      <Experience />
      <Projects />
    </>
  )
}
