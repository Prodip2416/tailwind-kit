import React from 'react';

const Avatar = ({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  status,
  statusColor = 'green',
  icon,
  color = 'blue',
  className = '',
  ...props
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'w-6 h-6 text-xs';
      case 'sm':
        return 'w-8 h-8 text-sm';
      case 'md':
        return 'w-10 h-10 text-base';
      case 'lg':
        return 'w-12 h-12 text-lg';
      case 'xl':
        return 'w-16 h-16 text-xl';
      case '2xl':
        return 'w-20 h-20 text-2xl';
      default:
        return 'w-10 h-10 text-base';
    }
  };

  const getShapeClasses = () => {
    switch (shape) {
      case 'square':
        return 'rounded-md';
      case 'rounded':
        return 'rounded-lg';
      case 'circle':
        return 'rounded-full';
      default:
        return 'rounded-full';
    }
  };

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
      case 'pink':
        return 'bg-pink-500 text-white';
      case 'indigo':
        return 'bg-indigo-500 text-white';
      case 'gray':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const getStatusColorClasses = () => {
    switch (statusColor) {
      case 'green':
        return 'bg-green-500';
      case 'red':
        return 'bg-red-500';
      case 'yellow':
        return 'bg-yellow-500';
      case 'blue':
        return 'bg-blue-500';
      case 'gray':
        return 'bg-gray-500';
      default:
        return 'bg-green-500';
    }
  };

  const getInitials = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getStatusSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'w-2 h-2';
      case 'sm':
        return 'w-2.5 h-2.5';
      case 'md':
        return 'w-3 h-3';
      case 'lg':
        return 'w-3.5 h-3.5';
      case 'xl':
        return 'w-4 h-4';
      case '2xl':
        return 'w-5 h-5';
      default:
        return 'w-3 h-3';
    }
  };

  return (
    <div className={`relative inline-block ${className}`} {...props}>
      <div
        className={`${getSizeClasses()} ${getShapeClasses()} flex items-center justify-center overflow-hidden ${getColorClasses()}`}
      >
        {src ? (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="w-full h-full object-cover"
          />
        ) : icon ? (
          <div className="flex items-center justify-center">{icon}</div>
        ) : (
          <span className="font-medium">{getInitials(name)}</span>
        )}
      </div>

      {/* Status Indicator */}
      {status && (
        <div
          className={`absolute bottom-0 right-0 ${getStatusSizeClasses()} ${getStatusColorClasses()} rounded-full border-2 border-white dark:border-slate-800`}
        />
      )}
    </div>
  );
};

// Avatar Group Component
export const AvatarGroup = ({
  children,
  max = 3,
  size = 'md',
  spacing = 'sm',
  className = '',
  ...props
}) => {
  const getSpacingClasses = () => {
    switch (spacing) {
      case 'none':
        return '-space-x-0';
      case 'sm':
        return '-space-x-1';
      case 'md':
        return '-space-x-2';
      case 'lg':
        return '-space-x-3';
      case 'xl':
        return '-space-x-4';
      default:
        return '-space-x-1';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'w-6 h-6 text-xs';
      case 'sm':
        return 'w-8 h-8 text-sm';
      case 'md':
        return 'w-10 h-10 text-base';
      case 'lg':
        return 'w-12 h-12 text-lg';
      case 'xl':
        return 'w-16 h-16 text-xl';
      case '2xl':
        return 'w-20 h-20 text-2xl';
      default:
        return 'w-10 h-10 text-base';
    }
  };

  const childrenArray = React.Children.toArray(children);
  const visibleChildren = childrenArray.slice(0, max);
  const remainingCount = childrenArray.length - max;

  return (
    <div className={`flex ${getSpacingClasses()} ${className}`} {...props}>
      {visibleChildren.map((child, index) => (
        <div key={index} className="relative">
          {child}
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className={`${getSizeClasses()} rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-gray-600 dark:text-blue-300 font-medium`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

// Avatar Stack Component
export const AvatarStack = ({
  avatars = [],
  max = 3,
  size = 'md',
  className = '',
  ...props
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'w-6 h-6 text-xs';
      case 'sm':
        return 'w-8 h-8 text-sm';
      case 'md':
        return 'w-10 h-10 text-base';
      case 'lg':
        return 'w-12 h-12 text-lg';
      case 'xl':
        return 'w-16 h-16 text-xl';
      case '2xl':
        return 'w-20 h-20 text-2xl';
      default:
        return 'w-10 h-10 text-base';
    }
  };

  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <div className={`flex -space-x-2 ${className}`} {...props}>
      {visibleAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          {...avatar}
          size={size}
          className="border-2 border-white dark:border-slate-800"
        />
      ))}
      {remainingCount > 0 && (
        <div
          className={`${getSizeClasses()} rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-gray-600 dark:text-blue-300 font-medium border-2 border-white dark:border-slate-800`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

// Avatar List Component
export const AvatarList = ({
  items = [],
  showName = true,
  showStatus = false,
  size = 'md',
  className = '',
  ...props
}) => (
  <div className={`space-y-3 ${className}`} {...props}>
    {items.map((item, index) => (
      <div key={index} className="flex items-center space-x-3">
        <Avatar
          src={item.src}
          name={item.name}
          status={showStatus ? item.status : undefined}
          statusColor={item.statusColor}
          size={size}
        />
        {showName && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-blue-100 truncate">
              {item.name}
            </p>
            {item.title && (
              <p className="text-sm text-gray-500 dark:text-blue-400 truncate">
                {item.title}
              </p>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
);

export default Avatar;
