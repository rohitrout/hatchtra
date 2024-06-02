import Image from "next/image"
import { Button } from "../ui/button"
const CourseCard = () => {
    return (
    <div className="flex flex-col gap-4 border-2 border-blue-100 p-4 items-center rounded-lg bg-white shadow-lg ">
        <div> <Image src={"/aws.png"} height={80} width={80} alt="logo" className=''/></div>
        <p className="font-semibold">AWS Certified Solutions Architect</p>
        <p className="text-sm text-gray-600">AWS Certified Solutions will upskill and candidate in cloud and Dev Field</p>
        <Button className="w-full bg-red-500">View More..</Button>
    </div>
)
}

export default CourseCard;