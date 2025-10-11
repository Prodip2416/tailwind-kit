// Forms Components Data
export const formsComponentsData = [
  {
    id: 'validation',
    name: 'Validation Form',
    description:
      'A comprehensive form with real-time validation and error handling',
    category: 'forms',
    type: 'validation',
    features: [
      'Real-time validation',
      'Error handling',
      'Form validation rules',
      'Input validation',
      'Custom error messages',
    ],
    tags: ['validation', 'form', 'error-handling', 'input-validation'],
    code: 'ValidationForm',
    preview: 'validation-form-preview',
    complexity: 'intermediate',
    lastUpdated: '2024-01-20',
  },
  {
    id: 'wizard',
    name: 'Wizard Form',
    description: 'Multi-step form with guided navigation and progress tracking',
    category: 'forms',
    type: 'wizard',
    features: [
      'Multi-step navigation',
      'Progress tracking',
      'Step validation',
      'Guided flow',
      'Step indicators',
    ],
    tags: ['wizard', 'multi-step', 'navigation', 'progress', 'guided'],
    code: 'Wizard',
    preview: 'wizard-form-preview',
    complexity: 'advanced',
    lastUpdated: '2024-01-20',
  },
  {
    id: 'multistep',
    name: 'Multi-Step Form',
    description:
      'Step-by-step form with flexible navigation and completion tracking',
    category: 'forms',
    type: 'multistep',
    features: [
      'Flexible step navigation',
      'Step completion tracking',
      'Form data persistence',
      'Step validation',
      'Progress indicators',
    ],
    tags: ['multi-step', 'form', 'navigation', 'progress', 'flexible'],
    code: 'MultiStepForm',
    preview: 'multistep-form-preview',
    complexity: 'advanced',
    lastUpdated: '2024-01-20',
  },
  {
    id: 'search',
    name: 'Search Form',
    description: 'Advanced search form with filters and real-time results',
    category: 'forms',
    type: 'search',
    features: [
      'Advanced search',
      'Filter options',
      'Real-time results',
      'Sort functionality',
      'Search suggestions',
    ],
    tags: ['search', 'filter', 'real-time', 'advanced', 'results'],
    code: 'SearchForm',
    preview: 'search-form-preview',
    complexity: 'intermediate',
    lastUpdated: '2024-01-20',
  },
  {
    id: 'filter',
    name: 'Filter Form',
    description:
      'Comprehensive filtering form with multiple criteria and live results',
    category: 'forms',
    type: 'filter',
    features: [
      'Multiple filter criteria',
      'Live filtering',
      'Filter combinations',
      'Clear filters',
      'Filter persistence',
    ],
    tags: ['filter', 'criteria', 'live', 'multiple', 'comprehensive'],
    code: 'FilterForm',
    preview: 'filter-form-preview',
    complexity: 'intermediate',
    lastUpdated: '2024-01-20',
  },
];

// Form component categories
export const formCategories = [
  {
    id: 'validation',
    name: 'Validation',
    description: 'Forms with validation and error handling',
    icon: 'check-circle',
    count: 1,
  },
  {
    id: 'wizard',
    name: 'Wizard',
    description: 'Multi-step guided forms',
    icon: 'steps',
    count: 2,
  },
  {
    id: 'search',
    name: 'Search & Filter',
    description: 'Search and filtering forms',
    icon: 'search',
    count: 2,
  },
];

// Form component features
export const formFeatures = [
  'Real-time validation',
  'Error handling',
  'Multi-step navigation',
  'Progress tracking',
  'Filter options',
  'Search functionality',
  'Form persistence',
  'Custom validation rules',
  'Responsive design',
  'Dark mode support',
  'Accessibility',
  'Keyboard navigation',
];

