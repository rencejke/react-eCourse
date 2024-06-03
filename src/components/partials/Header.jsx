import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <header>
    <div className="container flex justify-between items-center text-white text-[18px]">
        <h3>eCourse</h3>
       
       <nav>
        <ul className='flex flex-row gap-12'>
            <li>Home</li>
            <li>Courses</li>
            <li>About</li>
            <li>Services</li>
        </ul>
       </nav>   
        
        <div className='flex gap-4'>
            <Link><button className='btn'>Sign Up</button></Link>
            <Link><button className='btn'>Login</button></Link>
        </div>
    </div>
   </header>

  )
}

export default Header