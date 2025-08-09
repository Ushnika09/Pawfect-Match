import React from 'react'
import Pets from './Pets'

function Main() {
  return (
    <div className='px-[1rem] py-[2rem] flex justify-center items-center flex-col bg-gray-300/50 shadow'>
        <h1 className='md:text-4xl text-2xl font-semibold my-[1rem] text-[#00BFFF]'>Meet Our Adorable Friends</h1>
        <p className='md:text-xl text-[1rem] font-stretch-normal text-center my-[1rem] w-[30rem] md:w-[40rem] text-gray-600/80'>Each of these wonderful pets is looking for their forever home. Could it be with you?</p>

        <Pets/>
    </div>
  )
}

export default Main