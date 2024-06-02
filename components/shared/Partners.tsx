import React from 'react'
import { CarouselItems } from './CarouselItems'

const Partners = () => {
  return (
    <div className='flex flex-col gap-12 items-center pb-8 w-full lg:w-1/2'>
      <p className='text-3xl md:text-4xl font-bold'>Accredited Training <span className='text-red-600'>Partners</span></p>
      <CarouselItems/>
    </div>
  )
}

export default Partners
