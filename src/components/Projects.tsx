import { projects } from "../data/portfolioData.ts";

const Projects = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-3xl font-bold">
        Featured Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-indigo-500"
          >
            <h3 className="mb-3 text-xl font-semibold">
              {project.title}
            </h3>

            <p className="mb-4 text-slate-400">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;