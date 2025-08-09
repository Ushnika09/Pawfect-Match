import React from 'react'
import twit from '../assets/twitter.png'
import insta from '../assets/insta.png'
import link from '../assets/link.png'

function FooterTop() {
  return (
    <div className='flex flex-col md:flex-row p-[1.5rem] md:justify-between text-gray-600/70 '>
        <div className='flex flex-col mx-2  md:mx-[2.5rem] mb-[1.2rem] md:mb-0'>
            <p className='font-semibold md:text-2xl lg:text-3xl md:font-bold text-[#00BFFF] md:my-5 my-1.5'>🐾 Pawfect Match</p>
            <p className='text-[1rem] md:text-xl'>Connecting loving families with pets in need since forever. Every adoption saves a life and brings joy to a family.</p>
        </div>


        <div className='flex flex-col mx-2  md:mx-[2.5rem]  md:mb-0'>
            <p className='font-medium md:text-2xl md:font-semibold text-black md:my-2 my-1.5'>Follow Our Journey</p>
            <div className='py-[0.5rem] gap-4 flex'>
                <div className='md:h-[3.5rem] h-[3rem]  w-[3rem] rounded-full  bg-[#F25A8C] md:w-[3.5rem] justify-center items-center flex hover:cursor-pointer shadow-xl'>
                    <img src={twit} className='md:h-[1.5rem]  h-[1rem]' />
                </div>

                <div className='md:h-[3.5rem] h-[3rem]  w-[3rem] rounded-full  bg-[#F25A8C] md:w-[3.5rem] justify-center items-center flex hover:cursor-pointer shadow-xl'>
                    <img src={link} className='md:h-[1.5rem]  h-[1rem] ' />
                </div>

                <div className='md:h-[3.5rem] h-[3rem]  w-[3rem] rounded-full  bg-[#F25A8C] md:w-[3.5rem] justify-center items-center flex hover:cursor-pointer shadow-xl'>
                    <img src={insta} className='md:h-[1.5rem]  h-[1rem] ' />
                </div>
            </div>
            <p className='text-[1rem] md:text-xl'>Follow us to see happy adoption stories and meet new pets looking for homes!</p>
        </div>

       

    </div>
  )
}

export default FooterTop