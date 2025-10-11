import React, { useState } from 'react';

const Sidebar = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const examples = [
    {
      name: 'Default Sidebar',
      component: (
        <div className="flex h-screen bg-gray-100 dark:bg-slate-900">
          <div className="w-64 bg-white dark:bg-slate-800 shadow-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TK</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                  TailwindKit
                </span>
              </div>
            </div>
            <nav className="mt-6">
              <div className="px-3 space-y-1">
                <a
                  href="#"
                  className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg
                    className="text-blue-500 dark:text-blue-400 mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"
                    />
                  </svg>
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg
                    className="text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                  Team
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg
                    className="text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Projects
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg
                    className="text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Calendar
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg
                    className="text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Documents
                </a>
              </div>
            </nav>
          </div>
          <div className="flex-1 p-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Main Content
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              This is the main content area.
            </p>
          </div>
        </div>
      ),
    },
    {
      name: 'Collapsible Sidebar',
      component: (
        <div className="flex h-screen bg-gray-100 dark:bg-slate-900">
          <div className="w-16 bg-white dark:bg-slate-800 shadow-lg transition-all duration-300 hover:w-64 group">
            <div className="p-4">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TK</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  TailwindKit
                </span>
              </div>
            </div>
            <nav className="mt-6">
              <div className="px-3 space-y-1">
                <a
                  href="#"
                  className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                    />
                  </svg>
                  <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Dashboard
                  </span>
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                  <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Team
                  </span>
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Projects
                  </span>
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Calendar
                  </span>
                </a>
              </div>
            </nav>
          </div>
          <div className="flex-1 p-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Main Content
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              This is the main content area.
            </p>
          </div>
        </div>
      ),
    },
    {
      name: 'Minimal Sidebar',
      component: (
        <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
          <div className="w-48 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700">
            <div className="p-4 border-b border-gray-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Menu
              </h2>
            </div>
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900 rounded-md"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md"
                  >
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md"
                  >
                    Reports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex-1 p-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Main Content
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              This is the main content area.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const generateCode = () => {
    const example = examples[activeExample];
    if (example.name === 'Default Sidebar') {
      return `import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-slate-900">
      <div className="w-64 bg-white dark:bg-slate-800 shadow-lg">
        <div className="p-6">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TK</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              TailwindKit
            </span>
          </div>
        </div>
        <nav className="mt-6">
          <div className="px-3 space-y-1">
            <a href="#" className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
              <svg className="text-blue-500 dark:text-blue-400 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              </svg>
              Dashboard
            </a>
            {/* More navigation items */}
          </div>
        </nav>
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Main Content</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">This is the main content area.</p>
      </div>
    </div>
  );
};

export default Sidebar;`;
    } else if (example.name === 'Collapsible Sidebar') {
      return `import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-slate-900">
      <div className="w-16 bg-white dark:bg-slate-800 shadow-lg transition-all duration-300 hover:w-64 group">
        <div className="p-4">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TK</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              TailwindKit
            </span>
          </div>
        </div>
        <nav className="mt-6">
          <div className="px-3 space-y-1">
            <a href="#" className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              </svg>
              <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Dashboard</span>
            </a>
            {/* More navigation items */}
          </div>
        </nav>
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Main Content</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">This is the main content area.</p>
      </div>
    </div>
  );
};

export default Sidebar;`;
    } else {
      return `import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
      <div className="w-48 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700">
        <div className="p-4 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900 rounded-md">
                Dashboard
              </a>
            </li>
            {/* More navigation items */}
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Main Content</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">This is the main content area.</p>
      </div>
    </div>
  );
};

export default Sidebar;`;
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Example Selector */}
      <div className="flex space-x-2 mb-4">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => setActiveExample(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeExample === index
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {example.name}
          </button>
        ))}
      </div>

      {/* Code Toggle */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {examples[activeExample].name}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowCode(!showCode)}
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
          <button
            onClick={copyToClipboard}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              copied
                ? 'text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900'
                : 'text-white bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
      </div>

      {/* Active Example */}
      <div className="border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden">
        {!showCode ? (
          examples[activeExample].component
        ) : (
          <div className="bg-gray-900 text-gray-100 p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>{generateCode()}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
