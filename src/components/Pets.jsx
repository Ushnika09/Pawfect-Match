import React from 'react'

function Pets() {
  return (
    <div className='lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-[2rem] mt-[1rem] grid'>

            <div className='  rounded-xl shadow-2xl overflow-hidden w-full max-w-sm '>
                <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop " alt="" className='rounded-t-xl hover:scale-110 duration-400' />
                <div className=' px-[1.5rem]'>
                    <h1 className='font-bold text-2xl py-[1rem]'>Buddy</h1>
                    <p className='font-normal text-[1rem] py-b-[1rem] text-gray-600/80'>A friendly golden retriever who loves playing fetch and giving cuddles.</p>
                    <button className='my-[1rem] py-[0.9rem] bg-[#00BFFF] text-white text-center w-full rounded-3xl font-bold hover:bg-[#00BFFF]/70 shadow-xl mb-9'>Meet Buddy</button>
                </div>
            </div>

            <div className='  rounded-xl shadow-2xl overflow-hidden  max-w-sm'>
                <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop" alt="" className='rounded-t-xl hover:scale-110 duration-400' />
                <div className=' px-[1.5rem]'>
                    <h1 className='font-bold text-2xl py-[1rem]'>Luna</h1>
                    <p className='font-normal text-[1rem] py-b-[1rem] text-gray-600/80'>Sweet tabby cat who enjoys sunny windows and gentle pets.</p>
                    <button className='my-[1rem] py-[0.9rem] bg-[#00BFFF] text-white text-center w-full rounded-3xl font-bold hover:bg-[#00BFFF]/70 shadow-xl mb-9'>Meet Luna</button>
                </div>
            </div>

            <div className='  rounded-xl shadow-2xl overflow-hidden  max-w-sm'>
                <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=300&fit=crop " alt="" className='rounded-t-xl hover:scale-110 duration-400' />
                <div className=' px-[1.5rem]'>
                    <h1 className='font-bold text-2xl py-[1rem]'>Charlie</h1>
                    <p className='font-normal text-[1rem] py-b-[1rem] text-gray-600/80'>Energetic beagle mix perfect for active families who love adventures.</p>
                    <button className='my-[1rem] py-[0.9rem] bg-[#00BFFF] text-white text-center w-full rounded-3xl font-bold hover:bg-[#00BFFF]/70 shadow-xl mb-9'>Meet Charlie</button>
                </div>
            </div>

            <div className='  rounded-xl shadow-2xl overflow-hidden  max-w-sm'>
                <img src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop " alt="" className='rounded-t-xl hover:scale-110 duration-400' />
                <div className=' px-[1.5rem]'>
                    <h1 className='font-bold text-2xl py-[1rem]'>Mia</h1>
                    <p className='font-normal text-[1rem] py-b-[1rem] text-gray-600/80'>Gentle calico who loves to purr and is great with children.</p>
                    <button className='my-[1rem] py-[0.9rem] bg-[#00BFFF] text-white text-center w-full rounded-3xl font-bold hover:bg-[#00BFFF]/70 shadow-xl mb-9'>Meet Mia</button>
                </div>
            </div>

            <div className='  rounded-xl shadow-2xl overflow-hidden  max-w-sm'>
                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop " alt="" className='rounded-t-xl hover:scale-110 duration-400' />
                <div className=' px-[1.5rem]'>
                    <h1 className='font-bold text-2xl py-[1rem]'>Max</h1>
                    <p className='font-normal text-[1rem] py-b-[1rem] text-gray-600/80'>Loyal shepherd mix who's well-trained and loves long walks.</p>
                    <button className='my-[1rem] py-[0.9rem] bg-[#00BFFF] text-white text-center w-full rounded-3xl font-bold hover:bg-[#00BFFF]/70 shadow-xl mb-9'>Meet Max</button>
                </div>
            </div>

            <div className='  rounded-xl shadow-2xl overflow-hidden  max-w-sm'>
                <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=300&fit=crop " alt="" className='rounded-t-xl hover:scale-110 duration-400' />
                <div className=' px-[1.5rem]'>
                    <h1 className='font-bold text-2xl py-[1rem]'>Bella</h1>
                    <p className='font-normal text-[1rem] py-b-[1rem] text-gray-600/80'>Playful orange kitten with lots of energy and love to give.</p>
                    <button className='my-[1rem] py-[0.9rem] bg-[#00BFFF] text-white text-center w-full rounded-3xl font-bold hover:bg-[#00BFFF]/70 shadow-xl mb-9'>Meet Bella</button>
                </div>
            </div>

            
            

    </div>
  )
}

export default Pets