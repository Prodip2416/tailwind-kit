import React, { useState } from 'react';

const Grid = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const examples = [
    {
      name: 'Default Grid',
      component: (
        <div className="p-6 bg-gray-50 dark:bg-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Card 1
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                This is a sample card with some content.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Card 2
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Another card with different content.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Card 3
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Third card in the grid layout.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Card 4
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fourth card with more content.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Card 5
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fifth card in the grid.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Card 6
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Last card in the grid layout.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'Masonry Grid',
      component: (
        <div className="p-6 bg-gray-50 dark:bg-slate-900">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Short Card
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                This is a short card.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Medium Card
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                This is a medium length card with more content to demonstrate
                the masonry layout effect.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Long Card
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                This is a longer card with much more content to show how the
                masonry layout distributes items of different heights across
                columns. It demonstrates the Pinterest-style layout where items
                are placed in the shortest available column.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Another Short
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Short content.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Very Long Card
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                This is a very long card with extensive content to really
                demonstrate the masonry layout. It shows how different sized
                content blocks can be arranged in a visually appealing way
                without leaving large gaps. The masonry layout is perfect for
                displaying content of varying heights in an organized manner.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Final Card
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Last card in the masonry grid.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: 'Responsive Grid',
      component: (
        <div className="p-6 bg-gray-50 dark:bg-slate-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold">1</div>
              <div className="text-sm">Mobile</div>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold">2</div>
              <div className="text-sm">Small</div>
            </div>
            <div className="bg-purple-500 text-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm">Medium</div>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold">4</div>
              <div className="text-sm">Large</div>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm">XL</div>
            </div>
            <div className="bg-pink-500 text-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold">6</div>
              <div className="text-sm">2XL</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Resize the window to see the responsive behavior
            </p>
          </div>
        </div>
      ),
    },
  ];

  const generateCode = () => {
    const example = examples[activeExample];
    if (example.name === 'Default Grid') {
      return `import React from 'react';

const Grid = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card 1</h3>
          <p className="text-gray-600 dark:text-gray-400">This is a sample card with some content.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card 2</h3>
          <p className="text-gray-600 dark:text-gray-400">Another card with different content.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card 3</h3>
          <p className="text-gray-600 dark:text-gray-400">Third card in the grid layout.</p>
        </div>
        {/* More cards */}
      </div>
    </div>
  );
};

export default Grid;`;
    } else if (example.name === 'Masonry Grid') {
      return `import React from 'react';

const Grid = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-900">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Short Card</h3>
          <p className="text-gray-600 dark:text-gray-400">This is a short card.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Medium Card</h3>
          <p className="text-gray-600 dark:text-gray-400">This is a medium length card with more content.</p>
        </div>
        {/* More cards with varying heights */}
      </div>
    </div>
  );
};

export default Grid;`;
    } else {
      return `import React from 'react';

const Grid = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
          <div className="text-2xl font-bold">1</div>
          <div className="text-sm">Mobile</div>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          <div className="text-2xl font-bold">2</div>
          <div className="text-sm">Small</div>
        </div>
        {/* More responsive items */}
      </div>
    </div>
  );
};

export default Grid;`;
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

export default Grid;
