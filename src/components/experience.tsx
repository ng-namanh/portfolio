import SectionWrapper from './section-wrapper'

function Experience() {
  return (
    <SectionWrapper title='Experience' className='mt-44 '>
      <div className='text-start'>
        <h3 className='text-14 font-semibold text-accent text-start'>
          Frontend Lead{' '}
          <span className='text-primary'>
            @Google Developer Student Clubs (HANU)
          </span>
        </h3>
        <p className='text-white/70 text-14 font-light'>Dec 2022 - Present</p>
        <div>
          <p>Developed a GDSC Platform, where students can share their ideas</p>
          <p>
            Led the data transformation process using PySpark, AWS Glue, and AWS
            S3 to process 300 builds daily and prepare data for analysis and
            created dashboard with AWS QuickSight sourcing data from the
            internal datalake.
          </p>
          <p></p>
        </div>
      </div>
    </SectionWrapper>
  )
}
export default Experience
