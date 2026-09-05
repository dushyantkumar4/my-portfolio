import { Check, FileText, Mail } from "lucide-react";
import { useState } from "react";
import {Link} from "react-router-dom"

const email = "dushyantkumar96756@gmail.com";
const linkClass =
  "flex items-center gap-3 rounded-xl border border-slate-200 p-4 text-left text-sm font-medium transition-colors duration-200 hover:border-indigo-500 dark:border-slate-700 dark:hover:border-indigo-400";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
          Get in touch
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Let’s build something useful.
        </h2>
      </div>
      <div className="contact-liquid relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white/60 p-6 shadow-sm backdrop-blur sm:p-8 dark:border-slate-800 dark:bg-slate-900/65">
        <div className="relative">
        <p className="leading-7 text-slate-600 dark:text-slate-400">
          Open to full-stack opportunities and thoughtful collaborations.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <button onClick={copyEmail} className={linkClass}>
            {copied ? (
              <Check className="text-emerald-500" size={18} />
            ) : (
              <Mail size={18} />
            )}{" "}
            {copied ? "Email copied" : "Copy email"}
          </button>
          <Link
            to="https://github.com/dushyantkumar4"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            <i className="fa-brands fa-github text-lg" /> GitHub
          </Link>
          <Link
            to="https://linkedin.com/in/dushyantkumar04"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            <i className="fa-brands fa-linkedin-in text-lg" /> LinkedIn
          </Link>
          <Link
            to="https://drive.google.com/file/d/1_-Z9OlmjZnKJbOpkPpN_m7IbAtKUW6Wc/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            <FileText size={18} /> Resume
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
