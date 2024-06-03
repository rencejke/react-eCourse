import React from 'react'
import Header from '../partials/Header'
import { Link } from 'react-router-dom'
import CountUp from "react-countup";
import Courses from './Courses';

const Home = () => {
  return (
   <>
     <Header/>

     <section className='banner'>
      <div className="container grid grid-cols-2 gap-12 pt-20">
        <div>
        <h1 className='text-[80px]'>First Heading Will Go Here</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eius sed distinctio vitae placeat animi repudiandae qui, eum laudantium repellendus dolores delectus culpa ipsam earum deleniti at sequi ducimus accusantium ullam
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur dolores, corrupti ducimus obcaecati repellendus eaque animi neque beatae necessitatibus?
        </p>

       <div className='btn-container mt-6 flex gap-6 items-center'>
       <Link><button className='btn'>Start Now</button></Link>
         <Link><button className='btn-transparent'>Learn More</button></Link>
       </div>
        </div>

        <div className='img-banner'>
        <img src="../../public/home-img.png" alt="" />
        </div>
      </div>
     </section>

     <section className='countUp mt-6'> 
      <div className="container flex justify-around bg-[#1c1c1c] ">
        
       <div>
       <div className='count-item'>
       <CountUp end={2000} duration={1}/>+
        </div> 
        <p>Students Enrolled</p>
       </div>

       <div>
       <div className='count-item '>
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














   </>
  )
}

export default Home
