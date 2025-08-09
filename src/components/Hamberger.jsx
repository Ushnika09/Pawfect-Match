import React, { useState } from 'react'
import ham from '../assets/ham.png'

function Hamberger() {
    const [isOpen,setIsOpen]=useState(false)

  return (
    <>
        <div className='md:flex gap-[2.3rem] text-xl font-semibold  mx-[2.5rem] p-[1rem] hidden '>
            <p className='hover:text-[#00BFFF] hover:cursor-pointer duration-150'>Home</p>
            <p className='hover:text-[#00BFFF] hover:cursor-pointer duration-150'>Pets</p>
            <p className='hover:text-[#00BFFF] hover:cursor-pointer duration-150'>Contact</p>
        </div>

        <div className='md:hidden relative'>
            <img src={ham} alt=""  className='h-[2rem] mx-[2.5rem] ' onClick={()=>setIsOpen(!isOpen)}/>

            {isOpen && (
            <div className='flex flex-col gap-[1rem] text-xl font-semibold w-screen absolute top-[2.15rem] right-0  border border-gray-200 items-center bg-[#FF9F43]/80'>
                <p className='hover:text-[#00BFFF] hover:cursor-pointer duration-150'>Home</p>
                <p className='hover:text-[#00BFFF] hover:cursor-pointer duration-150'>Pets</p>
                <p className='hover:text-[#00BFFF] hover:cursor-pointer duration-150'>Contact</p>
            </div>
        )}
        </div>

        
    </>
  )
}

export default Hamberger