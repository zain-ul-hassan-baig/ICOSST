
// export default Navbar;
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
      const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false); 
        }
      };
  return (
    <div>
    {/* Navbar */}
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white fixed top-0 w-full shadow-lg z-50 border-b border-white">
  <div className="container mx-auto flex justify-between items-center p-4">
    {/* Brand Name */}
    <div className="text-2xl font-extrabold tracking-wide">ICOSST</div>

    {/* Nav Links for Large Screens */}
    <ul className="hidden md:flex space-x-8 font-medium">
      <li>
        <button
          className="hover:text-red-300 transition duration-300"
          onClick={() => scrollToSection("home")}
        >
          Home
        </button>
      </li>
      <li>
        <button
          className="hover:text-red-300 transition duration-300"
          onClick={() => scrollToSection("about")}
        >
          Details
        </button>
      </li>
      <li>
        <button
          className="hover:text-red-300 transition duration-300"
          onClick={() => scrollToSection("services")}
        >
          Schedule
        </button>
      </li>
      <li>
        <button
          className="hover:text-red-300 transition duration-300"
          onClick={() => scrollToSection("contact")}
        >
          Tickets
        </button>
      </li>
    </ul>

    {/* Hamburger Button for Small Screens */}
    <div className="md:hidden">
      <button
        className="text-yellow-400 hover:text-yellow-300 transition duration-300"
        onClick={() => setIsOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  </div>

  {/* Dropdown Menu */}
  {isOpen && (
    <div className="absolute top-full left-0 w-full bg-blue-800 bg-opacity-95 text-white flex flex-col items-center z-50 min-w-full">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300"
        onClick={() => setIsOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Dropdown Links */}
      <ul className="space-y-6 text-lg font-semibold min-w-full text-center">
        <li>
          <button
            className="hover:text-yellow-300 transition duration-300"
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="hover:text-yellow-300 transition duration-300"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="hover:text-yellow-300 transition duration-300"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
        </li>
        <li>
          <button
            className="hover:text-yellow-300 transition duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  )}
</nav>

  </div>
  )
}

export default Navbar
