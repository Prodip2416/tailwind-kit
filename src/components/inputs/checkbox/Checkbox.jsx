import React from 'react';

const Checkbox = ({ 
  id, 
  name, 
  value, 
  label, 
  checked, 
  onChange, 
  disabled = false,
  className = '',
  labelClassName = '',
  indeterminate = false,
  ...props 
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onChange) {
      const newChecked = !checked;
      // Create a proper event-like object
      const syntheticEvent = {
        target: {
          name: name,
          value: value,
          checked: newChecked,
          type: 'checkbox'
        }
      };
      onChange(syntheticEvent);
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        ref={(el) => {
          if (el) el.indeterminate = indeterminate;
        }}
        className="sr-only"
        {...props}
      />
      <div
        onClick={handleClick}
        className={`flex items-center cursor-pointer select-none w-full p-2 rounded-md transition-colors duration-200 ${
          disabled 
            ? 'cursor-not-allowed opacity-50' 
            : 'hover:bg-gray-50 dark:hover:bg-slate-700 active:bg-gray-100 dark:active:bg-slate-600'
        } ${labelClassName}`}
      >
        <div className={`
          w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200 flex-shrink-0
          ${checked || indeterminate
            ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-500' 
            : 'border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-gray-400 dark:hover:border-slate-500'
          }
          ${disabled ? 'border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800' : ''}
        `}>
          {checked && !indeterminate && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
          {indeterminate && !checked && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <span className={`text-sm font-medium flex-1 ${
          checked ? 'text-gray-900 dark:text-blue-100' : 'text-gray-700 dark:text-blue-200'
        } ${disabled ? 'text-gray-400 dark:text-slate-500' : ''}`}>
          {label}
        </span>
      </div>
    </div>
  );
};

// Checkbox Group Component
const CheckboxGroup = ({ 
  name, 
  options, 
  values = [], 
  onChange, 
  disabled = false,
  className = '',
  orientation = 'vertical' // 'vertical' or 'horizontal'
}) => {
  const handleChange = (optionValue, isChecked) => {
    if (isChecked) {
      onChange([...values, optionValue]);
    } else {
      onChange(values.filter(v => v !== optionValue));
    }
  };

  return (
    <div className={`${orientation === 'horizontal' ? 'flex flex-wrap gap-4' : 'space-y-3'} ${className}`}>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          id={`${name}-${option.value}`}
          name={name}
          value={option.value}
          label={option.label}
          checked={values.includes(option.value)}
          onChange={(e) => handleChange(option.value, e.target.checked)}
          disabled={disabled || option.disabled}
        />
      ))}
    </div>
  );
};

export default Checkbox;
export { Checkbox, CheckboxGroup };
