import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="https://vite.dev"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <img
                src={reactLogo}
                className="h-16 w-16 animate-spin"
                alt="React logo"
              />
            </a>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-blue-100 mb-8">
            TailwindKit - Beautiful UI Components
          </h1>

          <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-slate-700">
            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 mb-6">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Count is {count}
              </button>
              <p className="mt-4 text-gray-600 dark:text-blue-200">
                Explore our collection of{' '}
                <code className="bg-gray-200 dark:bg-slate-600 px-2 py-1 rounded text-sm">
                  beautiful UI components
                </code>{' '}
                built with React and Tailwind CSS
              </p>
            </div>

            <p className="text-sm text-gray-500 dark:text-blue-300">
              Click on the Vite and React logos to learn more
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600 dark:text-blue-200">
                Built with Vite for instant hot module replacement and blazing
                fast builds.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2">
                Beautiful Design
              </h3>
              <p className="text-gray-600 dark:text-blue-200">
                Crafted with Tailwind CSS for beautiful, responsive designs out
                of the box.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-violet-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2">
                Blue Dark Mode
              </h3>
              <p className="text-gray-600 dark:text-blue-200">
                Beautiful blue dark theme with smooth transitions and modern
                aesthetics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
