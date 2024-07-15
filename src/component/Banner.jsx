import React from 'react'
import Typed from 'react-typed';
export default function Banner() {
  return (
    <div className='w-full bg-[#2699fb]  py-[100px] '>
        <div className='max-w-[1350px] text-center m-auto  '>
            <h2 className='text-2xl md:text-4xl md:p-[24px] font-bold'>Learn with us</h2>
              <h1 className='text-white font-bold text-4xl md:text-[80px] md:p-[24px]'>Grow with us.</h1>
              <h2 className='text-white md:p-[24px] md:text-[50px] text-[25px]'>Learn <Typed className='pl-[10px]' strings={['Web Development', 'Digital Marketing','Ethical Hacking']} typeSpeed={80} loop={true} backSpeed={80} ></Typed></h2>
           <button className='bg-black text-white p-3  rounded m-auto  m-3 md:m-0'>Get Started</button>
        </div>
           
        </div>
  )
}
