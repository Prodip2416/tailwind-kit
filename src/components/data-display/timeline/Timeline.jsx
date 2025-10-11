import React from 'react';

const Timeline = ({
  items = [],
  orientation = 'vertical',
  size = 'md',
  variant = 'default',
  className = '',
  ...props
}) => {
  const getOrientationClasses = () => {
    switch (orientation) {
      case 'horizontal':
        return 'flex flex-row overflow-x-auto';
      default:
        return 'flex flex-col';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'space-y-2';
      case 'sm':
        return 'space-y-3';
      case 'md':
        return 'space-y-4';
      case 'lg':
        return 'space-y-6';
      case 'xl':
        return 'space-y-8';
      case '2xl':
        return 'space-y-10';
      default:
        return 'space-y-4';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'border border-gray-200 dark:border-slate-700 rounded-lg p-4';
      case 'filled':
        return 'bg-gray-50 dark:bg-slate-800 rounded-lg p-4';
      case 'elevated':
        return 'bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4';
      default:
        return 'bg-white dark:bg-slate-800 shadow-sm rounded-lg p-4';
    }
  };

  return (
    <div className={`${getVariantClasses()} ${className}`} {...props}>
      <div className={`${getOrientationClasses()} ${getSizeClasses()}`}>
        {items.map((item, index) => (
          <TimelineItem
            key={item.id || index}
            {...item}
            isLast={index === items.length - 1}
            orientation={orientation}
            size={size}
          />
        ))}
      </div>
    </div>
  );
};

// Timeline Item Component
export const TimelineItem = ({
  title,
  description,
  time,
  icon,
  color = 'blue',
  status = 'completed',
  isLast = false,
  orientation = 'vertical',
  size = 'md',
  className = '',
  ...props
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500 text-white';
      case 'green':
        return 'bg-green-500 text-white';
      case 'red':
        return 'bg-red-500 text-white';
      case 'yellow':
        return 'bg-yellow-500 text-white';
      case 'purple':
        return 'bg-purple-500 text-white';
      case 'gray':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const getStatusClasses = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 text-white';
      case 'current':
        return 'bg-blue-500 text-white';
      case 'pending':
        return 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300';
      case 'error':
        return 'bg-red-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'w-4 h-4 text-xs';
      case 'sm':
        return 'w-6 h-6 text-xs';
      case 'md':
        return 'w-8 h-8 text-sm';
      case 'lg':
        return 'w-10 h-10 text-lg';
      case 'xl':
        return 'w-14 h-14 text-xl';
      case '2xl':
        return 'w-16 h-16 text-2xl';
      default:
        return 'w-8 h-8 text-sm';
    }
  };

  const getLineClasses = () => {
    if (isLast) return 'hidden';
    if (orientation === 'horizontal') {
      return 'w-8 h-0.5 bg-gray-200 dark:bg-slate-700';
    }
    return 'w-0.5 h-8 bg-gray-200 dark:bg-slate-700';
  };

  return (
    <div
      className={`flex ${
        orientation === 'horizontal' ? 'flex-col items-center' : 'flex-row'
      } ${className}`}
      {...props}
    >
      <div
        className={`flex ${
          orientation === 'horizontal' ? 'flex-col items-center' : 'flex-row'
        } ${orientation === 'horizontal' ? 'space-y-2' : 'space-x-4'}`}
      >
        {/* Icon/Status */}
        <div
          className={`flex-shrink-0 ${getSizeClasses()} rounded-full flex items-center justify-center ${getStatusClasses()}`}
        >
          {icon || (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>

        {/* Content */}
        <div
          className={`flex-1 ${
            orientation === 'horizontal' ? 'text-center' : ''
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className={`font-semibold text-gray-900 dark:text-blue-100 ${
              size === 'xl' || size === '2xl' ? 'text-lg' : 
              size === 'lg' ? 'text-base' : 'text-sm'
            }`}>
              {title}
            </h3>
            {time && (
              <span className={`text-gray-500 dark:text-blue-400 ${
                size === 'xl' || size === '2xl' ? 'text-sm' : 'text-xs'
              }`}>
                {time}
              </span>
            )}
          </div>
          {description && (
            <p className={`mt-2 text-gray-600 dark:text-blue-300 ${
              size === 'xl' || size === '2xl' ? 'text-base' : 
              size === 'lg' ? 'text-sm' : 'text-sm'
            }`}>
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Line */}
      {!isLast && <div className={`flex-shrink-0 ${getLineClasses()}`} />}
    </div>
  );
};

// Timeline Header Component
export const TimelineHeader = ({
  title,
  subtitle,
  className = '',
  ...props
}) => (
  <div className={`mb-6 ${className}`} {...props}>
    {title && (
      <h2 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
        {title}
      </h2>
    )}
    {subtitle && (
      <p className="mt-1 text-sm text-gray-600 dark:text-blue-300">
        {subtitle}
      </p>
    )}
  </div>
);

// Timeline Group Component
export const TimelineGroup = ({
  title,
  children,
  className = '',
  ...props
}) => (
  <div className={`mb-8 ${className}`} {...props}>
    {title && (
      <h3 className="text-sm font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-4">
        {title}
      </h3>
    )}
    {children}
  </div>
);

// Timeline Step Component
export const TimelineStep = ({
  step,
  title,
  description,
  status = 'pending',
  className = '',
  ...props
}) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 text-white';
      case 'current':
        return 'bg-blue-500 text-white';
      case 'pending':
        return 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300';
      case 'error':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300';
    }
  };

  return (
    <div className={`flex items-start space-x-4 ${className}`} {...props}>
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${getStatusClasses()}`}
      >
        {step}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900 dark:text-blue-100">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-gray-600 dark:text-blue-300">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Timeline;
