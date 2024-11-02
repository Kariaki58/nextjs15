import brand1 from '@/public/assets/brand-other.png';
import brand from '@/public/assets/brand.png';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';


const HeaderSection = () => {
  return (
    <section className="container mx-auto px-3 mt-10">
        <div className="flex gap-10">
        
        <div className="relative group cursor-pointer overflow-hidden rounded-xl">
            <div className="transition-transform duration-500 transform group-hover:scale-110">
            <Image
                src={brand1}
                width={700}
                height={200}
                className="rounded-xl"
                alt="Picture of a beautiful girl with skincare routine"
            />
            </div>
            <div className="absolute top-20 left-10">
            <h3 className="text-[#FA9090] text-md font-bold mb-2">UP TO 30% OFF</h3>
            <h1 className="text-2xl w-40">Natural Beauty Collection</h1>
            <button className="flex items-center underline mt-10 py-2 font-bold text-black rounded-lg hover:text-[#FA9090] transition">
                SHOP NOW
                <IoIosArrowForward className="ml-2" />
                <IoIosArrowForward className="-ml-3" />
            </button>
            </div>
        </div>

        <div className="relative group cursor-pointer overflow-hidden rounded-xl">
            <div className="transition-transform duration-500 transform group-hover:scale-110">
            <Image
                src={brand}
                width={700}
                height={200}
                className="rounded-xl"
                alt="Picture of a beautiful girl with skincare routine"
            />
            </div>
            <div className="absolute top-20 left-10">
            <h3 className="text-[#FA9090] text-md font-bold mb-2">UP TO 30% OFF</h3>
            <h1 className="text-2xl w-40">Natural Beauty Collection</h1>
            <button className="flex items-center underline mt-10 py-2 font-bold text-black rov hover:text-[#FA9090] transition">
                SHOP NOW
                <IoIosArrowForward className="ml-2" />
                <IoIosArrowForward className="-ml-3" />
            </button>
            </div>
        </div>
        </div>
    </section>

  )
}

export default HeaderSection;