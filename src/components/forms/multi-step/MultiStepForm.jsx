import { useState } from 'react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    name: '',
    email: '',
    phone: '',

    // Step 2: Company Info
    company: '',
    position: '',
    industry: '',
    companySize: '',

    // Step 3: Project Details
    projectType: '',
    budget: '',
    timeline: '',
    description: '',

    // Step 4: Additional Info
    experience: '',
    requirements: '',
    preferences: '',
  });

  const steps = [
    {
      title: 'Basic Information',
      fields: ['name', 'email', 'phone'],
    },
    {
      title: 'Company Information',
      fields: ['company', 'position', 'industry', 'companySize'],
    },
    {
      title: 'Project Details',
      fields: ['projectType', 'budget', 'timeline', 'description'],
    },
    {
      title: 'Additional Information',
      fields: ['experience', 'requirements', 'preferences'],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Multi-step form submitted:', formData);
    alert('Multi-step form submitted successfully!');
  };

  const isStepComplete = (stepIndex) => {
    return steps[stepIndex].fields.every(
      (field) => formData[field] && formData[field].trim() !== ''
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4">
                Basic Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-blue-200 mb-6">
                Let's start with some basic information about you.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4">
                Company Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-blue-200 mb-6">
                Tell us about your company and role.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                  placeholder="Enter your company name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                  Your Position *
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                  placeholder="Enter your job title"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                    Industry *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                    required
                  >
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="education">Education</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                    Company Size *
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                    required
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4">
                Project Details
              </h3>
              <p className="text-sm text-gray-600 dark:text-blue-200 mb-6">
                Tell us about your project requirements.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                  required
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="e-commerce">E-commerce</option>
                  <option value="api-development">API Development</option>
                  <option value="data-analysis">Data Analysis</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                    Budget Range *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                    required
                  >
                    <option value="">Select budget</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                    Timeline *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
                    required
                  >
                    <option value="">Select timeline</option>
                    <option value="1-month">1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="12+months">12+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                  Project Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm resize-none"
                  placeholder="Describe your project in detail..."
                  required
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4">
                Additional Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-blue-200 mb-6">
                Any additional details that might help us understand your needs.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                  Previous Experience
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm resize-none"
                  placeholder="Tell us about your previous experience with similar projects..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                  Specific Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm resize-none"
                  placeholder="Any specific technical requirements or constraints..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                  Preferences
                </label>
                <textarea
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm resize-none"
                  placeholder="Any preferences for technology stack, design style, etc..."
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const generateCode = () => {
    return `import { useState } from 'react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    name: '',
    email: '',
    phone: '',
    // Step 2: Company Info
    companyName: '',
    industry: '',
    companySize: '',
    // Step 3: Project Details
    projectType: '',
    budget: '',
    timeline: '',
    // Step 4: Additional Info
    message: '',
    newsletter: false,
    terms: false,
  });

  const steps = [
    { id: 'basic', title: 'Basic Information', description: 'Tell us about yourself' },
    { id: 'company', title: 'Company Information', description: 'About your company' },
    { id: 'project', title: 'Project Details', description: 'Describe your project' },
    { id: 'additional', title: 'Additional Information', description: 'Any other details' },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Multi-step form completed successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
            Multi-Step Form
          </h2>
          <p className="text-gray-600 dark:text-blue-200">
            Complete your project request in multiple steps
          </p>
        </div>
        {/* Multi-step form implementation */}
      </div>
    </div>
  );
};

export default MultiStepForm;`;
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
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
                Multi-Step Form
              </h2>
              <p className="text-gray-600 dark:text-blue-200">
                Complete your project request in multiple steps
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowCode(!showCode)}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
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
        </div>

        {!showCode ? (
          <>
            {/* Step Navigation */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <button
                      onClick={() => goToStep(index)}
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                        index === currentStep
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : index < currentStep
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-slate-400'
                      }`}
                    >
                      {index < currentStep ? (
                        <svg
                          className="w-5 h-5"
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
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </button>
                    <div className="ml-3 hidden sm:block">
                      <p
                        className={`text-sm font-medium ${
                          index === currentStep
                            ? 'text-blue-600 dark:text-blue-400'
                            : index < currentStep
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-gray-500 dark:text-slate-400'
                        }`}
                      >
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-slate-400">
                        {isStepComplete(index) ? 'Complete' : 'Incomplete'}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`hidden sm:block w-16 h-0.5 mx-4 ${
                          index < currentStep
                            ? 'bg-green-500'
                            : 'bg-gray-300 dark:bg-slate-600'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Step Content */}
            <form onSubmit={handleSubmit}>
              <div className="mb-8">{renderStepContent()}</div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t border-gray-200 dark:border-slate-600">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentStep === 0
                      ? 'text-gray-400 dark:text-slate-500 cursor-not-allowed'
                      : 'text-gray-700 dark:text-blue-200 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Previous
                </button>

                <div className="flex space-x-3">
                  {currentStep === steps.length - 1 ? (
                    <button
                      type="submit"
                      className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                    >
                      Submit Request
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                    >
                      Next Step
                    </button>
                  )}
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
              <code>{generateCode()}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
