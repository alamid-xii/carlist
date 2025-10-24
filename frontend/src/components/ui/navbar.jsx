import React, { useState } from "react";
import PrimaryButton from "./primarybutton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black border-b border-emerald-500/20 sticky top-0 z-50">
      <div className="flex justify-between items-center py-4 px-1 sm:px-6 md:px-1">
        {/* Brand */}
        <h1 className="text-3xl font-bold text-white m">
          <span className="text-emerald-500">AUTO</span>LITE
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖️" : "☰"}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#features" className="text-gray-300 hover:text-emerald-500 text-lg">Features</a>
          <a href="#models" className="text-gray-300 hover:text-emerald-500 text-lg">Models</a>
          <a href="#contact" className="text-gray-300 hover:text-emerald-500 text-lg">Contact</a>
          <PrimaryButton label="Get Started" />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black border-t border-emerald-500/20 space-y-4 pb-2">
          <a href="#features" className="text-gray-300 hover:text-emerald-500 text-lg">Features</a>
          <a href="#models" className="text-gray-300 hover:text-emerald-500 text-lg">Models</a>
          <a href="#contact" className="text-gray-300 hover:text-emerald-500 text-lg">Contact</a>
          <PrimaryButton label="Get Started" />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
