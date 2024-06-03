import React from 'react'
import { RiStarSFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <section className='courses mt-12'>
        <div className="container">
            <h3 className='text-center text-[35px]'>Courses</h3>
            <div className="wrapper flex justify-around mt-12">
            <div className="courses_card bg-[#1c1c1c] h-[340px] w-[400px] p-5 rounded-md">
             <img src="https://via.placeholder.com/200x200" alt="" className='w-[350px] h-[200px] mx-auto rounded-md object-cover'/>

               <h4 className='text-center pt-1 text-[18px]'>Learning Python within 30 days</h4>
                 
                 <ul className='flex items-center justify-center text-[19px]'>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                 </ul>

                 <div className='text-center pt-3'>
                 <Link><button className='btn'>Enroll Now</button></Link>
                 </div>
            </div>

            <div className="courses_card bg-[#1c1c1c] h-[340px] w-[400px] p-5 rounded-md">
             <img src="https://via.placeholder.com/200x200" alt="" className='w-[350px] h-[200px] mx-auto rounded-md object-cover'/>

               <h4 className='text-center pt-1 text-[18px]'>Learning Python within 30 days</h4>
                 
                 <ul className='flex items-center justify-center text-[19px]'>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                 </ul>

                 <div className='text-center pt-3'>
                 <Link><button className='btn'>Enroll Now</button></Link>
                 </div>
            </div>

            <div className="courses_card bg-[#1c1c1c] h-[340px] w-[400px] p-5 rounded-md">
             <img src="https://via.placeholder.com/200x200" alt="" className='w-[350px] h-[200px] mx-auto rounded-md object-cover'/>

               <h4 className='text-center pt-1 text-[18px]'>Learning Python within 30 days</h4>
                 
                 <ul className='flex items-center justify-center text-[19px]'>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                    <li><RiStarSFill /></li>
                 </ul>

                 <div className='text-center pt-3'>
                 <Link><button className='btn'>Enroll Now</button></Link>
                 </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Courses