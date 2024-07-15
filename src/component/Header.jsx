import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineCloseSquare } from 'react-icons/ai'
export default function Header() {
  const [toggle, settoggle] = useState(false)
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1350px] mt-[20px]  m-auto flex justify-between items-center' >
        <div className='text-3xl font-bold ' >WsCube Tech</div>

        {
          toggle == true ? <AiOutlineCloseSquare onClick={() => settoggle(!toggle)} className='text-white text-3xl md:hidden block' /> : <AiOutlineMenu onClick={() => settoggle(!toggle)} className='text-white text-3xl md:hidden block' />
        }

        {/* <AiOutlineMenu  onClick={()=>settoggle(!toggle)  }className='text-white text-3xl md:hidden block' />
            <AiOutlineCloseSquare  onClick={()=>settoggle(!toggle) } className='text-white text-3xl md:hidden block' /> */}
        <ul className=' hidden md:flex text-white gap-[30px] text-[20px]'>
          <li>Home</li>
          <li>company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/*  */}
        <ul className={` duration-300 md:hidden fixed  w-full h-screen bg-black text-white gap-[10px] text-[20px]  top-[88px] ${toggle == true ? 'right-[0px]' : 'right-[100%]'}`} >
          <li className='p-3'>Home</li>
          <li className='p-3'>company</li>
          <li className='p-3'>Resources</li>
          <li className='p-3'>About</li>
          <li className='p-3'>Contact</li>
        </ul>
      </div>
    </div>
  )
}
