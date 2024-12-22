import React from "react";

const Tickets = () => {
  return (
    <section className="relative py-20 px-8 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white">
      {/* Side Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1860618/pexels-photo-1860618.jpeg?auto=compress&cs=tinysrgb&w=600")', 
        }}
      ></div>

      <div className="container relative mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 tracking-wide">
          Book Your Tickets
        </h2>
        <form className="max-w-lg mx-auto bg-white shadow-xl rounded-lg p-8 space-y-6 relative z-10">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Tickets;
