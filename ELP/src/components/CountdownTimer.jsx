import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-12-12T00:00:00");
    const difference = +eventDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative py-12 text-white"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/7703268/pexels-photo-7703268.jpeg?auto=compress&cs=tinysrgb&w=600")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 opacity-90"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 tracking-wide">
          Countdown to Event
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {Object.keys(timeLeft).map((key) => (
            <div
              key={key}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 md:p-6 shadow-lg text-center w-24 sm:w-28 md:w-32"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                {timeLeft[key]}
              </p>
              <p className="text-sm sm:text-md md:text-lg font-semibold uppercase tracking-wider">
                {key}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
