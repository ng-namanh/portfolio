type Props = {
  icon: React.ReactNode
  description: string
}

function IconBadge(props: Props) {
  return (
    <div className='flex items-center mr-2 bg-blue-400 py-1 px-2 rounded-md'>
      {props.icon}
      <p className='ml-1 md:text-14'>{props.description}</p>
    </div>
  )
}
export default IconBadge
