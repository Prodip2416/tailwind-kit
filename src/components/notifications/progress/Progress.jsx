import { useState, useEffect } from 'react';

const Progress = ({
  value = 0,
  max = 100,
  size = 'md',
  color = 'blue',
  showLabel = true,
  showPercentage = true,
  animated = false,
  striped = false,
  label = '',
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated]);

  const percentage = Math.min(Math.max((displayValue / max) * 100, 0), 100);

  const sizeStyles = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4',
  };

  const colorStyles = {
    blue: 'bg-blue-600 dark:bg-blue-500',
    green: 'bg-green-600 dark:bg-green-500',
    red: 'bg-red-600 dark:bg-red-500',
    yellow: 'bg-yellow-600 dark:bg-yellow-500',
    purple: 'bg-purple-600 dark:bg-purple-500',
    gray: 'bg-gray-600 dark:bg-gray-500',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };

  const getStripedClass = () => {
    if (striped) {
      return 'bg-gradient-to-r from-transparent via-white to-transparent bg-[length:20px_20px] animate-pulse';
    }
    return '';
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Label */}
      {showLabel && (label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span
              className={`${textSizes[size]} font-medium text-gray-700 dark:text-blue-200`}
            >
              {label}
            </span>
          )}
          {showPercentage && (
            <span
              className={`${textSizes[size]} font-medium text-gray-600 dark:text-blue-300`}
            >
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      {/* Progress Bar */}
      <div
        className={`w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden ${sizeStyles[size]}`}
      >
        <div
          className={`h-full transition-all duration-300 ease-out ${
            colorStyles[color]
          } ${getStripedClass()}`}
          style={{
            width: `${percentage}%`,
            transition: animated ? 'width 0.5s ease-out' : 'none',
          }}
        />
      </div>

      {/* Value Display */}
      {!showPercentage && (
        <div className="flex justify-between items-center mt-1">
          <span
            className={`${textSizes[size]} text-gray-600 dark:text-blue-300`}
          >
            {displayValue}
          </span>
          <span
            className={`${textSizes[size]} text-gray-500 dark:text-blue-400`}
          >
            {max}
          </span>
        </div>
      )}
    </div>
  );
};

// Circular Progress Component
export const CircularProgress = ({
  value = 0,
  max = 100,
  size = 'md',
  color = 'blue',
  showPercentage = true,
  animated = false,
  strokeWidth = 4,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated]);

  const percentage = Math.min(Math.max((displayValue / max) * 100, 0), 100);
  const radius =
    size === 'sm' ? 20 : size === 'md' ? 30 : size === 'lg' ? 40 : 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const sizeStyles = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  const colorStyles = {
    blue: 'stroke-blue-600 dark:stroke-blue-500',
    green: 'stroke-green-600 dark:stroke-green-500',
    red: 'stroke-red-600 dark:stroke-red-500',
    yellow: 'stroke-yellow-600 dark:stroke-yellow-500',
    purple: 'stroke-purple-600 dark:stroke-purple-500',
    gray: 'stroke-gray-600 dark:stroke-gray-500',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center ${sizeStyles[size]} ${className}`}
    >
      <svg
        className="transform -rotate-90"
        width={radius * 2 + strokeWidth * 2}
        height={radius * 2 + strokeWidth * 2}
      >
        {/* Background circle */}
        <circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-200 dark:text-slate-700"
        />
        {/* Progress circle */}
        <circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={`transition-all duration-300 ease-out ${colorStyles[color]}`}
          style={{
            transition: animated ? 'stroke-dashoffset 0.5s ease-out' : 'none',
          }}
        />
      </svg>

      {/* Percentage text */}
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`${textSizes[size]} font-medium text-gray-700 dark:text-blue-200`}
          >
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  );
};

export default Progress;
