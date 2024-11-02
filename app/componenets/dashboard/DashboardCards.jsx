import { FaArrowUp } from "react-icons/fa6";
import { GoListUnordered } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { MdOutlineSell } from "react-icons/md";
import { FaLongArrowAltDown } from "react-icons/fa";


  

const DashboardCards = () => {
    return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-start w-60">
            <div>
            <h3 className="text-gray-600 text-sm font-semibold">Orders</h3>
            <h1 className="text-3xl font-bold text-gray-800 my-4">201</h1>
            <p className="flex items-center text-gray-500 text-sm">
                <span className="flex items-center">
                <FaArrowUp className="text-green-500 mr-1" />
                <span>10%</span>
                </span>
                <span className="ml-2">since last month</span>
            </p>
            </div>
            <div className="text-gray-400">
            <GoListUnordered className="text-3xl" />
            </div>
        </div>

        {/* Visitors Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-start w-60">
            <div>
            <h3 className="text-gray-600 text-sm font-semibold">Visitors</h3>
            <h1 className="text-3xl font-bold text-gray-800 my-4">1800</h1>
            <p className="flex items-center text-gray-500 text-sm">
                <span className="flex items-center">
                <FaArrowUp className="text-green-500 mr-1" />
                <span>18%</span>
                </span>
                <span className="ml-2">from yesterday</span>
            </p>
            </div>
            <div className="text-gray-400">
            <GoPeople className="text-3xl" />
            </div>
        </div>

        {/* Total Revenue Card */}
        <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-start w-60">
            <div>
            <h3 className="text-gray-600 text-sm font-semibold">Total Revenue</h3>
            <h1 className="text-3xl font-bold text-gray-800 my-4">$50,000</h1>
            <p className="flex items-center text-gray-500 text-sm">
                <span className="flex items-center">
                <FaArrowUp className="text-green-500 mr-1" />
                <span>25%</span>
                </span>
                <span className="ml-1">since last month</span>
            </p>
            </div>
            <div className="text-gray-400">
            <MdOutlineSell className="text-2xl" />
            </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-start w-60">
            <div>
            <h3 className="text-gray-600 text-sm font-semibold">Sales</h3>
            <h1 className="text-3xl font-bold text-gray-800 my-4">$10,000</h1>
            <p className="flex items-center text-gray-500 text-sm">
                <span className="flex items-center">
                <FaLongArrowAltDown className="text-red-500 mr-1" />
                <span>15%</span>
                </span>
                <span className="ml-2">from yesterday</span>
            </p>
            </div>
            <div className="text-gray-400">
            <MdOutlineSell className="text-3xl" />
            </div>
        </div>
    </section>
  )
}

export default DashboardCards