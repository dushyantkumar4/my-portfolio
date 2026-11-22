import { ArrowRight, Check, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Meteors } from "./ui/meteors"; 

import avatar from "../assets/my-avatar.png";

const headline = "Building polished web experiences.".split(" ");
const email = "dushyantkumar96756@gmail.com";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };
  return (
    <section className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-12 overflow-hidden px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
      <div
        aria-hidden="true"
        className="hero-light-ray pointer-events-none absolute -left-36 -top-44 h-[34rem] w-[48rem] -rotate-12 blur-3xl"
      />
      <div className="relative max-w-4xl space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-fit rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300"
        >
          Full Stack Developer
        </motion.p>
        <div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            className="text-5xl font-bold tracking-tight sm:text-7xl"
          >
            {headline.map((word) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
                  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400"
          >
            I’m Dushyant Kumar, a developer focused on scalable React and
            Node.js products with thoughtful, high-quality interfaces.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="moving-border group relative inline-flex overflow-hidden rounded-full p-[1.5px]"
          >
            <span className="relative flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors group-hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:group-hover:bg-slate-200">
              View my work <ArrowRight size={16} />
            </span>
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-medium transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
          >
            {copied ? (
              <Check size={16} className="text-emerald-500" />
            ) : (
              <Mail size={16} />
            )}
            {copied ? "Email copied" : ""}
          </button>
          <Link
            to="https://github.com/dushyantkumar4"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hero-icon-link"
          >
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link
            to="https://linkedin.com/in/dushyantkumar04"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hero-icon-link"
          >
            <i className="fa-brands fa-linkedin-in text-lg"></i>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 28 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 0.2 }}
        className="relative mx-auto w-full max-w-sm"
      >
        <div className="avatar-orbit absolute -inset-5 rounded-full border border-indigo-400/40" />
        <div className="avatar-orbit avatar-orbit-reverse absolute -inset-10 rounded-full border border-dashed border-indigo-400/30" />
        <div className="relative overflow-hidden rounded-full border-8 border-white/70 shadow-2xl shadow-indigo-500/20 dark:border-slate-900/70">
          <img
            src={avatar}
            alt="Dushyant Kumar"
            className="aspect-square w-full object-cover"
          />
        </div>
      </motion.div>
      <Meteors number={20} />
    </section>
  );
}
