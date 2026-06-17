const Experience = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold">
        Experience
      </h2>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold">
              Full Stack Developer
            </h3>

            <p className="text-indigo-400">
              FUTiSE Technology Pvt Ltd
            </p>
          </div>

          <span className="text-slate-400">
            Apr 2025 - Feb 2026
          </span>
        </div>

        <ul className="mt-6 space-y-4 text-slate-300">
          <li>
            Built an industry-level Learning Management
            System (LMS) using React, TypeScript,
            Tailwind CSS and React Query.
          </li>

          <li>
            Designed scalable REST APIs using Node.js,
            Express.js, PostgreSQL and Prisma ORM.
          </li>

          <li>
            Implemented authentication,
            authorization and role-based access control.
          </li>

          <li>
            Created reusable and maintainable UI
            components following production standards.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;