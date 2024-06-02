import Image from "next/image"

const Footer = () => {
  return (
    <div className=' flex flex-col gap-8 px-12 lg:grid lg:grid-cols-3 pt-6 lg:px-64 w-full bg-slate-200 pb-5'>
      <div className="flex flex-col items-start gap-3 pl-10 font-semibold">
      <Image src={"/logo.png"} height={110} width={120} alt="logo" className=''/>
        <p>Email : info@hatchtra.com</p>
        <p>Ph  : 987456123</p>
      </div>
      <div className="flex flex-col gap-4 pl-10">
        <p className="text-xl font-semibold">Quick Links</p>
        <p className="font-semibold text-gray-700">Home</p>
        <p className="font-semibold text-gray-700">about Us</p>
        <p className="font-semibold text-gray-700">Contact Us</p>
        <p className="font-semibold text-gray-700">Courses</p>

      </div>
      <div className="flex flex-col gap-8 pl-10">
        <p className="text-xl font-semibold">Newsletter</p>
        <p className="text-gray-700"> Sign Up to get our newsletter</p>

      </div>
      <p className="text-sm font-gray-600 pt-4 pl-10">Copyright © 2024, Hatchtra. All rights reserved</p>
    </div>
  )
}

export default Footer
