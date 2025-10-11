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
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          error = `${name === 'firstName' ? 'First' : 'Last'} name is required`;
        } else if (value.trim().length < 2) {
          error = `${
            name === 'firstName' ? 'First' : 'Last'
          } name must be at least 2 characters`;
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
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
        if (
          value &&
          !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''))
        ) {
          error = 'Please enter a valid phone number';
        }
        break;

      case 'website':
        if (value && !/^https?:\/\/.+/.test(value)) {
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

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, fieldValue);
    setErrors((prev) => ({
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
    Object.keys(formData).forEach((key) => {
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

  const InputField = ({
    name,
    label,
    type = 'text',
    placeholder,
    required = false,
    ...props
  }) => (
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
        className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0 ${
          errors[name] && touched[name]
            ? 'border-red-500 dark:border-red-400'
            : 'border-gray-300 dark:border-slate-600'
        }`}
        {...props}
      />
      {errors[name] && touched[name] && (
        <p className="text-sm text-red-600 dark:text-red-400">{errors[name]}</p>
      )}
    </div>
  );

  const TextareaField = ({
    name,
    label,
    placeholder,
    required = false,
    ...props
  }) => (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700 dark:text-blue-200">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0 resize-none ${
          errors[name] && touched[name]
            ? 'border-red-500 dark:border-red-400'
            : 'border-gray-300 dark:border-slate-600'
        }`}
        {...props}
      />
      {errors[name] && touched[name] && (
        <p className="text-sm text-red-600 dark:text-red-400">{errors[name]}</p>
      )}
    </div>
  );

  const CheckboxField = ({ name, label, description, required = false }) => (
    <div className="space-y-1">
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          name={name}
          checked={formData[name]}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`mt-1 w-4 h-4 text-blue-600 bg-white border rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-slate-700 ${
            errors[name] && touched[name]
              ? 'border-red-500 dark:border-red-400'
              : 'border-gray-300 dark:border-slate-600'
          }`}
        />
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 dark:text-blue-200">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          {description && (
            <p className="text-xs text-gray-500 dark:text-blue-300 mt-1">
              {description}
            </p>
          )}
        </div>
      </div>
      {errors[name] && touched[name] && (
        <p className="text-sm text-red-600 dark:text-red-400">{errors[name]}</p>
      )}
    </div>
  );

  const generateCode = () => {
    return `import { useState } from 'react';

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
          error = \`\${
            name === 'firstName' ? 'First' : 'Last'
          } name must be at least 2 characters\`;
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
        if (
          value &&
          !/^[\\+]?[1-9][\\d]{0,15}$/.test(value.replace(/[\\s\\-\\(\\)]/g, ''))
        ) {
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

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, fieldValue);
    setErrors((prev) => ({
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
    Object.keys(formData).forEach((key) => {
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

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
            Validation Form
          </h2>
          <p className="text-gray-600 dark:text-blue-200">
            A comprehensive form with real-time validation and error handling
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields implementation */}
        </form>
      </div>
    </div>
  );
};

export default ValidationForm;`;
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
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
                Validation Form
              </h2>
              <p className="text-gray-600 dark:text-blue-200">
                A comprehensive form with real-time validation and error
                handling
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
              />
              <InputField
                name="age"
                label="Age"
                type="number"
                placeholder="Enter your age"
                min="13"
                max="120"
              />
            </div>

            <InputField
              name="website"
              label="Website"
              type="url"
              placeholder="https://your-website.com"
            />

            <TextareaField
              name="bio"
              label="Bio"
              placeholder="Tell us about yourself..."
              rows={4}
            />

            <div className="space-y-4">
              <CheckboxField
                name="terms"
                label="I agree to the Terms and Conditions"
                description="You must accept our terms to continue"
                required
              />
              <CheckboxField
                name="newsletter"
                label="Subscribe to newsletter"
                description="Get updates about new features and products"
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

export default ValidationForm;
