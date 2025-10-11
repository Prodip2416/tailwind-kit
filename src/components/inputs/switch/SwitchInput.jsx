import { useState } from 'react';

const SwitchInput = ({
  value,
  onChange,
  name,
  size = 'md',
  color = 'blue',
  disabled = false,
  label = '',
  description = '',
}) => {
  const [isOn, setIsOn] = useState(value || false);

  const handleToggle = () => {
    if (disabled) return;

    const newValue = !isOn;
    setIsOn(newValue);
    onChange({ target: { name, value: newValue, type: 'checkbox' } });
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          container: 'w-8 h-4',
          thumb: 'w-3 h-3',
          translate: 'translate-x-4',
        };
      case 'lg':
        return {
          container: 'w-14 h-7',
          thumb: 'w-6 h-6',
          translate: 'translate-x-7',
        };
      default:
        return {
          container: 'w-11 h-6',
          thumb: 'w-5 h-5',
          translate: 'translate-x-5',
        };
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'green':
        return {
          on: 'bg-green-500 dark:bg-green-600',
          off: 'bg-gray-200 dark:bg-gray-700',
        };
      case 'red':
        return {
          on: 'bg-red-500 dark:bg-red-600',
          off: 'bg-gray-200 dark:bg-gray-700',
        };
      case 'purple':
        return {
          on: 'bg-purple-500 dark:bg-purple-600',
          off: 'bg-gray-200 dark:bg-gray-700',
        };
      case 'yellow':
        return {
          on: 'bg-yellow-500 dark:bg-yellow-600',
          off: 'bg-gray-200 dark:bg-gray-700',
        };
      default:
        return {
          on: 'bg-blue-500 dark:bg-blue-600',
          off: 'bg-gray-200 dark:bg-gray-700',
        };
    }
  };

  const sizeClasses = getSizeClasses();
  const colorClasses = getColorClasses();

  return (
    <div className="flex items-center space-x-3">
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={`
          ${sizeClasses.container}
          ${isOn ? colorClasses.on : colorClasses.off}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800
        `}
        role="switch"
        aria-checked={isOn}
        aria-disabled={disabled}
      >
        <span
          className={`
            ${sizeClasses.thumb}
            ${isOn ? sizeClasses.translate : 'translate-x-0.5'}
            pointer-events-none inline-block transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out
          `}
        />
      </button>

      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label
              className={`text-sm font-medium text-gray-700 dark:text-blue-200 ${
                disabled ? 'opacity-50' : ''
              }`}
            >
              {label}
            </label>
          )}
          {description && (
            <span
              className={`text-xs text-gray-500 dark:text-blue-300 ${
                disabled ? 'opacity-50' : ''
              }`}
            >
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default SwitchInput;
