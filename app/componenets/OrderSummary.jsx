import skincare3 from "@/public/assets/skincare3.jpg"; // Assuming this is Product 1
import skincare4 from "@/public/assets/skincare4.jpg"; // Assuming this is Product 2 (add this image path)
import Image from "next/image";

const OrderSummary = () => {
  return (
    <section aria-labelledby="order-summary" className="p-4">
        <h2 id="order-summary" className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
        
        <div className="space-y-4 overflow-auto h-52 custom-scrollbar p-4">
            {/* Product 1 */}
            <div className="flex items-center justify-between text-gray-700">
                <div className="flex items-center">
                    <Image 
                      src={skincare3} 
                      alt="Product 1: Skincare Cream" 
                      width={50} // Thumbnail width
                      height={50} // Thumbnail height
                      className="rounded-lg object-cover mr-2"
                    />
                    <span>Product 1</span>
                </div>
                <span>$20.00</span>
            </div> 
            {/* Product 2 */}
            <div className="flex items-center justify-between text-gray-700">
                <div className="flex items-center">
                    <Image 
                      src={skincare4} 
                      alt="Product 2: Skincare Serum" 
                      width={50} // Thumbnail width
                      height={50} // Thumbnail height
                      className="rounded-lg object-cover mr-2"
                    />
                    <span>Product 2</span>
                </div>
                <span>$15.00</span>
            </div>
        </div>
        <div className="flex justify-between font-semibold border-t mt-20 text-gray-800">
            <span>Total</span>
            <span>$35.00</span>
        </div>
    </section>
  );
};

export default OrderSummary;
