import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Teach = () => {
  return (
   <section className='teach mt-12'>
    <div className="container">
        <h3 className='text-center md:text-[35px] xs:text-[28px] relative'>What We Teach</h3>
        <div className="wrapper md:flex md:justify-between md:gap-10 mt-12 xs:grid xs:grid-cols-1 xs:gap-5">
            <div className="teach_card bg-[#1c1c1c] h-[380px] md:w-[400px] xs:w-[330px] p-5 rounded-md">
            <img src="https://via.placeholder.com/170x170" alt="" className='mx-auto'/>
            <h4 className='text-center py-3 uppercase'>Programming</h4>
            <p className='text-[12px] px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod repudiandae et. Aspernatur fuga iure facilis? Autem vitae architecto quibusdam!</p>
             
             <div className='flex items-center justify-end mt-3'>
                <div className='flex items-center border-solid border-2 rounded-full border-[#7f39fb] py-2 px-3'>
                <Link><button className=''>Learn More</button></Link>
                <MdKeyboardArrowRight />
                </div>
             </div>
            </div>


            <div className="teach_card bg-[#1c1c1c] h-[380px] md:w-[400px] xs:w-[330px] p-5 rounded-md">
            <img src="https://via.placeholder.com/170x170" alt="" className='mx-auto'/>
            <h4 className='text-center py-3 uppercase'>Programming</h4>
            <p className='text-[12px] px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod repudiandae et. Aspernatur fuga iure facilis? Autem vitae architecto quibusdam!</p>
             
             <div className='flex items-center justify-end mt-3'>
                <div className='flex items-center border-solid border-2 rounded-full border-[#7f39fb] py-2 px-3'>
                <Link><button className=''>Learn More</button></Link>
                <MdKeyboardArrowRight />
                </div>
             </div>
            </div>

            <div className="teach_card bg-[#1c1c1c] h-[380px] md:w-[400px] xs:w-[330px] p-5 rounded-md">
            <img src="https://via.placeholder.com/170x170" alt="" className='mx-auto'/>
            <h4 className='text-center py-3 uppercase'>Programming</h4>
            <p className='text-[12px] px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod repudiandae et. Aspernatur fuga iure facilis? Autem vitae architecto quibusdam!</p>
             
             <div className='flex items-center justify-end mt-3'>
                <div className='flex items-center border-solid border-2 rounded-full border-[#7f39fb] py-2 px-3'>
                <Link><button className=''>Learn More</button></Link>
                <MdKeyboardArrowRight />
                </div>
             </div>
            </div>

            <div className="teach_card bg-[#1c1c1c] h-[380px] md:w-[400px] xs:w-[330px] p-5 rounded-md">
            <img src="https://via.placeholder.com/170x170" alt="" className='mx-auto'/>
            <h4 className='text-center py-3 uppercase'>Programming</h4>
            <p className='text-[12px] px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod repudiandae et. Aspernatur fuga iure facilis? Autem vitae architecto quibusdam!</p>
             
             <div className='flex items-center justify-end mt-3'>
                <div className='flex items-center border-solid border-2 rounded-full border-[#7f39fb] py-2 px-3'>
                <Link><button className=''>Learn More</button></Link>
                <MdKeyboardArrowRight />
                </div>
             </div>
            </div>
         
        </div>
    </div>
    
   </section>
  )
}

export default Teach
