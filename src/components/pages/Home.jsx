import React from 'react'
import Header from '../partials/Header'
import { Link } from 'react-router-dom'
import CountUp from "react-countup";
import Courses from './Courses';
import Teach from './Teach';
import WhyUs from './WhyUs';
import ReceiveUpdates from './ReceiveUpdates';
import Footer from '../partials/Footer';

const Home = () => {
  return (
   <>
     <Header/>

     <section className='banner'>
      <div className="container grid md:grid-cols-2 xs:grid-cols-1 md:gap-12 xs:gap-2 pt-20">
        <div className='md:order-1 xs:order-2 xs:px-2 md:px-0'>
        <h1 className='md:text-[80px] xs:text-[25px]'>First Heading Will Go Here</h1>
        <p className='md:text-left md:text-[18px] xs:text-[9px] '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eius sed distinctio vitae placeat animi repudiandae qui, eum laudantium repellendus dolores delectus culpa ipsam earum deleniti at sequi ducimus accusantium ullam
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur dolores, corrupti ducimus obcaecati repellendus eaque animi neque beatae necessitatibus?
        </p>

       <div className='btn-container mt-6 flex gap-6 items-center'>
       <Link><button className='btn'>Start Now</button></Link>
         <Link><button className='btn-transparent'>Learn More</button></Link>
       </div>
        </div>

        <div className='img-banner md:size-[100%] xs:order-1 xs:w-[300px] xs:mx-auto xs:mb-2'>
        <img src="../../public/home-img.png" alt="" />
        </div>
      </div>
     </section>

     <section className='countUp mt-6 md:text-[18px] xs:text-[8px] xs:px-[22px]'> 
      <div className="container flex justify-around bg-[#1c1c1c]">
        
       <div>
       <div className='count-item'>
       <CountUp end={2000} duration={1}/>+
        </div> 
        <p>Students Enrolled</p>
       </div>

       <div>
       <div className='count-item'>
       <CountUp end={50} duration={1}/>+
        </div> 
        <p>Teachers</p>
       </div>

       <div>
       <div className='count-item'>
       <CountUp end={100} duration={1}/>+
        </div> 
        <p>Teachers</p>
       </div>

       <div>
       <div className='count-item'>
       <CountUp end={20} duration={1}/>+
        </div> 
        <p>Teachers</p>
       </div>



      </div>
      </section>
   


     <Courses/>
     <Teach/>
     <WhyUs/>
     <ReceiveUpdates/>
     <Footer/>













   </>
  )
}

export default Home
