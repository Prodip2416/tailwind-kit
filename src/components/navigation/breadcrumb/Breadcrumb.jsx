import React, { useState } from 'react';

const Breadcrumb = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const examples = [
    {
      name: 'Default Breadcrumb',
      component: (
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            {[
              { name: 'Home', href: '#', current: false },
              { name: 'Components', href: '#', current: false },
              { name: 'Navigation', href: '#', current: false },
              { name: 'Breadcrumb', href: '#', current: true },
            ].map((item, index) => (
              <li key={item.name}>
                <div className="flex items-center">
                  {index !== 0 && (
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                  )}
                  <a
                    href={item.href}
                    className={`ml-4 text-sm font-medium ${
                      item.current
                        ? 'text-gray-500 dark:text-gray-400'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      ),
    },
    {
      name: 'Icon Breadcrumb',
      component: (
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            {[
              { name: 'Home', href: '#', current: false, icon: '🏠' },
              { name: 'Products', href: '#', current: false, icon: '📦' },
              { name: 'Electronics', href: '#', current: false, icon: '📱' },
              { name: 'Smartphones', href: '#', current: true, icon: '📱' },
            ].map((item, index) => (
              <li key={item.name}>
                <div className="flex items-center">
                  {index !== 0 && (
                    <svg
                      className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 mx-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                  )}
                  <a
                    href={item.href}
                    className={`flex items-center text-sm font-medium ${
                      item.current
                        ? 'text-gray-500 dark:text-gray-400'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <span className="mr-1">{item.icon}</span>
                    {item.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      ),
    },
    {
      name: 'Styled Breadcrumb',
      component: (
        <nav
          className="flex bg-gray-50 dark:bg-slate-800 rounded-lg p-4"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-2">
            {[
              { name: 'Dashboard', href: '#', current: false },
              { name: 'Projects', href: '#', current: false },
              { name: 'Project Alpha', href: '#', current: true },
            ].map((item, index) => (
              <li key={item.name}>
                <div className="flex items-center">
                  {index !== 0 && (
                    <svg
                      className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 mx-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                  )}
                  <a
                    href={item.href}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      item.current
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      ),
    },
  ];

  const generateCode = () => {
    const example = examples[activeExample];
    if (example.name === 'Default Breadcrumb') {
      return `import React from 'react';

const Breadcrumb = () => {
  const breadcrumbs = [
    { name: 'Home', href: '#', current: false },
    { name: 'Components', href: '#', current: false },
    { name: 'Navigation', href: '#', current: false },
    { name: 'Breadcrumb', href: '#', current: true },
  ];

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        {breadcrumbs.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {index !== 0 && (
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}
              <a
                href={item.href}
                className={\`ml-4 text-sm font-medium \${
                  item.current
                    ? 'text-gray-500 dark:text-gray-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }\`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;`;
    } else if (example.name === 'Icon Breadcrumb') {
      return `import React from 'react';

const Breadcrumb = () => {
  const breadcrumbs = [
    { name: 'Home', href: '#', current: false, icon: '🏠' },
    { name: 'Products', href: '#', current: false, icon: '📦' },
    { name: 'Electronics', href: '#', current: false, icon: '📱' },
    { name: 'Smartphones', href: '#', current: true, icon: '📱' },
  ];

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {index !== 0 && (
                <svg
                  className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}
              <a
                href={item.href}
                className={\`flex items-center text-sm font-medium \${
                  item.current
                    ? 'text-gray-500 dark:text-gray-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }\`}
                aria-current={item.current ? 'page' : undefined}
              >
                <span className="mr-1">{item.icon}</span>
                {item.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;`;
    } else {
      return `import React from 'react';

const Breadcrumb = () => {
  const breadcrumbs = [
    { name: 'Dashboard', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Alpha', href: '#', current: true },
  ];

  return (
    <nav className="flex bg-gray-50 dark:bg-slate-800 rounded-lg p-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {index !== 0 && (
                <svg
                  className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}
              <a
                href={item.href}
                className={\`px-3 py-1 rounded-md text-sm font-medium transition-colors \${
                  item.current
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white'
                }\`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;`;
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
          <div className="p-4">{examples[activeExample].component}</div>
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

export default Breadcrumb;
