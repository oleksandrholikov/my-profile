type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  techs: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col items-start justify-start group p-6 w-[500px] h-[300px] border-[3px] border-[#ED816C] rounded-2xl overflow-hidden relative">
      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
        />
      </div>

      <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-xl text-white mb-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-sm bg-[#ED816C] text-white rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-[#ED816C] hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}