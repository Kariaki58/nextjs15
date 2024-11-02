import Image from "next/image";
import skincare from "@/public/assets/skincare4.jpg";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Cart = ({ setShowCart }) => {
  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}  // Easing function for smoothness
        className="fixed z-50 right-0 top-0 h-screen w-[80%] md:w-[50%] lg:w-[40%] bg-white p-4 shadow-lg overflow-hidden"
      >
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-semibold">Cart Items</h1>
          <IoClose
            size={30}
            className="cursor-pointer"
            onClick={handleCloseCart}
          />
        </div>
        <div>
            <p className="flex justify-between py-2">
                <span>Discount:</span>
                <span>-$200</span>
            </p>
            <h1 className="text-2xl font-medium py-4 border-t flex justify-between">
                <span>Total:</span>
                <span>$800</span>
            </h1>
        </div>
        <div className="overflow-auto h-[63%] custom-scrollbar pr-2">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex gap-4 mb-5">
              <Image
                src={skincare}
                alt="Product Image"
                width={150}
                height={150}
                className="rounded-xl"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-lg font-medium text-gray-700">
                    Bombex Jacket Limited Edition Unisex
                  </p>
                  <p className="font-bold text-gray-800">$24.99</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <select className="p-2 border border-gray-300 rounded-md">
                    <option value="medium">Md</option>
                    <option value="large">L</option>
                    <option value="small">S</option>
                    <option value="xlarge">XL</option>
                    <option value="xxlarge">XXL</option>
                  </select>
                  <div className="flex items-center gap-3">
                    <button className="border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-200">-</button>
                    <span className="font-semibold">2</span>
                    <button className="border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-200">+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link className="mt-6" href="/checkout">
          <button className="bg-slate-800 w-full mt-8 hover:bg-slate-900 text-white px-20 py-5 rounded-full shadow-lg transition duration-200">
            Checkout
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default Cart;
