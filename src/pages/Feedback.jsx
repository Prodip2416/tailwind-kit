import { useState } from 'react';
import { feedbackComponentsData } from '../components/feedback/feedbackComponentsData';
import FeedbackElementRenderer from '../components/feedback/FeedbackElementRenderer';
import { generateFeedbackCodeExample } from '../components/feedback/FeedbackCodeGenerator';

const FeedbackCard = ({ component }) => {
  const [codeLanguage, setCodeLanguage] = useState('js');
  const [copied, setCopied] = useState(false);

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

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-1">
            {component.name}
          </h2>
          <p className="text-gray-600 dark:text-blue-200 text-sm">
            {component.description}
          </p>
        </div>
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full flex-shrink-0 ml-4 ${getComplexityColor(
            component.complexity
          )}`}
        >
          {component.complexity}
        </span>
      </div>

      {/* Features */}
      <div className="mb-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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

      {/* Two-panel: Demo (left) + Code (right) */}
      <div className="flex gap-4">
        {/* Left: Live Demo */}
        <div className="w-2/3 min-w-0 flex flex-col">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 p-4 flex flex-col h-full">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-blue-100 mb-3 flex-shrink-0">
              Live Demo
            </h3>
            <div className="flex-1 min-h-0 overflow-visible border border-gray-200 dark:border-slate-600 rounded-lg p-3">
              <FeedbackElementRenderer feedbackType={component.id} />
            </div>
          </div>
        </div>

        {/* Right: Code */}
        <div className="w-1/3 min-w-0 flex flex-col">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 p-4 flex flex-col h-full min-h-[400px]">
            <div className="flex items-center justify-between mb-2 flex-shrink-0">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-blue-100">
                Code Example
              </h3>
              <div className="flex items-center gap-2">
                <div className="inline-flex rounded-md border border-gray-200 dark:border-slate-600 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setCodeLanguage('js')}
                    aria-pressed={codeLanguage === 'js'}
                    className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                      codeLanguage === 'js'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-blue-200 hover:bg-gray-50 dark:hover:bg-slate-700'
                    }`}
                  >
                    JS
                  </button>
                  <button
                    type="button"
                    onClick={() => setCodeLanguage('ts')}
                    aria-pressed={codeLanguage === 'ts'}
                    className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                      codeLanguage === 'ts'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-blue-200 hover:bg-gray-50 dark:hover:bg-slate-700'
                    }`}
                  >
                    TS
                  </button>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      generateFeedbackCodeExample(component, codeLanguage)
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
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-4 3H9m10 0a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2h3" />
                      </svg>
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Display */}
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
                  <code>
                    {generateFeedbackCodeExample(component, codeLanguage)}
                  </code>
                </pre>
              </div>
            </div>

            {/* Usage hint */}
            <div className="mt-3 flex-shrink-0">
              <div className="text-xs text-gray-500 dark:text-blue-300 space-y-0.5">
                <p>• Toggle JS / TS to switch code format</p>
                <p>• Copy the code to use in your project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feedback = ({ feedbackType }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-8">
          {feedbackType
            ? (() => {
                const component = feedbackComponentsData.find(
                  (comp) => comp.id === feedbackType
                );
                if (!component)
                  return <div>Feedback component not found</div>;
                return <FeedbackCard component={component} />;
              })()
            : feedbackComponentsData.map((component) => (
                <FeedbackCard key={component.id} component={component} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
