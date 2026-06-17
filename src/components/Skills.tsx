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
    <div className="flex flex-wrap gap-4 px-5">
      {skills.map((skill, index) => (
        <span key={index} className="rounded-xl bg-indigo-600/20 px-4 py-2">
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skills;
