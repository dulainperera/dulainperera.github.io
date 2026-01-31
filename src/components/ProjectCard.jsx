
const ProjectCard = ({ project }) => {
  return (
    <div className="border border-white/20 bg-black/40
               backdrop-blur-lg shadow-lgbg-neutral-900 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline text-inherit"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-neutral-400 mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-900 text-blue-300 text-xs font-semibold px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <span className="inline-block mt-2 text-blue-400 hover:underline text-xs">
            View on GitHub →
          </span>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;