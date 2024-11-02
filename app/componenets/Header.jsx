"use client"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import image1 from '@/public/assets/img-2.png';
import image2 from '@/public/assets/img-3.png';
import { motion } from "framer-motion";
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";


const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };
  return (
    <header className="container mx-auto px-3">
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay={false}
          interval={3000}
          swipeable
          emulateTouch
          onChange={handleSlideChange}
          showThumbs={false}
        >
          <div className="relative">
            <Image
              src={image1}
              width={500}
              height={200}
              className="rounded-xl"
              alt="Picture of a beautiful girl with skincare product"
            />
            <motion.div
              className="absolute top-52 right-10 w-96 text-left"
              initial="hidden"
              animate={activeIndex === 0 ? "visible" : "hidden"}
              variants={textVariants}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h1 className="text-6xl font-light mb-4">Discover</h1>
                <h2 className="text-6xl font-semibold text-[#FA9090] mb-4">
                  The Secrets Of  <span className="text-black font-light">Beautifo</span>
                </h2>
                <p className="text-gray-700 mb-16">
                  Get them together (for less!) for dewy, natural-looking coverage that still looks like skin.
                </p>
                <button className="flex items-center mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-[#FA9090] transition">
                  SHOP NOW
                  <IoIosArrowForward className="ml-2" />
                  <IoIosArrowForward className="-ml-3" />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            <Image
              src={image2}
              width={500}
              height={200}
              className="rounded-xl"
              alt="Picture of a beautiful girl with skincare routine"
            />
            <motion.div
              className="absolute top-52 left-10 w-96 text-left"
              initial="hidden"
              animate={activeIndex === 1 ? "visible" : "hidden"}
              variants={textVariants}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h1 className="text-6xl font-light mb-4">Explore</h1>
                <h2 className="text-6xl font-semibold text-[#FA9090] mb-4">
                  The Secrets Of  <span className="text-black font-light">Beautifo</span>
                </h2>
                <p className="text-gray-700 mb-16">
                  Get them together (for less!) for dewy, natural-looking coverage that still looks like skin.
                </p>
                <button className="flex items-center mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-[#FA9090] transition">
                  SHOP NOW
                  <IoIosArrowForward className="ml-2" />
                  <IoIosArrowForward className="-ml-3" />
                </button>
              </div>
            </motion.div>
          </div>
        </Carousel>
    </header>
  )
}

export default Header