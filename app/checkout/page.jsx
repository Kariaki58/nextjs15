import PaymentInfo from '../componenets/PaymentInfo';
import OrderSummary from '../componenets/OrderSummary';
import ShippingDetails from '../componenets/ShippingDetails';
import Navbar from '../componenets/Navbar';
import Footer from '../componenets/Footer';
import { IoChevronForwardOutline } from 'react-icons/io5';
import brand from "@/public/assets/brand.png";



const Page  = () => {
  return (
    <>
    <Navbar />
    <header
        className="h-64 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url(${brand.src})`,
        }}
      >
        <h2 className="text-3xl font-bold mb-10">Thanks for Shopping</h2>
        <div className="flex items-center text-lg">
          <p>Beautifo</p>
          <IoChevronForwardOutline className="mx-2" />
          <p>Shop</p>
        </div>
    </header>
    <div className="min-h-screen px-8 py-4 sm:p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Checkout</h1>
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
            <div className='bg-gray-200 p-4 rounded-xl'>
                <OrderSummary />
            </div>
            <div className='bg-gray-200 p-4 rounded-xl'>
                <ShippingDetails />
            </div>
            
        </div>
        <div className="bg-gray-200 p-4 rounded-xl mt-10 md:inline-block">
            <PaymentInfo />
        </div>
        <div className="pt-6 flex justify-center">
            <button className="bg-black text-white px-20 py-5 font-bold rounded-md text-2xl hover:bg-[#FA9090] transition-colors">
                Place Order
            </button>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default Page;
