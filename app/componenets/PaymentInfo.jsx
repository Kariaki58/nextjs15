const PaymentInfo = () => {
  return (
    <section aria-labelledby="payment-info">
        <h2 id="payment-info" className="text-lg font-semibold text-gray-800 mb-4">Payment Information</h2>
        <form className="space-y-6">
        <div>
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#FA9090]" placeholder="1234 5678 9012 3456" />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#FA9090]" placeholder="MM/YY" />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">CVV</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#FA9090]" placeholder="123" />
            </div>
        </div>
        </form>
    </section>
  )
}

export default PaymentInfo