import { Mail, FileText } from "lucide-react";
const copyEmail = async () => {
  await navigator.clipboard.writeText("dushyantkumar96756@gmail.com");

  alert("Email copied!");
};

const Contact = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold">Contact</h2>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <p className="mb-8 text-slate-400">
          Open to full-stack development opportunities and collaborations.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <button
            onClick={copyEmail}
            className="flex items-center gap-3 rounded-xl border border-slate-700 p-4"
          >
            <Mail size={20} />
            Copy Email
          </button>

          <a
            href="https://github.com/dushyantkumar4"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-700 p-4"
          >
            <i className="fa-brands fa-github text-2xl"></i>
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/dushyantkumar04"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-700 p-4"
          >
            <i className="fa-brands fa-square-linkedin text-2xl"></i>
            LinkedIn
          </a>

          <a
            href="https://drive.google.com/file/d/1_u7oKJii8PRZR1Kz906P6KwIfxrVRKnv/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-700 p-4"
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
