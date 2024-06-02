import React from 'react'

const ChooseUs = () => {
    const jsonData = [
        {
            "title":"Certified and Experienced Trainers",
            "description":"Our team comprises certified and experienced trainers, ensuring high-quality instruction and practical insights."
        },
        {
            "title":"All Certification Bodies Under One Roof",
            "description":"Access a comprehensive range of certification programs from various bodies, streamlining training processes for your employees."
        },
        {
            "title":"Tailored Training Solutions",
            "description":"Receive customized training solutions aligned with your organization's goals and tailored to address specific skill gaps."
        },
        {
            "title":"Flexible Delivery Options",
            "description":"Choose from a variety of delivery formats, including in-person workshops, virtual classrooms, self-paced online courses, or blended learning approaches."
        },
        {
            "title":"Continuous Support and Resources",
            "description":"Benefit from ongoing support, access to learning materials, and community forums to facilitate continuous learning."
        },
        {
            "title":"Industry Partnerships and Networking",
            "description":"Access industry partnerships and networking events to foster professional growth and development opportunities for your employees."
        },
        {
            "title":"Scalable Solutions",
            "description":"Hatchtra offers scalable training solutions suitable for small businesses and large enterprises alike, ensuring flexibility and adaptability to your organization's evolving needs."
        },
       
    ]
  return (
    <div className='flex flex-col gap-8 items-center'>
      <p className='text-3xl md:text-4xl font-bold'>Why <span className='text-red-600'>choose us?</span></p>
      <p className='text-md text-gray-800 px-8'>Choose  <span className='text-red-600'>Hatchtra</span> for a complete corporate training solution, providing clarity, conciseness, and comprehensive support for your organisation’s learning needs.</p>
      <div className='flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 items-center px-8 lg:px-48 pt-6'>
        {
            jsonData.map((items)=><div>
            <p className='font-bold text-lg'>{items.title}</p>
            <p className='text-gray-700'>{items.description}</p>
            </div> )
        }
        

      </div>
    </div>
  )
}

export default ChooseUs
