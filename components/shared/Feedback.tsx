import { CarouselFeedback } from "./Carouselfeedback"

const Feedback = () => {

  const FeedbackCard = () => {
    return (
    <div className='flex flex-col gap-4 bg-gray-200 p-4 rounded-lg w-full'>
      <div className='flex gap-8 items-center'>
      <div className='rounded-full bg-red-300 px-4 py-2 font-bold'>D</div>
      <div className='font-semibold'>Deepshikha Rawat</div>
      </div>
      <p>⭐⭐⭐⭐⭐</p>
      <p>Lorem ipsum askjsd askldhsad akwoeqi scjsjc ssdfhjhsdf sdfsdhfsdf</p>

    </div>
  )
  }

  return (
    <div className='flex flex-col gap-8 items-center w-full lg:w-1/2'>
       <p className='text-3xl md:text-4xl font-bold'>Our Customers <span className='text-red-600'>Feedback</span></p>
       {/* <FeedbackCard/> */}
       <CarouselFeedback/>
    </div>
  )
}

export default Feedback
