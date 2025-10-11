import React from 'react';

const List = ({
  items = [],
  variant = 'default',
  size = 'md',
  dividers = true,
  hoverable = true,
  className = '',
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'border border-gray-200 dark:border-slate-700 rounded-lg';
      case 'filled':
        return 'bg-gray-50 dark:bg-slate-800 rounded-lg';
      case 'elevated':
        return 'bg-white dark:bg-slate-800 shadow-md rounded-lg';
      default:
        return 'bg-white dark:bg-slate-800 rounded-lg';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'py-1';
      case 'lg':
        return 'py-2';
      case 'xl':
        return 'py-3';
      default:
        return 'py-1';
    }
  };

  const getItemClasses = () => {
    const baseClasses = 'flex items-center justify-between px-4';
    const hoverClasses = hoverable
      ? 'hover:bg-gray-50 dark:hover:bg-slate-700'
      : '';
    const dividerClasses = dividers
      ? 'border-b border-gray-200 dark:border-slate-700 last:border-b-0'
      : '';

    return `${baseClasses} ${hoverClasses} ${dividerClasses} ${getSizeClasses()}`;
  };

  return (
    <div className={`${getVariantClasses()} ${className}`} {...props}>
      {items.map((item, index) => (
        <div key={item.id || index} className={getItemClasses()}>
          {item.content}
        </div>
      ))}
    </div>
  );
};

// List Item Component
export const ListItem = ({
  children,
  leftIcon,
  rightIcon,
  primary,
  secondary,
  avatar,
  actions,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'py-2 px-3';
      case 'lg':
        return 'py-4 px-6';
      case 'xl':
        return 'py-5 px-8';
      default:
        return 'py-3 px-4';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'border border-gray-200 dark:border-slate-700 rounded-lg mb-2 last:mb-0';
      case 'filled':
        return 'bg-gray-50 dark:bg-slate-800 rounded-lg mb-2 last:mb-0';
      case 'elevated':
        return 'bg-white dark:bg-slate-800 shadow-sm rounded-lg mb-2 last:mb-0';
      default:
        return 'hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg';
    }
  };

  return (
    <div
      className={`flex items-center ${getSizeClasses()} ${getVariantClasses()} ${className}`}
      {...props}
    >
      {/* Left Icon */}
      {leftIcon && <div className="flex-shrink-0 mr-3">{leftIcon}</div>}

      {/* Avatar */}
      {avatar && <div className="flex-shrink-0 mr-3">{avatar}</div>}

      {/* Content */}
      <div className="flex-1 min-w-0">
        {primary && (
          <div className="text-sm font-medium text-gray-900 dark:text-blue-100 truncate">
            {primary}
          </div>
        )}
        {secondary && (
          <div className="text-sm text-gray-500 dark:text-blue-300 truncate">
            {secondary}
          </div>
        )}
        {children}
      </div>

      {/* Right Icon */}
      {rightIcon && <div className="flex-shrink-0 ml-3">{rightIcon}</div>}

      {/* Actions */}
      {actions && <div className="flex-shrink-0 ml-3">{actions}</div>}
    </div>
  );
};

// List Header Component
export const ListHeader = ({ children, className = '', ...props }) => (
  <div
    className={`px-4 py-2 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider border-b border-gray-200 dark:border-slate-700 ${className}`}
    {...props}
  >
    {children}
  </div>
);

// List Subheader Component
export const ListSubheader = ({ children, className = '', ...props }) => (
  <div
    className={`px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-200 ${className}`}
    {...props}
  >
    {children}
  </div>
);

// List Divider Component
export const ListDivider = ({ className = '', ...props }) => (
  <div
    className={`border-t border-gray-200 dark:border-slate-700 ${className}`}
    {...props}
  />
);

// List Group Component
export const ListGroup = ({ children, className = '', ...props }) => (
  <div className={`space-y-1 ${className}`} {...props}>
    {children}
  </div>
);

// List Section Component
export const ListSection = ({ title, children, className = '', ...props }) => (
  <div className={`mb-6 ${className}`} {...props}>
    {title && (
      <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
        {title}
      </div>
    )}
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm">
      {children}
    </div>
  </div>
);

export default List;
