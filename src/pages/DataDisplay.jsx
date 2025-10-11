import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  dataDisplayComponents,
  DataDisplayElementRenderer,
  generateCodeExample,
} from '../components/data-display';

const DataDisplay = () => {
  const location = useLocation();
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [formData, setFormData] = useState({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const hash = location.hash.substring(1);
    const component = dataDisplayComponents.find((comp) => comp.id === hash);
    if (component) {
      setSelectedComponent(component);
    } else if (dataDisplayComponents.length > 0) {
      setSelectedComponent(dataDisplayComponents[0]);
    }
  }, [location.hash]);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (!selectedComponent) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
        Select a data display component from the sidebar.
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
      <div className="flex flex-col lg:flex-row gap-4 h-full">
        {/* Component Preview Section */}
        <div className="flex-1 lg:w-2/5 bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col justify-between min-h-[300px]">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-blue-100 mb-4">
              {selectedComponent.name}
            </h2>
            <p className="text-gray-600 dark:text-blue-200 mb-6">
              {selectedComponent.description}
            </p>
            <div className="space-y-4">
              <DataDisplayElementRenderer
                componentId={selectedComponent.id}
                formData={formData}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Code View - Right Side */}
        <div className="w-3/5 min-w-0 flex flex-col">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 p-4 flex flex-col h-full min-h-[300px]">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-3 flex-shrink-0">
              Code Example
            </h2>
            <div className="flex flex-col space-y-3 flex-1 min-h-0">
              <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 flex flex-col h-[300px]">
                <div className="flex items-center justify-between mb-2 flex-shrink-0">
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200">
                    Component Code
                  </label>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        generateCodeExample(selectedComponent)
                      );
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className={`flex items-center space-x-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      copied
                        ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                        : 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30'
                    }`}
                  >
                    {copied ? (
                      <>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-4 3H9m10 0a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2h3"
                          />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="relative flex-1 min-h-0 bg-gray-900 dark:bg-slate-900 rounded-lg border border-gray-700 dark:border-slate-600 overflow-hidden">
                  <div className="absolute top-2 right-2 z-10">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="h-full overflow-auto p-3">
                    <pre className="text-xs text-gray-100 dark:text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">
                      <code>{generateCodeExample(selectedComponent)}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 flex-shrink-0">
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                  Usage Instructions
                </label>
                <div className="text-sm text-gray-600 dark:text-blue-300 space-y-1">
                  <p>• Click and interact with the component on the left</p>
                  <p>• Copy the code above to use in your project</p>
                  <p>• All components are copy-paste ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDisplay;
