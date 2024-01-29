import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'
import {
  ExpressIcon,
  MongodbIcon,
  NuxtIcon,
  ReactIcon,
  SassIcon,
  TypescriptIcon
} from './icons'
import IconBadge from './icon-badge'
import { Tech } from '@/lib/constants'

type Props = {
  imageUrl: string
  title: string
  description: string
  techstack?: string[]
}

function Card(props: Props) {
  const { techstack } = props
  return (
    <CardContainer className='inter-var'>
      <CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[460px] rounded-xl p-6 border  '>
        <CardItem translateZ='100' className='w-full'>
          <Image
            src={`/${props.imageUrl}`}
            height='1000'
            width='1000'
            className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
            alt='project cover image'
          />
        </CardItem>
        <CardItem
          translateZ='50'
          className='font-semibold text-black dark:text-white mt-4'
        >
          <span className='flex'>
            {techstack?.includes(Tech.REACTJS) && (
              <IconBadge icon={<ReactIcon />} description='ReactJs' />
            )}
            {techstack?.includes(Tech.TYPESCRIPT) && (
              <IconBadge icon={<TypescriptIcon />} description='Typescript' />
            )}
            {techstack?.includes(Tech.EXPRESSJS) && (
              <IconBadge icon={<ExpressIcon />} description='ExpressJs' />
            )}
            {techstack?.includes(Tech.MONGODB) && (
              <IconBadge icon={<MongodbIcon />} description='MongoDB' />
            )}
            {techstack?.includes(Tech.NUXTJS) && (
              <IconBadge icon={<NuxtIcon />} description='NuxtJs' />
            )}
            {techstack?.includes(Tech.SASS) && (
              <IconBadge icon={<SassIcon />} description='Sass' />
            )}
          </span>
        </CardItem>
        <CardItem
          translateZ='50'
          className='text-xl font-bold text-black dark:text-white mt-4'
        >
          {props.title}
        </CardItem>
        <CardItem
          as='p'
          translateZ='60'
          className='text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300'
        >
          {props.description}
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
export default Card
