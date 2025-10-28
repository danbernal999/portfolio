"use client";

import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiPostgresql, SiMysql, SiTailwindcss, SiDocker, SiPhp, SiSass, SiFastapi, SiRedis, SiCelery, SiPostman, SiAndroidstudio, SiExpo, SiAngular, SiCss3 } from "react-icons/si";

const backendTechs = [
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "FastAPI", icon: SiFastapi, color: "text-green-400" },
  { name: "PHP", icon: SiPhp, color: "text-purple-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "Celery", icon: SiCelery, color: "text-green-400" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
];

const frontendTechs = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "CSS", icon: SiCss3, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Angular", icon: SiAngular, color: "text-red-600" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "text-green-400" },
  { name: "Expo", icon: SiExpo, color: "text-white" },
  { name: "Sass", icon: SiSass, color: "text-pink-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
];

export default function TechSkillsCarousel() {
  // Duplicar los arrays para crear efecto infinito
  const duplicatedBackendTechs = [...backendTechs, ...backendTechs];
  const duplicatedFrontendTechs = [...frontendTechs, ...frontendTechs];

  return (
    <div 
      className="w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)"
      }}
    >
      
      {/* First Row - Backend */}
      <ul 
        className="flex gap-8 py-4 min-w-max animate-scroll"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)"
        }}
      >
        {duplicatedBackendTechs.map((tech, idx) => {
          const IconComponent = tech.icon;
          return (
            <li
              key={idx}
              className="flex-shrink-0 px-5 py-3 rounded-full transition-all duration-300 whitespace-nowrap backdrop-blur-sm flex items-center justify-center"
              title={tech.name}
            >
              <IconComponent className={`text-4xl ${tech.color}`} />
            </li>
          );
        })}
      </ul>

      {/* Second Row - Frontend - Reverse direction */}
      <ul 
        className="flex gap-8 py-4 min-w-max animate-scroll-reverse mt-5"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)"
        }}
      >
        {duplicatedFrontendTechs.map((tech, idx) => {
          const IconComponent = tech.icon;
          return (
            <li
              key={idx}
              className="flex-shrink-0 px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap backdrop-blur-sm flex items-center justify-center"
              title={tech.name}
            >
              <IconComponent className={`text-4xl ${tech.color}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}