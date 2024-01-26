import Link from 'next/link'

function Header() {
  return (
    <div className='w-full bg-white/10 rounded-md text-accent py-4 font-bold transition-all'>
      <ul className='flex justify-evenly md:text-2xl text-14 w-4/5 mx-auto my-0'>
        <li>
          <Link
            href='/'
            className='hover:gradient-text bg-clip-text bg-gradient-to-r from-primary to-white transition duration-300'
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href='#about'
            className='hover:gradient-text bg-clip-text bg-gradient-to-r from-primary to-white transition duration-300'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='#experience'
            className='hover:gradient-text bg-clip-text bg-gradient-to-r from-primary to-white transition duration-300'
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href='/'
            className='hover:gradient-text bg-clip-text bg-gradient-to-r from-primary to-white transition duration-300'
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Header
