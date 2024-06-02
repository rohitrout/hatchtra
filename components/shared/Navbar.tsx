import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'
import { Button } from '../ui/button'
import { NavbarMenu } from './NavbarMenu'
import { DropDown } from './DropDown'

const Navbar = () => {
  return (
    <nav className="fixed top-0 bg-white w-full flex h-18 items-center justify-between p-4 md:px-6 md:py-3 gap-12 border-b-2 border-grey-500 z-50">
      <div className="flex items-center">
        <div className="lg:hidden h-[40px] pr-2">
          <DropDown  />
        </div>
        <Link href="/">
          <div className=' h-12 w-24 lg:h-16 lg:w-32'>
          <Image src="/logo.png" alt="logo" width={180} height={20} />
          </div>
         {/* <span className='text-2xl font-bold text-red-500' >Hatchatra</span>  */}
        </Link>
      </div>

      <div className="hidden lg:block grow">
        {/* <TopbarMenu topBarMenuData={topBarMenuData} /> */}
        <NavbarMenu/>
      </div>

      {/* <div className="w-full hidden md:block md:w-auto ">
          <Search />
        </div> */}
        <Button className='bg-red-500 font-bold'>Contact Us</Button>

      {/* <div className="flex items-center justify-end space-x-4">
       
        <Button
              variant="outline"
              className="hidden md:block h-11 w-32 bg-red-600 text-white"
            >
              Explore More
            </Button>
      </div> */}
    </nav>
  )
}

export default Navbar
