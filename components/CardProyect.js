import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function CardProyect({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700">
      {/* Imagen del proyecto */}
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}

      {/* Contenido */}
      <div className="p-5">
        {/* Título */}
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2 line-clamp-1">
          {project.title}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              <FiExternalLink size={16} />
              Ver
            </a>
          ) : (
            <button
              disabled
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded bg-zinc-300 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-500 cursor-not-allowed opacity-50"
            >
              <FiExternalLink size={16} />
              Ver
            </button>
          )}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <FiGithub size={16} />
              GitHub
            </a>
          ) : (
            <button
              disabled
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded border border-zinc-300 dark:border-zinc-700 text-zinc-400 dark:text-zinc-600 cursor-not-allowed opacity-50"
            >
              <FiGithub size={16} />
              GitHub
            </button>
          )}
        </div>
      </div>
    </div>
  );
}