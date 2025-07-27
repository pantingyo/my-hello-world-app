"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center justify-center w-10 h-10 rounded-md transition-all duration-200 ${
          theme === "light"
            ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        title="Light mode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="m12 2 0 2" />
          <path d="m12 20 0 2" />
          <path d="m12 2 0 2" />
          <path d="m12 20 0 2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="m2 12 2 0" />
          <path d="m20 12 2 0" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center justify-center w-10 h-10 rounded-md transition-all duration-200 ${
          theme === "dark"
            ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        title="Dark mode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`flex items-center justify-center w-10 h-10 rounded-md transition-all duration-200 ${
          theme === "system"
            ? "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        title="System mode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="14" height="8" x="5" y="2" rx="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" />
          <path d="M6 18h2" />
          <path d="M12 18h6" />
        </svg>
      </button>
    </div>
  );
} 