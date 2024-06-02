import React from 'react'
import Image from 'next/image'

const Homepage = () => {
  return (
    <div className='h-full w-full bg-gradient-to-b from-red-200 to-blue-50'>
      <div className='flex flex-col items-center justify-center py-20 md:p-32 gap-5'>
      <p className='text-3xl lg:text-5xl font-extrabold tracking-widest'>UpSkill With <span className='text-red-600'>Hatchtra!</span></p>
      <p className='text-2xl lg:text-3xl  text-gray-800 font-bold'>Is Your Team Ready?</p>
      <div className='relative w-full px-6 lg:w-1/3'>
        <input
        // onChange={(e)=>setEmail(e.target.value)}
        type="text"
        placeholder="Search for Courses..."
        className="shadow-lg py-5 my-12 text-md lg:text-xl px-4 pl-16 lg:pl-20 w-full rounded-full  focus:ring focus:ring-red-200 focus:outline-none "
      />
      <div className='absolute top-16 left-10 inset-y-0 items-center'>
        <Image src="/assets/search.svg" height={32} width={32} alt="search"/>
      </div>
        </div>
      </div>      
    </div>
  )
}

export default Homepage
