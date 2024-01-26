import { cn } from '@/lib/utils'

type Props = {
  title: string
  className?: string
  children: React.ReactNode
}

function SectionWrapper(props: Props) {
  return (
    <div
      className={cn(
        `border-t-[2px] border-white-700 mt-12 flex flex-col items-center ${props.className}`
      )}
    >
      <h2 className='text-34 md:text-42 gradient-text text-center mt-8 font-bold '>
        {props.title}
      </h2>
      {props.children}
    </div>
  )
}
export default SectionWrapper
