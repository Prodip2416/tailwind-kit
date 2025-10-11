import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { notificationComponents } from '../components/notifications/notificationComponentsData';
import NotificationsElementRenderer from '../components/notifications/NotificationsElementRenderer';
import { generateCodeExample } from '../components/notifications/NotificationsCodeGenerator';

const Notifications = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  const [formData, setFormData] = useState({
    alert: { type: 'info', title: '', message: '' },
    toast: { type: 'info', title: '', message: '' },
    modal: { title: '', content: '' },
    popover: { title: '', content: '' },
    tooltip: { content: '', placement: 'top' },
  });

  // Handle URL hash changes
  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      const component = notificationComponents.find((comp) => comp.id === hash);
      if (component) {
        setSelectedComponent(component);
      }
    } else {
      setSelectedComponent(notificationComponents[0]);
    }
  }, [location.hash]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-3 h-full">
        <div className="flex gap-4 h-full">
          {/* Component View - Left Side */}
          <div className="w-2/5 min-w-0 flex flex-col">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 p-4 flex flex-col h-full">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-3">
                {selectedComponent
                  ? selectedComponent.name
                  : 'Select a Component'}
              </h2>
              {selectedComponent ? (
                <div className="space-y-3 flex-1 min-h-0">
                  <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600">
                    <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                      Preview
                    </label>
                    <NotificationsElementRenderer
                      componentId={selectedComponent.id}
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600">
                    <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                      Current Value
                    </label>
                    <div className="relative">
                      <pre className="text-xs text-gray-800 dark:text-gray-200 font-mono bg-gray-900 dark:bg-slate-900 p-2 rounded-lg border border-gray-700 dark:border-slate-600 overflow-x-auto">
                        <code className="text-green-400 dark:text-green-300">
                          {JSON.stringify(
                            formData[selectedComponent.id],
                            null,
                            2
                          )}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 flex-1 flex items-center justify-center">
                  <div>
                    <div className="w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-gray-400 dark:text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-blue-100 mb-2">
                      No Component Selected
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-blue-200">
                      Choose a component from the sidebar to see its preview and
                      details.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Code View - Right Side */}
          <div className="w-3/5 min-w-0 flex flex-col">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 p-4 flex flex-col h-full min-h-[300px]">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-3 flex-shrink-0">
                Code Example
              </h2>
              {selectedComponent ? (
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
                      <p>
                        • Copy the code example above to use in your project
                      </p>
                      <p>
                        • All components are fully responsive and support dark
                        mode
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 flex-1 flex items-center justify-center">
                  <div>
                    <div className="w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-gray-400 dark:text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-blue-100 mb-2">
                      No Code to Display
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-blue-200">
                      Select a component to see its code example and usage
                      instructions.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
