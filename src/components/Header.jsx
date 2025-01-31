import React, { useState } from "react";
import { Menu } from "lucide-react";
import logo from "../assets/logo2.png";

function Header({ isOpen, setIsOpen }) {
  return (
    <header className="h-[65px] bg-white p-4 flex items-center justify-between fixed top-0 w-full z-50 rounded-b-xl">
      <div className="text-lg font-bold">
        <img src={logo} alt="Logo" className="h-8 pl-2" />
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-white text-gray-800"
      >
        <Menu size={24} />
      </button>
      <nav className="hidden md:flex md:space-x-4">
        <a href="#" className="p-2 hover:bg-gray-700">
          About
        </a>
        <a href="#" className="p-2 hover:bg-gray-700">
          Services
        </a>
        <a href="#" className="p-2 hover:bg-gray-700">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
