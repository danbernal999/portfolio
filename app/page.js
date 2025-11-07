"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardProyect from "@/components/CardProyect";
import TechSkillsCarousel from "@/components/TechSkillsCarousel";
import { projects } from "@/data/projects";
import { FiGithub, FiMail, FiLinkedin, FiMapPin, FiPhone } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init("OuzEOBGyMOsQ20EO-");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Enviar email usando EmailJS
      await emailjs.send(
        "service_rdcl5za",
        "template_qc3l33a",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          time: new Date().toLocaleString('es-CO', { 
            timeZone: 'America/Bogota',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })
        }
      );

      console.log("✅ Email enviado exitosamente");
      setSubmitted(true);
      
      // Reset del formulario después de 3 segundos
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error("❌ Error enviando email:", err);
      setError("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Header />

      <main className="flex flex-col w-full">
        {/* SECCIÓN HOME */}
        <section id="home" className="w-full min-h-screen flex flex-col pt-16 sm:pt-20">
            {/* Hero Section */}
            <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden flex-shrink-0">
              <h1 className="absolute inset-0 flex items-center justify-center text-[60px] xs:text-[80px] sm:text-[150px] lg:text-[280px] font-black leading-none text-zinc-800 opacity-15">
                HELLO
              </h1>
              <div className="relative z-10 px-4">
                <Image
                  src="/frimaa.png"
                  alt="Mi firma"
                  width={300}
                  height={120}
                  className="object-contain filter invert drop-shadow-lg w-auto h-auto max-w-xs sm:max-w-md"
                />
              </div>
            </div>

            {/* Contenido Principal */}
            <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 flex-shrink-0 pb-12">
              <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 md:space-y-12 max-w-5xl mx-auto">
                
                {/* Introducción */}
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Hi I'm Daniel,
                    </span>
                    <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white"> Full Stack Developer</span>
                  </h2>
                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 px-2">
                    Passionate about building complete web solutions with a strong foundation in full-stack development. 
                    Driven by curiosity and committed to continuous learning.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-2">
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-400 text-cyan-400 text-xs sm:text-sm font-medium hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap">
                    Full Stack Dev
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-400 text-blue-400 text-xs sm:text-sm font-medium hover:bg-blue-400 hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap">
                    Docker & FastAPI
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-400 text-purple-400 text-xs sm:text-sm font-medium hover:bg-purple-400 hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap">
                    Web Design
                  </span>
                </div>

                <button 
                  onClick={() => document.getElementById("works").scrollIntoView({ behavior: "smooth" })}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm sm:text-base rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </button>
              </div>
            </div>
        </section>

        {/* SECCIÓN ABOUT */}
        <section id="about" className="w-full pt-16 sm:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="my-5 font-bold"></h2>
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
                {/* LinkedIn Card */}
                <div className="lg:col-span-1 h-fit">
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-300 hover:border-gray-400 transition-all duration-300 hover:shadow-md">
                    <div className="bg-gray-200 px-4 py-3 flex items-center gap-1">
                      <span className="text-blue-600 font-bold text-lg">Linkedin</span>
                      <span className="text-blue-600 font-black text-lg">in</span>
                    </div>
                    
                    <div className="p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/Presentacion.jpg"
                          alt="Daniel Bernal"
                          width={60}
                          height={60}
                          quality={100}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">Daniel Bernal</h3>
                      
                      <p className="text-xs text-gray-700 leading-relaxed">
                        Full Stack | React & Next.js | Node.js | Python | Express | PostgreSQL | MongoDB | JavaScript | TypeScript | Tailwind CSS | UX/UI | Web Design
                      </p>
                      
                      <p className="text-xs text-gray-600">
                        GroupCOS | Servicio Nacional de Aprendizaje (SENA) | Universidad Nacional De Colombia (UNAD)
                      </p>
                      
                      <a 
                        href="https://www.linkedin.com/in/danielbernallopez/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block my-5 px-6 py-1.5 border border-blue-600 text-blue-600 text-sm font-semibold rounded-full hover:bg-blue-50 transition-all duration-300"
                      >
                        Ver perfil
                      </a>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    {[
                      { title: "Full Stack Development Web", org: "ProTalento & Colsubsidio | 6 Months", desc: "Comprehensive training in modern web technologies and development practices, including front-end, back-end, databases, and deployment workflows. Focused on building scalable, maintainable, and user-oriented applications." },
                      { title: "UX & UI Design", org: "Design & UX Fundamentals | 6 Months", desc: "Developed a strong understanding of user-centered design, usability principles, and visual hierarchy to create intuitive and engaging interfaces that enhance user experience." },
                      { title: "Mobile App Development", org: "Universidad Nacional de Colombia | 6 Months", desc: "Hands-on experience designing and developing responsive and native mobile applications, emphasizing performance, accessibility, and seamless user interaction." },
                      { title: "Software Analysis & Development Technologist", org: "Diseño & Metrologia SENA | 2 Years - Present", desc: "Currently completing practical training in software engineering and system analysis, applying industry standards in software design, database modeling, and agile methodologies" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div className="text-left">
                          <h5 className="font-semibold text-white text-sm md:text-base">{item.title}</h5>
                          <p className="text-xs md:text-sm text-gray-400">{item.org}</p>
                          <p className="text-gray-300 mt-1 text-xs md:text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Passionate about building complete web solutions with a strong foundation in full-stack development. 
                    My mission is to become a complete professional capable of solving complex problems and driving innovation through technology.
                  </p>
                </div>
              </div>

              <TechSkillsCarousel />
            </div>
          </div>
        </section>

        {/* SECCIÓN WORKS */}
        <section id="works" className="w-full pt-16 sm:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl my-5 mx-auto">
            <div className="mb-10 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                My Projects
              </h1>
              <p className="text-base sm:text-lg text-gray-400">
                Explore some of my works and personal projects
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project) => (
                <CardProyect key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN CONTACT */}
        <section id="contact" className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Encabezado */}
            <div className="text-start my-5 mb-8 sm:mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Get in Touch
              </h1>
            </div>

            {/* Contenido Principal */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-5">
              
              {/* Columna Izquierda - Mapa y Redes Sociales */}
              <div className="lg:col-span-1 space-y-6">
                
                <p className="text-base sm:text-lg text-gray-300">
                  Do you have a project in mind? Don't hesitate to get in touch. I'm available for new opportunities!
                </p>

                {/* Mapa */}
                <div className="rounded-lg overflow-hidden shadow-lg border border-white/10 h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4483378374367!2d-74.0724219!3d4.7110186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b5a5a5a5a5d%3A0x5a5a5a5a5a5a5a5a!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Redes Sociales */}
                <div className="">
                  <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">Social Media</h3>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <a href="https://www.linkedin.com/in/danielbernallopez/" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center justify-center p-2 sm:p-3 rounded-lg border border-blue-400/30 text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/60 transition-all duration-300 group">
                      <FiLinkedin className="text-lg sm:text-xl group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://github.com/danbernal999" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center justify-center p-2 sm:p-3 rounded-lg border border-purple-400/30 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400/60 transition-all duration-300 group">
                      <FiGithub className="text-lg sm:text-xl group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center justify-center p-2 sm:p-3 rounded-lg border border-green-400/30 text-green-400 hover:bg-green-400/10 hover:border-green-400/60 transition-all duration-300 group">
                      <SiWhatsapp className="text-lg sm:text-xl group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Columna Derecha - Formulario */}
              <div className="lg:col-span-1">
                <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white/5 to-white/5 border border-white/10 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                  
                  {submitted ? (
                    <div className="flex items-center justify-center h-full min-h-[370px]">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-400/20 border border-green-400 mb-4">
                          <span className="text-3xl text-green-400">✓</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-300">Thank you for your message. I'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Nombre */}
                      <div className="mb-4 sm:mb-5">
                        <label htmlFor="name" className="block text-white font-medium mb-2 text-sm sm:text-base">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email */}
                      <div className="mb-4 sm:mb-5">
                        <label htmlFor="email" className="block text-white font-medium mb-2 text-sm sm:text-base">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>

                      {/* Teléfono */}
                      <div className="mb-4 sm:mb-5">
                        <label htmlFor="phone" className="block text-white font-medium mb-2 text-sm sm:text-base">
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      {/* Mensaje */}
                      <div className="mb-4 sm:mb-5">
                        <label htmlFor="message" className="block text-white font-medium mb-2 text-sm sm:text-base">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="4"
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 resize-none"
                          placeholder="Tell me about your project or idea..."
                        />
                      </div>

                      {/* Mostrar Error */}
                      {error && (
                        <div className="mb-4 sm:mb-5 p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                          <p className="text-red-400 text-xs sm:text-sm">{error}</p>
                        </div>
                      )}

                      {/* Botón Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm sm:text-base rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
