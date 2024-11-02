import Navbar from "@/app/componenets/Navbar";
import Link from "next/link";
import Footer from "@/app/componenets/Footer";
import { BsCartCheck } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa6";
import { GrLogout } from "react-icons/gr";


const layout = ({children}) => {
  return (
    <>
    <Navbar />
    <div className="flex container mx-auto my-10 h-screen">
        <div className="h-screen xl:w-72 border-gray-300 border-r-2">
            <ul className="leading-10 px-4">
                <Link href="/dashboard/users">
                    <li className="flex items-center text-xl gap-4 mt-10 cursor-pointer bg-gray-950 text-white sm:bg-gray-950 sm:text-white rounded-lg p-4">
                    <BsCartCheck className="text-2xl" />
                    <p className="hidden md:block">My Orders</p>
                    </li>
                </Link>
                <Link href="/dashboard/users/profile">
                    <li className="flex items-center text-xl gap-4 mt-5 cursor-pointer bg-gray-950 text-white sm:bg-gray-950 sm:text-white rounded-lg p-4">
                    <FaRegAddressBook className="text-2xl" />
                    <p className="hidden md:block">Account</p>
                    </li>
                </Link>
                <li className="flex items-center text-xl gap-4 mt-72 cursor-pointer bg-gray-950 text-white sm:bg-gray-950 sm:text-white rounded-lg p-4">
                    <GrLogout />
                    <p className="hidden md:block">Sign Out</p>
                </li>
            </ul>
        </div>
        <div className="flex-1">
            {children}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default layout