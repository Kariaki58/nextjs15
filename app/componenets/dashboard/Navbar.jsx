"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { MdNightlightRound } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import profile from "@/public/assets/profile-3.png";
import Image from "next/image";


const Navbar = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-2 shadow-md rounded-full mb-6">
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input 
              type="date" 
              className="border-none px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span className="bg-gray-200 px-2">to</span>
            <input 
              type="date" 
              className="border-none px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition duration-200 rounded-r-lg">
              Apply
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Theme Switcher */}
          <div className="flex items-center gap-2">
            <MdOutlineLightMode className="text-gray-500" />
            <Switch />
            <MdNightlightRound className="text-gray-500" />
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <Image
              src={profile}
              alt="admin profile photo"
              className="rounded-full"
              width={50}
              height={50}
            />
          </div>
        </div>
    </nav>
  )
}

export default Navbar