"use client";

import Image from "next/image";

export default function Header() {
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
  };

  return (
    <div className="relative">
      <header className="flex items-center justify-between fixed w-full top-0 p-6 text-white z-50 bg-transparent backdrop-blur-md border-opacity-10">
        <div className="flex items-center gap-3">
          <Image
            src="/Presentacion.jpg"
            alt="Daniel Bernal"
            width={40}
            height={40}
            quality={100}
            className="w-10 h-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection("home")}
          />
          <h1 
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold bg-white bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
          >
            Daniel Bernal
          </h1>
        </div>
        <nav className="flex items-center space-x-8">
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
      </header>
    </div>
  );
}