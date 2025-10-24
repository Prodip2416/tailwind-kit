import React, { useState } from 'react';

const Tooltip = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const examples = [
    {
      name: 'Default Tooltip',
      component: (
        <div className="space-y-8">
          <div className="flex justify-center space-x-8">
            <div className="relative group inline-block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Hover me
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[60]">
                This is a tooltip
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>

            <div className="relative group inline-block">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                Top tooltip
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-green-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-[60]">
                Tooltip on top
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-green-600"></div>
              </div>
            </div>

            <div className="relative group inline-block">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                Right tooltip
              </button>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-red-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-[60]">
                Tooltip on right
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-red-600"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'Interactive Tooltip',
      component: (
        <div className="space-y-8">
          <div className="flex justify-center space-x-8">
            <div className="relative group inline-block">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Interactive
              </button>
              {isHovered && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-purple-600 text-white text-sm rounded-lg opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-[60]">
                  Click to interact
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-purple-600"></div>
                </div>
              )}
            </div>

            <div className="relative group inline-block">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                With Icon
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap flex items-center z-[60]">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Information
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-indigo-600"></div>
              </div>
            </div>

            <div className="relative group inline-block">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors">
                Long text
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-yellow-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none max-w-xs text-center z-[60]">
                This is a longer tooltip message that demonstrates how tooltips
                handle multiple lines of text
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-yellow-600"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'Custom Tooltip',
      component: (
        <div className="space-y-8">
          <div className="flex justify-center space-x-8">
            <div className="relative group inline-block">
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                Custom Style
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-gray-800 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl z-[60]">
                <div className="font-semibold">Custom Tooltip</div>
                <div className="text-xs opacity-75">With custom styling</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>

            <div className="relative group inline-block">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors">
                Animated
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap group-hover:scale-105 z-[60]">
                Smooth animation
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-pink-600"></div>
              </div>
            </div>

            <div className="relative group inline-block">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
                Multi-line
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none max-w-xs text-center z-[60]">
                <div className="font-semibold">Multi-line Tooltip</div>
                <div className="text-xs mt-1">
                  This tooltip can handle multiple lines of text and different
                  formatting
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-teal-600"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const generateCode = () => {
    const example = examples[activeExample];
    if (example.name === 'Default Tooltip') {
      return `import React from 'react';

const Tooltip = () => {
  return (
    <div className="flex justify-center space-x-8">
      {/* Top Tooltip */}
      <div className="relative group">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          Hover me
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          This is a tooltip
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
        </div>
      </div>

      {/* Right Tooltip */}
      <div className="relative group">
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
          Right tooltip
        </button>
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-red-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Tooltip on right
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;`;
    } else if (example.name === 'Interactive Tooltip') {
      return `import React, { useState } from 'react';

const Tooltip = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center space-x-8">
      {/* Interactive Tooltip */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Interactive
        </button>
        {isHovered && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-purple-600 text-white text-sm rounded-lg opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Click to interact
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-purple-600"></div>
          </div>
        )}
      </div>

      {/* Tooltip with Icon */}
      <div className="relative group">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
          With Icon
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Information
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-indigo-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;`;
    } else {
      return `import React from 'react';

const Tooltip = () => {
  return (
    <div className="flex justify-center space-x-8">
      {/* Custom Styled Tooltip */}
      <div className="relative group">
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
          Custom Style
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
          <div className="font-semibold">Custom Tooltip</div>
          <div className="text-xs opacity-75">With custom styling</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800 dark:border-t-gray-200"></div>
        </div>
      </div>

      {/* Animated Tooltip */}
      <div className="relative group">
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors">
          Animated
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap group-hover:scale-105">
          Smooth animation
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-pink-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;`;
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

export default Tooltip;
