import { Mail, FileText, Check } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dushyantkumar96756@gmail.com");
      setCopied(true);
      // Reset back to normal after 2 seconds
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-8 text-3xl font-bold">Contact</h2>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <p className="mb-8 text-slate-400">
          Open to full-stack development opportunities and collaborations.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <button
            onClick={copyEmail}
            className={`flex items-center gap-3 rounded-xl border p-4 transition-all duration-200 cursor-pointer ${
              copied
                ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                : "border-slate-700 hover:border-indigo-500 text-slate-200 hover:text-white"
            }`}
          >
            {copied ? (
              <Check size={20} className="text-emerald-400" />
            ) : (
              <Mail size={20} />
            )}
            <span>{copied ? "Copied!" : "Copy Email"}</span>
          </button>

          <a
            href="https://github.com/dushyantkumar4"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-700 p-4 transition hover:border-indigo-500"
          >
            <i className="fa-brands fa-github text-2xl"></i>
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/dushyantkumar04"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-700 p-4 transition hover:border-indigo-500"
          >
            <i className="fa-brands fa-square-linkedin text-2xl"></i>
            LinkedIn
          </a>

          <a
            href="https://drive.google.com/file/d/1EGz3nV3H0lVBYo1pWPJTv_BWYxCbu-Pm/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-700 p-4 transition hover:border-indigo-500"
          >
            <FileText size={20} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
