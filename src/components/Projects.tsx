import { ArrowUpRight, ImagePlus } from "lucide-react";
import { motion } from "framer-motion";

import { projects } from "../data/portfolioData.ts";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
          Selected work
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Projects that solve real problems.
        </h2>
      </div>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur transition-colors hover:border-indigo-500/70 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-indigo-400/70"
          >
            <div className="grid min-h-80 md:grid-cols-[1fr_0.92fr]">
              <div className="flex flex-col p-7 sm:p-9">
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                  0{index + 1} / Featured project
                </p>
                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3 pt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-transparent bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:border-indigo-300 dark:hover:bg-indigo-100"
                  >
                    Live demo <ArrowUpRight size={15} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} source code`}
                    className="inline-grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-base leading-none transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="relative m-4 grid min-h-56 place-items-center overflow-hidden rounded-2xl border border-dashed border-indigo-300/70 bg-indigo-50/60 transition-colors group-hover:bg-indigo-100/60 dark:border-indigo-400/30 dark:bg-indigo-500/5 dark:group-hover:bg-indigo-500/10">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_62%)]" />
                    <div className="relative flex flex-col items-center gap-3 text-center text-sm text-slate-500 dark:text-slate-400">
                      <ImagePlus size={26} className="text-indigo-500" />
                      <span>Project image placeholder</span>
                      <span className="max-w-44 text-xs">
                        Add an image URL to this project when it is ready.
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