// Form component complexity levels
export const complexityLevels = [
  {
    level: 'beginner',
    name: 'Beginner',
    description: 'Simple forms with basic functionality',
    color: 'green',
  },
  {
    level: 'intermediate',
    name: 'Intermediate',
    description: 'Forms with validation and advanced features',
    color: 'yellow',
  },
  {
    level: 'advanced',
    name: 'Advanced',
    description: 'Complex forms with multiple steps and interactions',
    color: 'red',
  },
];

// Form component tags
export const formTags = [
  'validation',
  'form',
  'error-handling',
  'input-validation',
  'wizard',
  'multi-step',
  'navigation',
  'progress',
  'guided',
  'search',
  'filter',
  'real-time',
  'advanced',
  'results',
  'criteria',
  'live',
  'multiple',
  'comprehensive',
];

// Form component examples
export const formExamples = {
  validation: {
    title: 'Validation Form Example',
    description: 'A complete form with real-time validation',
    fields: [
      {
        name: 'firstName',
        type: 'text',
        required: true,
        validation: 'minLength:2',
      },
      {
        name: 'lastName',
        type: 'text',
        required: true,
        validation: 'minLength:2',
      },
      { name: 'email', type: 'email', required: true, validation: 'email' },
      {
        name: 'password',
        type: 'password',
        required: true,
        validation: 'minLength:8',
      },
      {
        name: 'confirmPassword',
        type: 'password',
        required: true,
        validation: 'match:password',
      },
    ],
  },
  wizard: {
    title: 'Wizard Form Example',
    description: 'A multi-step form with guided navigation',
    steps: [
      { title: 'Personal Information', fields: ['name', 'email', 'phone'] },
      {
        title: 'Address Information',
        fields: ['street', 'city', 'state', 'zip'],
      },
      {
        title: 'Preferences',
        fields: ['newsletter', 'notifications', 'theme'],
      },
      { title: 'Review & Submit', fields: ['terms', 'review'] },
    ],
  },
  search: {
    title: 'Search Form Example',
    description: 'An advanced search form with filters',
    features: [
      'Search input with suggestions',
      'Type filtering (courses, books, etc.)',
      'Category filtering',
      'Price range filtering',
      'Rating filtering',
      'Sort options',
    ],
  },
  filter: {
    title: 'Filter Form Example',
    description: 'A comprehensive filtering form',
    filters: [
      'Category selection',
      'Brand filtering',
      'Price range',
      'Rating filtering',
      'Feature filtering',
      'Color selection',
      'Size filtering',
      'Material filtering',
    ],
  },
};

// Form component usage statistics
export const formUsageStats = {
  totalComponents: 5,
  totalCategories: 3,
  totalFeatures: 12,
  mostPopular: 'validation',
  mostComplex: 'wizard',
  recentlyAdded: ['search', 'filter'],
  upcoming: ['contact-form', 'survey-form', 'payment-form'],
};

// Form component documentation
export const formDocumentation = {
  gettingStarted: {
    title: 'Getting Started with Forms',
    description: 'Learn how to implement and customize form components',
    steps: [
      'Choose the right form component for your needs',
      'Import the component into your project',
      'Customize the styling and behavior',
      'Add validation rules and error handling',
      'Test the form functionality',
    ],
  },
  customization: {
    title: 'Customizing Forms',
    description: 'How to customize form components to match your design',
    options: [
      'Color schemes and themes',
      'Layout and spacing',
      'Validation messages',
      'Error styling',
      'Button styles',
      'Input styling',
    ],
  },
  validation: {
    title: 'Form Validation',
    description: 'Implementing validation in your forms',
    types: [
      'Client-side validation',
      'Server-side validation',
      'Real-time validation',
      'Custom validation rules',
      'Error message customization',
    ],
  },
  accessibility: {
    title: 'Accessibility',
    description: 'Making forms accessible to all users',
    features: [
      'Keyboard navigation',
      'Screen reader support',
      'ARIA labels',
      'Focus management',
      'Error announcements',
    ],
  },
};
