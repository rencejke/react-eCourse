import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer bg-[#7f39fb] p-6'>
        <div className="container">
        <div className="wrapper grid md:grid-cols-[3fr_1fr_1fr_1fr_2fr] xs:grid-cols-1 md:justify-between xs:justify-center xs:gap-5">
         <h2 className='self-center text-[40px]'>eCourse</h2>
         
         <div>
            <h4 className='font-bold text-[18px] mb-2'>Categories</h4>
         <ul className='text-[17px]'>
            <li>Python</li>
            <li>Java</li>
            <li>PHP</li>
            <li>Laravel</li>
         </ul>
         </div>

         <div>
            <h4 className='font-bold text-[18px] mb-2'>Categories</h4>
         <ul className='text-[17px]'>
            <li>Python</li>
            <li>Java</li>
            <li>PHP</li>
            <li>Laravel</li>
         </ul>
         </div>

         <div>
            <h4 className='font-bold text-[18px] mb-2'>Categories</h4>
         <ul className='text-[17px]'>
            <li>Python</li>
            <li>Java</li>
            <li>PHP</li>
            <li>Laravel</li>
         </ul>
         </div>

         <ul className='flex self-end gap-4 text-[30px] md:justify-self-end xs:justify-self-start'>
            <li><FaLinkedin /></li>
            <li><FaInstagram /></li>
            <li><FaFacebook /></li>
            <li><FaYoutube /></li>
         </ul>

         
        </div>
        </div>

    </footer>
  )
}

export default Footer