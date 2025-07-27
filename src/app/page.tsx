import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-red-400 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      {/* Theme toggle positioned in top right */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <main className="text-center max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Hello World! 👋
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Welcome to my first Next.js website
          </p>
          
          <div className="space-y-4 text-gray-500 dark:text-gray-400">
            <p className="text-lg">
              🚀 Built with <span className="font-semibold text-blue-600 dark:text-blue-400">Next.js</span>
            </p>
            <p className="text-lg">
              🎨 Styled with <span className="font-semibold text-purple-600 dark:text-purple-400">Tailwind CSS</span>
            </p>
            <p className="text-lg">
              ☁️ Deployed on <span className="font-semibold text-green-600 dark:text-green-400">Vercel</span>
            </p>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              🎉 Congratulations! You have successfully created and deployed your first Next.js application.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
