import React from 'react'
import { Link } from 'react-router-dom'

const WhyUs = () => {
  return (
    <>
        <section className='whyUs'>
            <div className="container">
            <h3 className='text-center md:text-[35px] xs:text-[28px] relative'>Why Us?</h3>
                <div className="wrapper grid md:grid-cols-2 xs:ghrid-cols-1 mt-12 gap-20 place-items-center object-cover">
                <img src="https://via.placeholder.com/1250x750" alt="" />

                <div>
                    <h2 className='font-bold text-[22px]'>About Us</h2>
                    <p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Facere vero officia necessitatibus, suscipit enim temporibus
                        quibusdam quisquam blanditiis eum deserunt, magni libero, tempore quae iusto. Nihil dolorem ea tenetur hic.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Facere vero officia necessitatibus, suscipit enim temporibus
                        quibusdam quisquam blanditiis eum deserunt, magni libero, tempore quae iusto. Nihil dolorem ea tenetur hic.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Facere vero officia necessitatibus, suscipit enim temporibus
                    </p>

                    <Link><button className='border-solid border-[1.5px] border-[#7f39fb] mt-4 py-2 px-3 rounded-full'>Learn More</button></Link>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhyUs