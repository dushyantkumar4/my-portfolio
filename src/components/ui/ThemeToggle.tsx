import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../context/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="fixed right-5 top-5 z-30 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur transition-all hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
