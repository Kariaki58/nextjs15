"use client";

import skincare4 from '@/public/assets/skincare4.jpg';
import skincare3 from '@/public/assets/skincare3.jpg';
import { IoChevronForwardOutline, IoStarSharp } from 'react-icons/io5';
import { LiaShoppingCartSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { BiGitCompare } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { RiTwitterXFill, RiZoomInFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Navbar from '../Navbar';
import Image from 'next/image';
import { useState } from 'react';

const ProductPage = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoomClick = () => {
        setIsZoomed(true);
    };

    const closeZoom = () => {
        setIsZoomed(false);
    };

  return (
    <div>
      <Navbar />
      <header
        className="h-64 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${skincare4.src})` }}
        aria-label="Product Page Header"
      >
        <h1 className="text-4xl font-bold mb-4">SOS Hydra Refreshing Hydration Mask</h1>
        <div className="flex items-center text-lg" aria-label="Breadcrumb">
          <a href="/" className="hover:underline">Home</a>
          <IoChevronForwardOutline className="mx-2" />
          <span>Product Page</span>
        </div>
      </header>

      <main className="container mx-auto p-6 grid lg:grid-cols-2 gap-10">
        {/* Left Column - Product Image Gallery */}
        <div className="space-y-4">
            <div className="relative h-[600px] w-full rounded-xl shadow-lg">
                <Image
                src={skincare3}
                alt="SOS Hydra Refreshing Hydration Mask"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                priority
                />
                {/* Zoom Icon */}
                <button
                onClick={handleZoomClick}
                className="absolute top-4 right-4 bg-gray-700 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80"
                aria-label="Zoom in"
                >
                <RiZoomInFill size={24} />
                </button>
            </div>
          <div className="flex gap-2">
            {[skincare3, skincare4, skincare3].map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Product thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="rounded-md cursor-pointer hover:ring-2 hover:ring-[#FA9090]"
              />
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">SOS Hydra Refreshing Hydration Mask</h2>
            <div className="flex items-center text-yellow-500" aria-label="Product rating">
              {Array(5).fill(null).map((_, i) => (
                <IoStarSharp key={i} className="text-lg" />
              ))}
              <span className="text-gray-500 ml-2">(5 customer reviews)</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-[#FA9090]">£109.00</span>
            <span className="line-through text-gray-400">£156.16</span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Discover the SOS Hydra Refreshing Hydration Mask – your skin's new best friend!
            This refreshing mask provides intense hydration, leaving skin soft and glowing.
          </p>

          <div className="flex items-center space-x-4 mt-4">
            <label className="text-sm font-semibold" htmlFor="quantity">Quantity:</label>
            <button className="flex items-center justify-between border border-gray-300 rounded-full px-4 py-2 w-24">
              <span className="text-gray-600 hover:text-gray-800 cursor-pointer">-</span>
              <span className="text-gray-800 font-semibold">1</span>
              <span className="text-gray-600 hover:text-gray-800 cursor-pointer">+</span>
            </button>
          </div>

          <button className="flex items-center gap-2 bg-[#FA9090] hover:bg-[#af5860] text-white font-semibold px-6 py-3 rounded-full transition duration-200 ease-in-out">
            <LiaShoppingCartSolid className="text-white w-5 h-5" />
            <span>ADD TO CART</span>
          </button>

          <div className="flex space-x-4 border-t border-b border-gray-300 py-4 text-gray-600">
            <button className="flex items-center hover:text-[#FA9090]">
              <CiHeart className="mr-2" /> Add to wishlist
            </button>
            <button className="flex items-center hover:text-[#FA9090]">
              <BiGitCompare className="mr-2" /> Compare
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 text-gray-500 text-sm">
            <div><strong>SKU:</strong> N/A-644</div>
            <div><strong>Categories:</strong> Body Oil, Face Masks</div>
            <div><strong>Tags:</strong> Foundation, Healthy</div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Share:</h3>
            <div className="flex space-x-4 mt-2 text-gray-600">
              <FaFacebookF className="cursor-pointer hover:text-[#3b5998]" />
              <RiTwitterXFill className="cursor-pointer hover:text-[#1da1f2]" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#0077b5]" />
              <FaPinterestP className="cursor-pointer hover:text-[#bd081c]" />
              <MdEmail className="cursor-pointer hover:text-gray-800" />
            </div>
          </div>
        </div>
      </main>
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeZoom}
        >
          <div className="relative h-[80vh] w-[80vw]">
            <img
              src={skincare3.src}
              alt="Zoomed product view"
              className="rounded-lg object-contain w-full h-full"
            />
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 bg-gray-700 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-80"
              aria-label="Close zoom"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
