import React from "react";

const EventDetails = () => {
  return (
    <section
      className="relative py-16 px-8 text-white"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/2623869/pexels-photo-2623869.jpeg?auto=compress&cs=tinysrgb&w=600")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 opacity-80"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10 tracking-wide">
          Event Details
        </h2>
        <div className="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
          <div className="text-left text-lg font-medium space-y-6">
            <p className="flex items-center">
              <span className="text-2xl mr-4">📍</span>
              <span>
                <strong className="text-xl">Venue:</strong> Expo Center Lahore
              </span>
            </p>
            <p className="flex items-center">
              <span className="text-2xl mr-4">🗓️</span>
              <span>
                <strong className="text-xl">Date:</strong> 12/12/2025
              </span>
            </p>
            <p className="flex items-center">
              <span className="text-2xl mr-4">⏰</span>
              <span>
                <strong className="text-xl">Time:</strong> 10 AM
              </span>
            </p>
            <p className="flex items-center">
              <span className="text-2xl mr-4">🎙️</span>
              <span>
                <strong className="text-xl">Keynote Speaker:</strong> Abbas
                Khan
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
