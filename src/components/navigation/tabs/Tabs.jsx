import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeExample, setActiveExample] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const tabs = [
    {
      id: 0,
      name: 'Overview',
      content:
        'This is the overview content. Here you can see a summary of all the important information.',
    },
    {
      id: 1,
      name: 'Details',
      content:
        'This is the details content. Here you can find more specific information about the topic.',
    },
    {
      id: 2,
      name: 'Settings',
      content:
        'This is the settings content. Here you can configure various options and preferences.',
    },
    {
      id: 3,
      name: 'Analytics',
      content:
        'This is the analytics content. Here you can view charts, graphs, and statistical data.',
    },
  ];

  const examples = [
    {
      name: 'Default Tabs',
      component: (
        <div className="w-full">
          <div className="border-b border-gray-200 dark:border-slate-700">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-slate-600'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="mt-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                {tabs[activeTab].name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {tabs[activeTab].content}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'Pill Tabs',
      component: (
        <div className="w-full">
          <div className="flex space-x-1 bg-gray-100 dark:bg-slate-800 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                {tabs[activeTab].name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {tabs[activeTab].content}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'Vertical Tabs',
      component: (
        <div className="w-full flex">
          <div className="w-48 border-r border-gray-200 dark:border-slate-700 pr-4">
            <nav className="space-y-1" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex-1 ml-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                {tabs[activeTab].name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {tabs[activeTab].content}
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const generateCode = () => {
    const example = examples[activeExample];
    if (example.name === 'Default Tabs') {
      return `import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: 'Overview', content: 'This is the overview content.' },
    { id: 1, name: 'Details', content: 'This is the details content.' },
    { id: 2, name: 'Settings', content: 'This is the settings content.' },
    { id: 3, name: 'Analytics', content: 'This is the analytics content.' },
  ];

  return (
    <div className="w-full">
      <div className="border-b border-gray-200 dark:border-slate-700">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={\`py-2 px-1 border-b-2 font-medium text-sm \${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-slate-600'
              }\`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {tabs[activeTab].name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {tabs[activeTab].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;`;
    } else if (example.name === 'Pill Tabs') {
      return `import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: 'Overview', content: 'This is the overview content.' },
    { id: 1, name: 'Details', content: 'This is the details content.' },
    { id: 2, name: 'Settings', content: 'This is the settings content.' },
    { id: 3, name: 'Analytics', content: 'This is the analytics content.' },
  ];

  return (
    <div className="w-full">
      <div className="flex space-x-1 bg-gray-100 dark:bg-slate-800 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`px-4 py-2 text-sm font-medium rounded-md transition-colors \${
              activeTab === tab.id
                ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }\`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {tabs[activeTab].name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {tabs[activeTab].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;`;
    } else {
      return `import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: 'Overview', content: 'This is the overview content.' },
    { id: 1, name: 'Details', content: 'This is the details content.' },
    { id: 2, name: 'Settings', content: 'This is the settings content.' },
    { id: 3, name: 'Analytics', content: 'This is the analytics content.' },
  ];

  return (
    <div className="w-full flex">
      <div className="w-48 border-r border-gray-200 dark:border-slate-700 pr-4">
        <nav className="space-y-1" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={\`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors \${
                activeTab === tab.id
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              }\`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 ml-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {tabs[activeTab].name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {tabs[activeTab].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;`;
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

export default Tabs;
