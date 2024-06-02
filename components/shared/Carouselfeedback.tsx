'use client'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselFeedback() {

    const FeedbackCard = () => {
        return (
        <div className='flex flex-col gap-4 bg-gray-200 p-4 rounded-lg w-full py-8'>
          <div className='flex gap-8 items-center'>
          <div className='rounded-full bg-red-300 px-4 py-2 font-bold'>D</div>
          <div className='font-semibold'>Deepshikha Rawat</div>
          </div>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Great professional training service! Would definitely recommend to anyone. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, hic illo blanditiis tempore recusandae voluptates odit quia? Iusto laboriosam itaque eveniet beatae, maiores quisquam ratione sequi rem amet. Possimus, earum?</p>
    
        </div>
      )
      }
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 px-8">
              <FeedbackCard/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
