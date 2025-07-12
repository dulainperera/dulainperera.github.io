import PROJECTS from '../data/constants';


const ProjectCard = ({ project }) => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
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
          <p className="text-sm mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 hover:underline text-xs"
          >
            View on GitHub
          </a>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;