import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon, InsIcon, LinkedinIcon } from './icons'
import { MailIcon } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className='text-accent w-full px-2 sm:w-1/3 md:w-1/4 relative'>
      <div className='flex flex-col justify-center items-center sticky top-0 left-0 w-full p-4 text-center'>
        <h2 className='text-26'>Nguyễn Nam Anh</h2>
        <Image
          src='/avatar.jpg'
          alt='Avatar'
          width={180}
          height={180}
          className='border-2 border-accent rounded-full my-6'
        />
        <p className='font-thin'>
          I&apos;m Nam Anh, a 3-year SE student based in Hanoi, Vietnam
        </p>

        <p className='font-thin my-6'>
          Currently working
          <Link href='https://www.facebook.com/gdschanu'>
            <span className='text-blue-500 mx-1'>
              @ Google Developer Students Club - HANU
            </span>
          </Link>
          as<span className='font-bold'> Frontend Lead</span>
        </p>
        <div className='flex justify-center items-center gap-2 mt-2'>
          <div className='flex justify-center items-center gap-2 mt-2'>
            <p className='font-bold whitespace-nowrap'>Connect with me: </p>
            <Link href='https://github.com/ng-namanh/' target='_blank'>
              <GithubIcon />
            </Link>
            <Link href='https://www.linkedin.com/in/namanhh03/' target='_blank'>
              <LinkedinIcon />
            </Link>
            <Link
              href='https://www.instagram.com/ng_namanh13/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InsIcon />
            </Link>
            <Link
              href='mailto:namanh.ngna@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <MailIcon />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
