import { useState, useEffect } from 'react';

const Loading = ({
  type = 'spinner',
  size = 'md',
  color = 'blue',
  text = 'Loading...',
  overlay = false,
  className = '',
}) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (type === 'dots') {
      const interval = setInterval(() => {
        setDots((prev) => (prev === '...' ? '' : prev + '.'));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [type]);

  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorStyles = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    red: 'text-red-600 dark:text-red-400',
    yellow: 'text-yellow-600 dark:text-yellow-400',
    purple: 'text-purple-600 dark:text-purple-400',
    gray: 'text-gray-600 dark:text-gray-400',
  };

  const spinnerSizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const renderSpinner = () => (
    <div className={`animate-spin ${spinnerSizes[size]} ${colorStyles[color]}`}>
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    </div>
  );

  const renderDots = () => (
    <div className={`${textSizes[size]} ${colorStyles[color]} font-mono`}>
      {text}
      {dots}
    </div>
  );

  const renderPulse = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeStyles[size]} bg-current rounded-full animate-pulse`}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s',
          }}
        />
      ))}
    </div>
  );

  const renderBars = () => (
    <div className="flex space-x-1 items-end">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-1 bg-current rounded-full animate-pulse`}
          style={{
            height: `${12 + i * 4}px`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1.2s',
          }}
        />
      ))}
    </div>
  );

  const renderSkeleton = () => (
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
      <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/2 animate-pulse"></div>
    </div>
  );

  const renderContent = () => {
    switch (type) {
      case 'spinner':
        return renderSpinner();
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'bars':
        return renderBars();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  const content = (
    <div
      className={`flex flex-col items-center justify-center space-y-2 ${className}`}
    >
      <div className={colorStyles[color]}>{renderContent()}</div>
      {text && type !== 'dots' && (
        <div className={`${textSizes[size]} ${colorStyles[color]}`}>{text}</div>
      )}
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-slate-900 bg-opacity-75 dark:bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

export default Loading;
