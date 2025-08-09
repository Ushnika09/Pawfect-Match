import React from 'react'

function Hero() {
  return (
    <div className='bg-cover bg-center py-[2.5rem] flex justify-center items-center flex-col relative' style={{backgroundImage:'url("https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&h=1080&fit=crop")'}}>

        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className=' w-[40rem]  text-center  text-white relative'>
            <h1 className='lg:text-7xl text-3xl md:text-5xl font-semibold'>Find Your New <span className='text-[#FF9F43]/80 my-5'>Best Friend</span></h1>
            <p className='lg:text-2xl md:text-xl text-xs font-medium my-5'>Give a loving home to a pet in need and discover the joy of unconditional love</p>
            <button className='lg:py-[1rem] py-[0.5rem] lg:px-[2.5rem] px-[1.5rem] bg-[#00BFFF] md:text-xl text-xs font-bold my-5 rounded-full hover:cursor-pointer hover:shadow-2xl hover:bg-[#00BFFF]/70'>Browse Available Pets</button>
        </div>
    </div>
  )
}

export default Hero