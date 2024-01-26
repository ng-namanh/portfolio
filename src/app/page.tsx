import About from '@/components/about'
import Projects from '@/components/project'
import Experience from '@/components/experience'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className=' md:mt-[9rem] mt-16 text-center flex flex-col justify-center items-center relative md:max-w-[700px] mx-auto my-0'>
        <h2 className='text-accent font-bold text-34 md:text-42'>
          Xin chao, <br />
          I&apos;m <span className='gradient-text'>Nam Anh</span>
        </h2>
        <p className='font-bold text-14 md:text-20 text-accent mx-4 my-4 '>
          Frontend Developer | Full-stack JS | DevOps Enthusiast
        </p>
        <Avatar className='md:h-[120px] md:w-[120px] h-24 w-24 md:absolute md:top-0 md:right-16'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Link
          href='https://drive.google.com/file/d/1jSXxMmF0SDBTSBQDeS-pHY3HT2GYe9MZ/view?usp=sharing'
          target='_blank'
        >
          <Button className='px-2 py-6 hover:bg-primary/70 mt-8  '>
            <span className='text-20 font-bold text-accent'>My Resume</span>
          </Button>
        </Link>
      </section>
      <About />
      <Experience />
      <Projects />
    </>
  )
}
