import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    date: "April 3, 2024",
    rating: 5,
    profilePic: "https://via.placeholder.com/50",
    reviewText: "I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.",
  },
  {
    name: "Jane Smith",
    date: "March 22, 2024",
    rating: 4,
    profilePic: "https://via.placeholder.com/50",
    reviewText: "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.",
  },
  {
    name: "Alice Johnson",
    date: "March 15, 2024",
    rating: 3,
    profilePic: "https://via.placeholder.com/50",
    reviewText: "Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware",
  },
  {
    name: "Robert Brown",
    date: "March 10, 2024",
    rating: 5,
    profilePic: "https://via.placeholder.com/50",
    reviewText: "The Ralph Lauren quaility is here in abundance. My husband always says that the Lauren polos fit better and last longer than any other brand.I love the new “heathered” color and the price is always excellent through shop",
  },
  {
    name: "Emily Davis",
    date: "March 5, 2024",
    rating: 4,
    profilePic: "https://via.placeholder.com/50",
    reviewText: "My son loved this Jacket for his Senior Prom… He got sooo many compliments! He is slim build 5’11 and 150lbs … I ordered a large … it was a little big … but it was fine!",
  },
];

const ReviewPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Customer Reviews</h1>

      {/* Reviews List */}
      <div className="space-y-8">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border-b border-gray-200">
            <img
              src={review.profilePic}
              alt={`${review.name}'s profile`}
              className="w-12 h-12 rounded-full"
            />
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex my-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-700 mt-2">{review.reviewText}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Review */}
      <div className="mt-10 rounded-lg space-y-4">
        <h2 className="text-2xl font-bold text-center">Add Your Review</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold" htmlFor="rating">
              Your Rating
            </label>
            <select
              id="rating"
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FA9090]"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Choose a rating
              </option>
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} Star{star > 1 && "s"}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                id="name"
                className="w-full mt-1 px-2 py-4 border rounded-full focus:outline-none focus:ring-1 focus:ring-[#FA9090]"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="w-full mt-1 px-2 py-4 border rounded-full focus:outline-none focus:ring-1 focus:ring-[#FA9090]"
                required
              />
            </div>
          </div>
          <div>
            <textarea
              id="reviewText"
              rows="4"
              className="w-full mt-1 p-4 border rounded-xl focus:outline-none focus:ring-1 focus:ring-[#FA9090]"
              required
              placeholder="Your Rating"
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="saveInfo"
              className="h-4 w-4 text-blue-500 focus:ring-[#FA9090] border-gray-300 rounded"
            />
            <label htmlFor="saveInfo" className="ml-2 text-gray-700 text-sm">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          <button
            type="submit"
            className="p-4 mt-10 bg-black hover:bg-[#FA9090] text-white font-bold rounded-full transition duration-300"
          >
            Submit Your Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
