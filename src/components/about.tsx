import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import SectionWrapper from './section-wrapper'

function AboutContent() {
  return (
    <div className='flex md:w-[85%] gap-12 flex-col items-center md:flex-row mt-2 h-[400px]'>
      <Image
        src='/avatar.jpg'
        alt='Avatar'
        width={180}
        height={180}
        className='border-2 border-primary rounded-full'
      />
      <Tabs
        defaultValue='story'
        className='md:h-[264px] h-[400px] flex flex-col md:block '
      >
        <TabsList className='md:bg-primary bg-transparent rounded-md'>
          <TabsTrigger
            value='story'
            className='bg-primary text-white rounded-lg'
          >
            Story
          </TabsTrigger>
          <TabsTrigger
            value='skill'
            className='bg-primary text-white rounded-lg'
          >
            Skills
          </TabsTrigger>
        </TabsList>
        <TabsContent value='story'>
          <p className='text-14 font-medium text-center md:text-start md:text-16 text-accent mt-4'>
            I’m currently an 3-year student majoring in Software Engineering who
            started programming back in 2021 and turned it into a hobby.
            <br />
            <br />
            My experience is mostly about Front-end development. I use
            Javascript as my main programing language for both Frontend and
            Backend and of course JS related ecosystem stuff. Beside that, I
            also love to explore other fields like DevOps & System stuff
            <br />
            <br />
            Besides from programming, I also do web design, listen to music. I
            also like trekking, mountaining or just carry my backpack to
            everywhere and enjoy.
          </p>
        </TabsContent>
        <TabsContent value='skill' className='h-[400px]'>
          <ul className='h-full text-14 font-semibold text-start md:text-16 text-accent flex flex-col mt-4 gap-2'>
            <li>
              <span className='gradient-text'>Language</span> : Javascript
            </li>
            <li>
              <span className='gradient-text'> Client-side </span>: Vue/Nuxt,
              ReactJS/NextJS
            </li>
            <li>
              <span className='gradient-text'>Server-side</span>: NestJS,
              ExpressJS
            </li>
            <li>
              <span className='gradient-text'>Programming fundamental</span>:
              DSA, OOP, Database, SOLID Principle
            </li>
            <li>
              <span className='gradient-text'>
                Knowledge of software architecture and design concepts
              </span>
              like Clean Architecture, DDD, and TDD
            </li>
            <li>
              <span className='gradient-text'>Database</span>: MongoDB, MySQL,
              PostgreSQL
            </li>
            <li>Figma, Git as a tool</li>
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function About() {
  return (
    <SectionWrapper title='About Me' id='about'>
      <AboutContent />
    </SectionWrapper>
  )
}
export default About
