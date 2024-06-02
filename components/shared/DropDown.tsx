'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { AccordionDemo } from "./AccordionDemo"

export function DropDown() {
  return (
    <Sheet key={"left"}>
      <SheetTrigger asChild>
         <Image src={"/hamburger.svg"} height={30} width={30} alt="logo" className=''/>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Welcome to Hatchtra</SheetTitle>
          <SheetDescription>
           <AccordionDemo/>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="submit">Close</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
