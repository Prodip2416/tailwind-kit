import React from 'react';

const Stat = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  trend,
  description,
  size = 'md',
  variant = 'default',
  className = '',
  ...props
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-4';
      case 'lg':
        return 'p-8';
      case 'xl':
        return 'p-10';
      default:
        return 'p-6';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800';
      case 'filled':
        return 'bg-gray-50 dark:bg-slate-800';
      case 'elevated':
        return 'bg-white dark:bg-slate-800 shadow-lg';
      default:
        return 'bg-white dark:bg-slate-800 shadow-sm';
    }
  };

  const getChangeClasses = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600 dark:text-green-400';
      case 'negative':
        return 'text-red-600 dark:text-red-400';
      case 'neutral':
        return 'text-gray-600 dark:text-blue-300';
      default:
        return 'text-gray-600 dark:text-blue-300';
    }
  };

  const getTrendIcon = () => {
    if (!trend) return null;

    switch (trend) {
      case 'up':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'down':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'stable':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`${getVariantClasses()} rounded-lg ${getSizeClasses()} ${className}`}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-blue-300 truncate">
            {title}
          </p>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900 dark:text-blue-100">
              {value}
            </p>
            {change && (
              <div
                className={`ml-2 flex items-baseline text-sm font-medium ${getChangeClasses()}`}
              >
                {getTrendIcon()}
                <span className="ml-1">{change}</span>
              </div>
            )}
          </div>
          {description && (
            <p className="text-sm text-gray-500 dark:text-blue-400 mt-1">
              {description}
            </p>
          )}
        </div>
        {icon && (
          <div className="flex-shrink-0 ml-4">
            <div className="w-8 h-8 text-gray-400 dark:text-blue-400">
              {icon}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Stat Grid Component
export const StatGrid = ({
  children,
  columns = 4,
  gap = 'md',
  className = '',
  ...props
}) => {
  const getGridClasses = () => {
    switch (columns) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      case 5:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
      case 6:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    }
  };

  const getGapClasses = () => {
    switch (gap) {
      case 'none':
        return 'gap-0';
      case 'sm':
        return 'gap-2';
      case 'md':
        return 'gap-4';
      case 'lg':
        return 'gap-6';
      case 'xl':
        return 'gap-8';
      default:
        return 'gap-4';
    }
  };

  return (
    <div
      className={`grid ${getGridClasses()} ${getGapClasses()} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Stat Card Component
export const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  color = 'blue',
  size = 'md',
  className = '',
  ...props
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400';
      case 'green':
        return 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400';
      case 'red':
        return 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400';
      case 'yellow':
        return 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400';
      case 'purple':
        return 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400';
      case 'gray':
        return 'bg-gray-50 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-4';
      case 'lg':
        return 'p-8';
      case 'xl':
        return 'p-10';
      default:
        return 'p-6';
    }
  };

  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 ${getSizeClasses()} ${className}`}
      {...props}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center ${getColorClasses()}`}
          >
            {icon}
          </div>
        </div>
        <div className="ml-4 flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-blue-300">
            {title}
          </p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-blue-100">
            {value}
          </p>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-blue-400">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Stat List Component
export const StatList = ({ items = [], className = '', ...props }) => (
  <div className={`space-y-4 ${className}`} {...props}>
    {items.map((item, index) => (
      <div key={index} className="flex items-center justify-between py-2">
        <div className="flex items-center">
          {item.icon && (
            <div className="flex-shrink-0 mr-3">
              <div className="w-6 h-6 text-gray-400 dark:text-blue-400">
                {item.icon}
              </div>
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-blue-100">
              {item.label}
            </p>
            {item.description && (
              <p className="text-sm text-gray-500 dark:text-blue-400">
                {item.description}
              </p>
            )}
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-900 dark:text-blue-100">
            {item.value}
          </p>
          {item.change && (
            <p
              className={`text-xs ${
                item.changeType === 'positive'
                  ? 'text-green-600 dark:text-green-400'
                  : item.changeType === 'negative'
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-gray-500 dark:text-blue-400'
              }`}
            >
              {item.change}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default Stat;
