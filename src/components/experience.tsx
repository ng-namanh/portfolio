import SectionWrapper from './section-wrapper'

function Experience() {
  return (
    <SectionWrapper
      title='Experience'
      id='experience'
      className='mt-60 md:mt-16 lg:mt-4 '
    >
      <div className='text-start md:w-[70%] mt-8'>
        <h3 className='text-16 md:text-20 font-semibold text-accent text-start'>
          Frontend Lead{' '}
          <span className='text-primary'>
            @Google Developer Student Clubs (HANU)
          </span>
        </h3>
        <p className='text-white/70 text-12 font-light'>Dec 2022 - Present</p>
        <div className='text-14 md:text-16 '>
          <p className='text-accent mt-4 flex'>
            🧡 Developed a GDSC Platform for HR Management and Admin specially
            in member management and recruitment, where I worked on the Frontend
            team with 5 members
          </p>
          <p className='text-accent my-4'>
            🧡 We implement the architecture on Frontend following Separation of
            Concerns pattern and Component-based. Mostly working with Nuxt3 and
            Vuetify
          </p>
          <p className='text-accent '>
            🧡 Host technical workshops, techtalk and meetups. Connect, grow and
            learn with other students for building a meaningful community in our
            University.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
export default Experience
