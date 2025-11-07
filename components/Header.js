"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const sections = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Works", id: "works" },
    { name: "Contact", id: "contact" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <header className="flex items-center justify-between fixed w-full top-0 px-4 sm:px-6 py-4 sm:py-6 text-white z-50 bg-transparent backdrop-blur-md border-opacity-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/Presentacion.jpg"
            alt="Daniel Bernal"
            width={40}
            height={40}
            quality={100}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection("home")}
          />
          <h1 
            onClick={() => scrollToSection("home")}
            className="text-lg sm:text-2xl font-bold bg-white bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity hidden xs:block"
          >
            Daniel
          </h1>
          <h1 
            onClick={() => scrollToSection("home")}
            className="text-lg sm:text-2xl font-bold bg-white bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity xs:hidden"
          >
            Daniel Bernal
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="transition-colors duration-300 font-medium text-white hover:text-cyan-400"
            >
              {section.name}
            </button>
          ))}
        </nav>

        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </header>

      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-md md:hidden z-40 border-b border-white/10">
          <nav className="flex flex-col p-4 space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-left transition-colors duration-300 font-medium text-white hover:text-cyan-400 py-2 text-lg"
              >
                {section.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}