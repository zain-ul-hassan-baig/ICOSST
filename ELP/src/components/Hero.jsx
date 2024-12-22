import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/15883052/pexels-photo-15883052/free-photo-of-sydney-opera-house-under-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600")' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to ICOSST</h1>
        <p className="text-lg mb-8">Join us on 12/12/2025 at Expo Center Lahore</p>
        <button className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
