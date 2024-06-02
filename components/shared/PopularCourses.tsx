import CourseCard from "./CourseCard"
import { CarouselCourses } from "./CarouselCourses"

const PopularCourses = () => {

  return (
    <div className="flex flex-col bg-gradient-to-b from-red-200 to-blue-50 w-full items-center py-10">
      <p className='text-4xl font-bold mb-8'><span className='text-red-600 '>Popular Courses</span></p>
      <CarouselCourses/>
    </div>
  )
}

export default PopularCourses
