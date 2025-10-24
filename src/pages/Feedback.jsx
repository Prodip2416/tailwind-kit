import React from 'react';
import FeedbackElementRenderer from '../components/feedback/FeedbackElementRenderer';
import { feedbackComponentsData } from '../components/feedback/feedbackComponentsData';

const Feedback = ({ feedbackType }) => {
  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  if (feedbackType) {
    const component = feedbackComponentsData.find(comp => comp.id === feedbackType);
    if (!component) return <div>Feedback component not found</div>;

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
                    {component.name}
                  </h2>
                  <p className="text-gray-600 dark:text-blue-200">
                    {component.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${getComplexityColor(
                      component.complexity
                    )}`}
                  >
                    {component.complexity}
                  </span>
                </div>
              </div>

              {/* Component Features */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-blue-100 mb-3">
                  Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {component.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-blue-200"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 flex-shrink-0"
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
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Component Demo */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-blue-100 mb-3">
                  Live Demo
                </h3>
                <div className="border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden">
                  <div className="p-4">
                    <FeedbackElementRenderer feedbackType={feedbackType} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show overview when no specific component is selected
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
                  Feedback Components
                </h2>
                <p className="text-gray-600 dark:text-blue-200">
                  Interactive components for user feedback, notifications, and alerts
                </p>
              </div>
            </div>

            {/* Component Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {feedbackComponentsData.map((component) => (
                <div
                  key={component.id}
                  className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">{component.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                        {component.name}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getComplexityColor(
                          component.complexity
                        )}`}
                      >
                        {component.complexity}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-blue-200 mb-3">
                    {component.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {component.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                    {component.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                        +{component.features.length - 3} more
                      </span>
                    )}
                  </div>
                  <a
                    href={component.href}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    View Component
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
