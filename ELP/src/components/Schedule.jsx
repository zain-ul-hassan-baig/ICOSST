import React, { useState } from "react";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState(0);

  const schedule = [
    { time: "10:00 AM", event: "Opening Ceremony" },
    { time: "11:00 AM", event: "Keynote Speech" },
    { time: "1:00 PM", event: "Panel Discussion" },
  ];

  return (
    <section className="relative py-20 px-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white">
      {/* Full-Width and Height Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/7679733/pexels-photo-7679733.jpeg?auto=compress&cs=tinysrgb&w=600")', // Replace with your image URL
        }}
      ></div>

      <div className="container relative mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 tracking-wide">
          Event Schedule
        </h2>
        <ul className="flex flex-wrap justify-center gap-6 mb-12">
          {schedule.map((_, index) => (
            <li
              key={index}
              className={`cursor-pointer px-8 py-4 rounded-xl text-xl font-semibold transition-all duration-300 transform ${
                activeTab === index
                  ? "bg-blue-600 text-white shadow-xl scale-110"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400 hover:scale-105"
              }`}
              onClick={() => setActiveTab(index)}
            >
              Tab {index + 1}
            </li>
          ))}
        </ul>
        <div className="relative p-10 bg-white shadow-2xl rounded-2xl max-w-3xl mx-auto">
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 animate-ping"></div>
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600"></div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            {schedule[activeTab].time}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {schedule[activeTab].event}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
