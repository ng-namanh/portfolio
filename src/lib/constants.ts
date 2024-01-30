export enum Tech {
  REACTJS = 'reactjs',
  EXPRESSJS = 'expressjs',
  MONGODB = 'mongodb',
  NEXTJS = 'nextjs',
  NUXTJS = 'nuxtjs',
  SASS = 'sass',
  TYPESCRIPT = 'typescript',
  NESTJS = 'nestjs'
}

type ProjectItem = {
  title: string
  description: string
  image: string
}

export const projectItems: ProjectItem[] = [
  {
    title: 'Aerocamp',
    description:
      'AeroCamp is where people can join and choose favorite campgrounds for their trip, or can add your own campgrounds, write review',
    image: 'project1.png'
  },
  {
    title: 'GDSC HANU Platform',
    description:
      'GDSC HANU represented Hanoi University in Google Developer Student Club Community. We focus on Software Engineering and develop tech community.',
    image: 'gdsc_platform.jpg'
  }
]
