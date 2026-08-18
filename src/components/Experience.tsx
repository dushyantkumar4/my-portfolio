import { motion } from "framer-motion";

const roles = [
  {
    company: "FUTiSE Technology Pvt Ltd",
    period: "Apr 2025 – Feb 2026",
    title: "Full Stack Developer",
    highlights: [
      "Built an industry-level Learning Management System using React, TypeScript, Tailwind CSS, and React Query.",
      "Designed scalable REST APIs with Node.js, Express.js, PostgreSQL, and Prisma.",
      "Implemented secure authentication, authorization, and role-based access control.",
    ],
  },
  {
    company: "OrderzUp",
    period: "May 2026 - July 2026",
    title: "Full Stack Developer",
    highlights: [
      "Engineered type-safe REST APIs with Node.js, Express, TypeScript, and MongoDB.",
      "Architected Redis caching layers and containerized the application with Docker.",
      "Built responsive, reusable React interfaces to production-grade standards.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
          Career path
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Experience</h2>
      </div>
      <div className="relative ml-2 border-l border-slate-300 pl-8 dark:border-slate-700">
        {roles.map((role, index) => (
          <motion.article
            key={role.company}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="relative mb-8 last:mb-0"
          >
            <span className="absolute -left-[2.52rem] top-7 h-4 w-4 rounded-full border-4 border-slate-50 bg-indigo-500 shadow-[0_0_0_5px_rgba(99,102,241,0.14)] dark:border-slate-950" />
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <h3 className="text-xl font-semibold">{role.title}</h3>
                  <p className="mt-1 font-medium text-indigo-600 dark:text-indigo-300">
                    {role.company}
                  </p>
                </div>
                <time className="text-sm text-slate-500 dark:text-slate-400">
                  {role.period}
                </time>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
