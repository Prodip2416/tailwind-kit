// Forms Code Generator Component
export const generateFormsCodeExample = (selectedComponent) => {
  if (!selectedComponent) return '';

  const componentId = selectedComponent.id;

  switch (componentId) {
    case 'validation':
      return `// Complete ValidationForm Component - Copy & Paste Ready
import { useState } from 'react';

const ValidationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    website: '',
    age: '',
    bio: '',
    terms: false,
    newsletter: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          error = \`\${name === 'firstName' ? 'First' : 'Last'} name is required\`;
        } else if (value.trim().length < 2) {
          error = \`\${name === 'firstName' ? 'First' : 'Last'} name must be at least 2 characters\`;
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/.test(value)) {
          error = 'Password must contain uppercase, lowercase, and number';
        }
        break;

      case 'confirmPassword':
        if (!value) {
          error = 'Please confirm your password';
        } else if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;

      case 'phone':
        if (value && !/^[\\+]?[1-9][\\d]{0,15}$/.test(value.replace(/[\\s\\-\\(\\)]/g, ''))) {
          error = 'Please enter a valid phone number';
        }
        break;

      case 'website':
        if (value && !/^https?:\\/\\/.+/.test(value)) {
          error = 'Please enter a valid URL (http:// or https://)';
        }
        break;

      case 'age':
        if (value && (isNaN(value) || value < 13 || value > 120)) {
          error = 'Please enter a valid age (13-120)';
        }
        break;

      case 'bio':
        if (value && value.length > 500) {
          error = 'Bio must be less than 500 characters';
        }
        break;

      case 'terms':
        if (!value) {
          error = 'You must accept the terms and conditions';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, fieldValue);
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  const InputField = ({ name, label, type = 'text', placeholder, required = false, ...props }) => (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700 dark:text-blue-200">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={\`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0 \${
          errors[name] && touched[name]
            ? 'border-red-500 dark:border-red-400'
            : 'border-gray-300 dark:border-slate-600'
        }\`}
        {...props}
      />
      {errors[name] && touched[name] && (
        <p className="text-sm text-red-600 dark:text-red-400">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
              required
            />
            <InputField
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
              required
            />
          </div>

          <InputField
            name="email"
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              name="password"
              label="Password"
              type="password"
              placeholder="Create a password"
              required
            />
            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  phone: '',
                  website: '',
                  age: '',
                  bio: '',
                  terms: false,
                  newsletter: false,
                });
                setErrors({});
                setTouched({});
              }}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-200 bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ValidationForm;`;

    case 'wizard':
      return `// Complete Wizard Component - Copy & Paste Ready
import { useState } from 'react';

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Step 2: Address Information
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    
    // Step 3: Preferences
    newsletter: false,
    notifications: true,
    theme: 'light',
    language: 'en',
    
    // Step 4: Review
    terms: false,
  });

  const steps = [
    {
      id: 'personal',
      title: 'Personal Information',
      description: 'Tell us about yourself',
    },
    {
      id: 'address',
      title: 'Address Information',
      description: 'Where should we reach you?',
    },
    {
      id: 'preferences',
      title: 'Preferences',
      description: 'Customize your experience',
    },
    {
      id: 'review',
      title: 'Review & Submit',
      description: 'Review your information',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Wizard form submitted:', formData);
    alert('Wizard form submitted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={\`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors \${
                      index <= currentStep
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-slate-400'
                    }\`}
                  >
                    {index < currentStep ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className={\`text-sm font-medium \${
                      index <= currentStep
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-500 dark:text-slate-400'
                    }\`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={\`hidden sm:block w-16 h-0.5 mx-4 \${
                    index < currentStep ? 'bg-blue-600' : 'bg-gray-300 dark:bg-slate-600'
                  }\`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            {/* Add your step content here */}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-gray-200 dark:border-slate-600">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className={\`px-4 py-2 text-sm font-medium rounded-md transition-colors \${
                currentStep === 0
                  ? 'text-gray-400 dark:text-slate-500 cursor-not-allowed'
                  : 'text-gray-700 dark:text-blue-200 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600'
              }\`}
            >
              Previous
            </button>
            
            <div className="flex space-x-3">
              {currentStep === steps.length - 1 ? (
                <button
                  type="submit"
                  disabled={!formData.terms}
                  className={\`px-6 py-2 text-sm font-medium text-white rounded-md transition-colors \${
                    formData.terms
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }\`}
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Wizard;`;

    case 'search':
      return `// Complete SearchForm Component - Copy & Paste Ready
import { useState } from 'react';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('all');
  const [filters, setFilters] = useState({
    category: '',
    dateRange: '',
    sortBy: 'relevance',
    priceRange: '',
    rating: '',
  });
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      // Add your search logic here
      setSearchResults([]);
      setIsSearching(false);
    }, 1000);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      dateRange: '',
      sortBy: 'relevance',
      priceRange: '',
      rating: '',
    });
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for courses, books, tools..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
              >
                <option value="all">All Types</option>
                <option value="course">Courses</option>
                <option value="book">Books</option>
                <option value="software">Software</option>
                <option value="tutorial">Tutorials</option>
              </select>
              
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-sm font-medium text-gray-700 dark:text-blue-200"
              >
                Filters
              </button>
              
              <button
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors text-sm font-medium"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-blue-100 transition-colors text-sm"
                  >
                    <option value="">All Categories</option>
                    <option value="education">Education</option>
                    <option value="tools">Tools</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                  </select>
                </div>
                {/* Add more filter options here */}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
              Search Results ({searchResults.length})
            </h3>
            {/* Add your search results here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;`;

    case 'filter':
      return `// Complete FilterForm Component - Copy & Paste Ready
import { useState } from 'react';

const FilterForm = () => {
  const [filters, setFilters] = useState({
    category: [],
    priceRange: { min: '', max: '' },
    brand: [],
    rating: '',
    availability: '',
    features: [],
    color: [],
    size: [],
    material: [],
    condition: '',
    sortBy: 'relevance',
  });

  const [filteredItems, setFilteredItems] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      if (Array.isArray(prev[filterType])) {
        return {
          ...prev,
          [filterType]: prev[filterType].includes(value)
            ? prev[filterType].filter(item => item !== value)
            : [...prev[filterType], value],
        };
      } else if (filterType === 'priceRange') {
        return {
          ...prev,
          priceRange: { ...prev.priceRange, ...value },
        };
      } else {
        return {
          ...prev,
          [filterType]: value,
        };
      }
    });
  };

  const applyFilters = () => {
    setIsFiltering(true);
    
    setTimeout(() => {
      // Add your filtering logic here
      setFilteredItems([]);
      setIsFiltering(false);
    }, 500);
  };

  const clearAllFilters = () => {
    setFilters({
      category: [],
      priceRange: { min: '', max: '' },
      brand: [],
      rating: '',
      availability: '',
      features: [],
      color: [],
      size: [],
      material: [],
      condition: '',
      sortBy: 'relevance',
    });
    setFilteredItems([]);
  };

  const CheckboxGroup = ({ title, options, filterType, selectedValues }) => (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-gray-900 dark:text-blue-100">{title}</h4>
      <div className="space-y-2 max-h-32 overflow-y-auto">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedValues.includes(option.value)}
              onChange={() => handleFilterChange(filterType, option.value)}
              className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"
            />
            <span className="text-sm text-gray-700 dark:text-blue-200">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                  Filters
                </h3>
              </div>

              <CheckboxGroup
                title="Category"
                options={[
                  { value: 'electronics', label: 'Electronics' },
                  { value: 'clothing', label: 'Clothing' },
                  { value: 'accessories', label: 'Accessories' },
                ]}
                filterType="category"
                selectedValues={filters.category}
              />

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900 dark:text-blue-100">Price Range</h4>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceRange.min}
                    onChange={(e) => handleFilterChange('priceRange', { min: e.target.value })}
                    className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-blue-100 transition-colors text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceRange.max}
                    onChange={(e) => handleFilterChange('priceRange', { max: e.target.value })}
                    className="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-blue-100 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-slate-600 space-y-2">
                <button
                  onClick={applyFilters}
                  disabled={isFiltering}
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md transition-colors text-sm font-medium"
                >
                  {isFiltering ? 'Applying...' : 'Apply Filters'}
                </button>
                <button
                  onClick={clearAllFilters}
                  className="w-full px-4 py-2 text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 transition-colors text-sm font-medium"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                Results ({filteredItems.length})
              </h3>
            </div>

            {isFiltering ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-2 text-gray-600 dark:text-blue-200">Filtering...</p>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-blue-200">
                  Apply filters to see results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;`;

    default:
      return `// ${selectedComponent.name} Component - Copy & Paste Ready
import { useState } from 'react';

const ${selectedComponent.name.replace(/\s+/g, '')} = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-6">
          ${selectedComponent.name}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Add your form fields here */}
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-200 bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ${selectedComponent.name.replace(/\s+/g, '')};`;
  }
};
