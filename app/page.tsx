import ChooseUs from "@/components/shared/ChooseUs";
import Feedback from "@/components/shared/Feedback";
import Homepage from "@/components/shared/Homepage";
import NumbersSpeak from "@/components/shared/NumbersSpeak";
import Partners from "@/components/shared/Partners";
import PopularCourses from "@/components/shared/PopularCourses";
import Footer from "@/components/shared/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 pt-[80px] md:pt-[74px] lg:pt-[88px] h-full w-full overflow-y-hidden">
    <Homepage/>
    <Partners/>
    <ChooseUs/>
    <Feedback/>
    <PopularCourses/>
    <NumbersSpeak/>
    <Footer/>

    </main>
  );
}
