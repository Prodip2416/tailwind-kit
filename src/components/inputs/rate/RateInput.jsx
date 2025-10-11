import { useState } from 'react';

const RateInput = ({
  value,
  onChange,
  name,
  max = 5,
  size = 'md',
  allowHalf = false,
  disabled = false,
}) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(value || 0);

  const handleRatingClick = (rating) => {
    if (disabled) return;

    const newRating = rating === currentRating ? 0 : rating;
    setCurrentRating(newRating);
    onChange({ target: { name, value: newRating } });
  };

  const handleMouseEnter = (rating) => {
    if (disabled) return;
    setHoveredRating(rating);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setHoveredRating(0);
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'w-3 h-3';
      case 'sm':
        return 'w-5 h-5';
      case 'md':
        return 'w-6 h-6';
      case 'lg':
        return 'w-8 h-8';
      case 'xl':
        return 'w-12 h-12';
      case '2xl':
        return 'w-16 h-16';
      default:
        return 'w-6 h-6';
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'xs':
        return 'text-xs';
      case 'sm':
        return 'text-sm';
      case 'md':
        return 'text-sm';
      case 'lg':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
      case '2xl':
        return 'text-2xl';
      default:
        return 'text-sm';
    }
  };

  const renderStar = (index) => {
    const rating = hoveredRating || currentRating;
    const isActive = index <= rating;
    const isHalf = allowHalf && index === Math.ceil(rating) && rating % 1 !== 0;

    return (
      <button
        key={index}
        type="button"
        onClick={() => handleRatingClick(index)}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        disabled={disabled}
        className={`${getSizeClasses()} transition-all duration-200 ${
          disabled
            ? 'cursor-not-allowed opacity-50'
            : 'cursor-pointer hover:scale-125 active:scale-95'
        }`}
      >
        <svg
          className={`${getSizeClasses()} ${
            isActive
              ? 'text-yellow-400 dark:text-yellow-500'
              : 'text-gray-300 dark:text-gray-600'
          } transition-colors duration-200`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {isHalf ? (
            <defs>
              <linearGradient id={`half-${index}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
          ) : null}
          <path
            fill={isHalf ? `url(#half-${index})` : 'currentColor'}
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      </button>
    );
  };

  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: max }, (_, index) => renderStar(index + 1))}
      {currentRating > 0 && (
        <span
          className={`ml-3 ${getTextSize()} text-gray-600 dark:text-blue-200 font-medium`}
        >
          {currentRating} / {max}
        </span>
      )}
    </div>
  );
};

export default RateInput;
