import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "SQL",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Docker",
  "Tailwind CSS",
  "shadcn/ui",
  "Bootstrap",
  "Ant Design",
  "React Query",
  "Redux",
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
          Toolbox
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Skills I use to ship.
        </h2>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={{
              hidden: { opacity: 0, y: 12, scale: 0.94 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ type: "spring", stiffness: 220, damping: 17 }}
            whileHover={{ y: -4, scale: 1.04 }}
            className="cursor-default rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
