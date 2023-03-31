import Link from "next/link"
import {TbGridDots} from 'react-icons/tb'
const HomeHeader = () => {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href={'https://mail.google.com'} className='hover:underline'>Gmail</Link>
        <Link href={'https://image.google.com'} className='hover:underline'>Images</Link>
        <TbGridDots className="header-icon"/>
        <button className="bg-blue-500 text-white rounded-md py-2 px-6 font-medium hover:brightness-105 hover:shadow-md transition-shadow">Sign in</button>
      </div>
    </header>
  )
}

export default HomeHeader
