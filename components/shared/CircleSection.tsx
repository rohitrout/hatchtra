import Image from "next/image"

const CircleSection = ({item}:any) => {
    return <div className='rounded-full  bg-white flex items-center justify-center'>
        <Image src={item} height={80} width={80} alt="logo" className=''/></div>
}

export default CircleSection;