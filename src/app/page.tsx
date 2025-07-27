import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-red-400 dark:from-slate-900 dark:to-indigo-900 flex items-center justify-center p-4">
      {/* Theme toggle positioned in top right */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <main className="text-center max-w-2xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 dark:shadow-2xl dark:shadow-slate-900/50">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-slate-100 mb-6">
            Hello World! 👋
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-200 mb-8">
            Welcome to my first Next.js website
          </p>
          
          <div className="space-y-4 text-gray-500 dark:text-slate-300">
            <p className="text-lg">
              🚀 Built with <span className="font-semibold text-blue-600 dark:text-blue-300">Next.js</span>
            </p>
            <p className="text-lg">
              🎨 Styled with <span className="font-semibold text-purple-600 dark:text-purple-300">Tailwind CSS</span>
            </p>
            <p className="text-lg">
              ☁️ Deployed on <span className="font-semibold text-green-600 dark:text-green-300">Vercel</span>
            </p>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600">
            <p className="text-sm text-gray-600 dark:text-slate-200">
              🎉 Congratulations! You have successfully created and deployed your first Next.js application.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
