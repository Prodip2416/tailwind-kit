import React from 'react';

const RadioButton = ({ 
  id, 
  name, 
  value, 
  label, 
  checked, 
  onChange, 
  disabled = false,
  className = '',
  labelClassName = '',
  ...props 
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onChange) {
      onChange({ target: { value, name } });
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
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
          w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-200 flex-shrink-0
          ${checked 
            ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-500' 
            : 'border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-gray-400 dark:hover:border-slate-500'
          }
          ${disabled ? 'border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800' : ''}
        `}>
          {checked && (
            <div className="w-2 h-2 rounded-full bg-white"></div>
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

// Radio Group Component
const RadioGroup = ({ 
  name, 
  options, 
  value, 
  onChange, 
  disabled = false,
  className = '',
  orientation = 'vertical' // 'vertical' or 'horizontal'
}) => {
  return (
    <div className={`${orientation === 'horizontal' ? 'flex flex-wrap gap-4' : 'space-y-3'} ${className}`}>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          id={`${name}-${option.value}`}
          name={name}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={onChange}
          disabled={disabled || option.disabled}
        />
      ))}
    </div>
  );
};

export default RadioButton;
export { RadioButton, RadioGroup };
