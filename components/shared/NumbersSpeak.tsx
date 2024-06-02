import Image from "next/image"

const NumbersSpeak = () => {
    const NumberCard = () => {
        return (
            <div className='flex gap-6'>
                <Image src={"/img1.png"} height={80} width={85} alt="logo" className='shadow-lg rounded-full'/>
                <div className="flex flex-col gap-4">
                    <p className="font-semibold">Experienced Poool of <span className='text-red-600'>Trainers</span></p>
                    <p className="text-gray-600">1000+ Certified & Authorised trainers with subject matter expertise in their domain. </p>

                </div>
            </div>
        )
    }
  return (
    <div className='flex flex-col gap-8 items-center w-full lg:w-1/2 '>
      <p className='text-4xl font-bold'>Our Numbers <span className='text-red-600'>Speak!</span></p>
      <div className='flex flex-col gap-8 px-8 lg:grid lg:grid-cols-2 lg:gap-12 items-center pt-6'>
        <NumberCard/>
        <NumberCard/>
        <NumberCard/>
        <NumberCard/>
      </div>
    </div>
  )
}

export default NumbersSpeak
