'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import CircleSection from "./CircleSection"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ArrayData =['/hdfc.png', '/irctc.png', '/reliance.png', '/yesbank.png', '/itc.png' , '/sbi.png', '/ntpc.png', '/upgrad.png']
// const CircleSection = ({item}:any) => {
//     return <div className='rounded-full w-24 h-24 bg-white flex items-center justify-center'>
//         <Image src={item} height={55} width={55} alt="logo" className=''/></div>
// }

export function CarouselItems() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-6">
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
               <div className='flex gap-10 justify-center'>
        {ArrayData.map((item,index )=> <CircleSection item={item} key={index}/>)}
      </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
