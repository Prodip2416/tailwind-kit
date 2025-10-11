import { useState, useRef, useEffect } from 'react';

const Tooltip = ({
  children,
  content,
  placement = 'top',
  delay = 200,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current?.getBoundingClientRect();

      let top = 0;
      let left = 0;

      switch (placement) {
        case 'top':
          top = triggerRect.top - (tooltipRect?.height || 0) - 8;
          left =
            triggerRect.left +
            triggerRect.width / 2 -
            (tooltipRect?.width || 0) / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left =
            triggerRect.left +
            triggerRect.width / 2 -
            (tooltipRect?.width || 0) / 2;
          break;
        case 'left':
          top =
            triggerRect.top +
            triggerRect.height / 2 -
            (tooltipRect?.height || 0) / 2;
          left = triggerRect.left - (tooltipRect?.width || 0) - 8;
          break;
        case 'right':
          top =
            triggerRect.top +
            triggerRect.height / 2 -
            (tooltipRect?.height || 0) / 2;
          left = triggerRect.right + 8;
          break;
        default:
          top = triggerRect.top - (tooltipRect?.height || 0) - 8;
          left =
            triggerRect.left +
            triggerRect.width / 2 -
            (tooltipRect?.width || 0) / 2;
      }

      // Keep tooltip within viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (left < 8) left = 8;
      if (left + (tooltipRect?.width || 0) > viewportWidth - 8) {
        left = viewportWidth - (tooltipRect?.width || 0) - 8;
      }
      if (top < 8) top = 8;
      if (top + (tooltipRect?.height || 0) > viewportHeight - 8) {
        top = viewportHeight - (tooltipRect?.height || 0) - 8;
      }

      setPosition({ top, left });
    }
  }, [isVisible, placement]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer"
      >
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          className="fixed z-50 max-w-xs rounded-lg bg-gray-900 dark:bg-slate-700 px-3 py-2 text-sm text-white shadow-lg"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          {content}
          {/* Arrow */}
          <div
            className={`absolute w-2 h-2 bg-gray-900 dark:bg-slate-700 transform rotate-45 ${
              placement === 'top'
                ? 'top-full left-1/2 -translate-x-1/2 -translate-y-1'
                : placement === 'bottom'
                ? 'bottom-full left-1/2 -translate-x-1/2 translate-y-1'
                : placement === 'left'
                ? 'left-full top-1/2 -translate-y-1/2 -translate-x-1'
                : 'right-full top-1/2 -translate-y-1/2 translate-x-1'
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
