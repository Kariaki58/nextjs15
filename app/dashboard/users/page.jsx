"use client";
import { useState } from 'react';

const initialOrdersData = [
  { productName: 'Product 1', size: 'M', color: 'blue', quantity: 5, price: 800, status: 'Delivered', date: '2 April 2024', deliveryDate: '10 April 2024' },
  { productName: 'Product 2', size: 'L', color: 'red', quantity: 2, price: 1500, status: 'Shipped', date: '5 April 2024', deliveryDate: '15 April 2024' },
];

const shippingAddress = "1234 Elm St, Springfield, IL, USA";

const Page = () => {
  const [orders, setOrders] = useState(initialOrdersData);

  const handleCancelOrder = (index) => {
    setOrders((prevOrders) => 
      prevOrders.map((order, i) =>
        i === index ? { ...order, status: 'Cancelled' } : order
      )
    );
  };

  return (
    <main className="container mx-auto p-4 h-screen overflow-y-auto mb-10 custom-scrollbar">
      <h1 className="text-2xl font-bold mb-4 text-center" tabIndex="0">My Orders</h1>
      <button
        aria-label="Download your orders"
        className="bg-green-600 text-white py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hover:bg-green-700"
      >
        Download Orders
      </button>

      <section className="shadow-md rounded-lg mb-6 p-4" aria-labelledby="order-summary">
        <h2 id="order-summary" className="sr-only">Order Summary</h2>
        <div className="mb-4">
          <h3 className="text-gray-700 font-semibold">Total Amount: $899</h3>
          <p className="text-gray-700 font-semibold">Shipping Address:</p>
          <address className="text-sm text-gray-600">{shippingAddress}</address>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse border border-gray-300 rounded-lg">
            <caption className="text-lg font-semibold text-left p-4">Order Details</caption>
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr className="text-gray-800">
                <th scope="col" className="py-2 px-2 sm:px-4 text-left font-medium whitespace-nowrap">Product Name</th>
                <th scope="col" className="py-2 px-2 sm:px-4 text-left font-medium whitespace-nowrap">Size</th>
                <th scope="col" className="py-2 px-2 sm:px-4 text-left font-medium whitespace-nowrap">Color</th>
                <th scope="col" className="py-2 px-2 sm:px-4 text-left font-medium whitespace-nowrap">Quantity</th>
                <th scope="col" className="py-2 px-2 sm:px-4 text-left font-medium whitespace-nowrap">Price</th>
                <th scope="col" className="py-2 px-2 sm:px-4 text-left font-medium whitespace-nowrap">Order Date</th>
                <th scope="col" className="py-2 px-2 sm:px-4 text-left font-medium whitespace-nowrap">Delivery Date</th>
                <th scope="col" className="py-2 px-2 sm:px-4 text-left font-medium whitespace-nowrap">Status</th>
                <th scope="col" className="py-2 px-2 sm:px-4 text-left font-medium whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-t border-gray-300 text-gray-800 hover:bg-gray-50">
                  <td className="py-2 px-2 sm:px-4 whitespace-nowrap">{order.productName}</td>
                  <td className="py-2 px-2 sm:px-4 whitespace-nowrap">{order.size}</td>
                  <td className="py-2 px-2 sm:px-4 whitespace-nowrap">{order.color}</td>
                  <td className="py-2 px-2 sm:px-4 whitespace-nowrap">{order.quantity}</td>
                  <td className="py-2 px-2 sm:px-4 whitespace-nowrap">${order.price}</td>
                  <td className="py-2 px-2 sm:px-4 whitespace-nowrap">{order.date}</td>
                  <td className="py-2 px-2 sm:px-4 whitespace-nowrap">{order.deliveryDate}</td>
                  <td className="py-2 px-2 sm:px-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-semibold ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                        order.status === 'Shipped' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}
                      aria-label={`Order Status: ${order.status}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 px-2 sm:px-4 whitespace-nowrap">
                    {order.status !== 'Cancelled' ? (
                      <button
                        onClick={() => handleCancelOrder(index)}
                        className="bg-red-600 text-white py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-700"
                        aria-label={`Cancel order for ${order.productName}`}
                      >
                        Cancel Order
                      </button>
                    ) : (
                      <span className="text-gray-500 italic">Cancelled</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Page;
