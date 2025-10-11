import { useState } from 'react';
import ValidationForm from './validation/ValidationForm';
import Wizard from './wizards/Wizard';
import MultiStepForm from './multi-step/MultiStepForm';
import SearchForm from './search/SearchForm';
import FilterForm from './filters/FilterForm';

const FormsElementRenderer = ({ componentId, formData, handleFormChange }) => {
  const [activeForm, setActiveForm] = useState(componentId || 'validation');

  const renderFormComponent = () => {
    switch (componentId) {
      case 'validation':
        return <ValidationForm />;

      case 'wizard':
        return <Wizard />;

      case 'multistep':
        return <MultiStepForm />;

      case 'search':
        return <SearchForm />;

      case 'filter':
        return <FilterForm />;

      default:
        return <ValidationForm />;
    }
  };

  const getFormPreview = (formType) => {
    switch (formType) {
      case 'validation':
        return (
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-600 p-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-600 dark:text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                  Validation Form
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                    Password *
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                    placeholder="Create a password"
                  />
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm font-medium">
                  Submit Form
                </button>
              </div>
            </div>
          </div>
        );

      case 'wizard':
        return (
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-600 p-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-purple-600 dark:text-purple-300"
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                  Wizard Form
                </h3>
              </div>
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        step === 1
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-slate-400'
                      }`}
                    >
                      {step}
                    </div>
                    {step < 4 && (
                      <div className="w-8 h-0.5 bg-gray-300 dark:bg-slate-600 mx-2" />
                    )}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex justify-between">
                  <button className="px-4 py-2 text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 transition-colors text-sm">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'multistep':
        return (
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-600 p-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-600 dark:text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                  Multi-Step Form
                </h3>
              </div>
              <div className="flex items-center justify-between mb-4">
                {['Basic Info', 'Company', 'Project', 'Review'].map(
                  (step, index) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                          index === 0
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-slate-400'
                        }`}
                      >
                        {index === 0 ? (
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          index + 1
                        )}
                      </div>
                      {index < 3 && (
                        <div className="w-8 h-0.5 bg-gray-300 dark:bg-slate-600 mx-2" />
                      )}
                    </div>
                  )
                )}
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                    placeholder="Enter project name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                    placeholder="Enter company name"
                  />
                </div>
                <div className="flex justify-between">
                  <button className="px-4 py-2 text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 transition-colors text-sm">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm">
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'search':
        return (
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-600 p-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-orange-600 dark:text-orange-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                  Search Form
                </h3>
              </div>
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                    placeholder="Search for courses, books, tools..."
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex gap-2">
                  <select className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm">
                    <option>All Types</option>
                    <option>Courses</option>
                    <option>Books</option>
                    <option>Software</option>
                  </select>
                  <button className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-sm">
                    Filters
                  </button>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm">
                    Search
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 rounded-md p-3">
                  <div className="text-sm text-gray-600 dark:text-blue-200">
                    <strong>React Development Course</strong> - Learn React from
                    basics to advanced concepts
                  </div>
                  <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                    Education • $99 • 4.8 stars
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'filter':
        return (
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-600 p-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-indigo-600 dark:text-indigo-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                  Filter Form
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
                    Category
                  </h4>
                  <div className="space-y-1">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-sm text-gray-700 dark:text-blue-200">
                        Electronics
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-sm text-gray-700 dark:text-blue-200">
                        Clothing
                      </span>
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
                    Price Range
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="px-2 py-1 border border-gray-300 dark:border-slate-600 rounded text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="px-2 py-1 border border-gray-300 dark:border-slate-600 rounded text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="px-3 py-1 text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 transition-colors text-sm">
                  Clear All
                </button>
                <button className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Form component not found</div>;
    }
  };

  if (formData && formData.preview) {
    return getFormPreview(componentId);
  }

  return <div className="w-full">{renderFormComponent()}</div>;
};

export default FormsElementRenderer;
