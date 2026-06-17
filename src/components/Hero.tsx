import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="space-y-6">
        <span className="rounded-full border border-indigo-500 px-4 py-2 text-indigo-400">
          Full Stack Developer
        </span>

        <h1 className="text-5xl font-bold md:text-7xl">
          Dushyant Kumar
        </h1>

        <p className="max-w-2xl text-lg text-slate-400">
          Building scalable web applications with React,
          TypeScript, Node.js, MongoDb and modern tools.
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/dushyantkumar4">
            <i className="fa-brands fa-github text-2xl"></i>
          </a>

          <a href="https://linkedin.com/in/dushyantkumar04">
            <i className="fa-brands fa-square-linkedin text-2xl"></i>
          </a>

          <a href="mailto:dushyantkumar96756@gmail.com">
            <Mail />
          </a>
        </div>
      </div>
    </section>
  );
}