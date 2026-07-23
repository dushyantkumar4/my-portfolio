const skills = [
  "JavaScript",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "MySql",
  "SQL",
  "Postgresql",
  "Prisma",
  "Redis",
  "Docker",
  "Tailwind CSS",
  "Shadcn",
  "Bootstrap",
  "AntDesign",
  "React Query",
  "Redux",
];

const Skills = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-8 text-3xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-4 px-5">
        {skills.map((skill, index) => (
          <span key={index} className="rounded-xl bg-indigo-600/20 px-4 py-2">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
