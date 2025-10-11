import { useState, useRef, useEffect } from 'react';

const Popover = ({
  trigger,
  children,
  title,
  placement = 'bottom',
  triggerType = 'click',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current?.getBoundingClientRect();

      let top = 0;
      let left = 0;

      switch (placement) {
        case 'top':
          top = triggerRect.top - (popoverRect?.height || 0) - 8;
          left =
            triggerRect.left +
            triggerRect.width / 2 -
            (popoverRect?.width || 0) / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left =
            triggerRect.left +
            triggerRect.width / 2 -
            (popoverRect?.width || 0) / 2;
          break;
        case 'left':
          top =
            triggerRect.top +
            triggerRect.height / 2 -
            (popoverRect?.height || 0) / 2;
          left = triggerRect.left - (popoverRect?.width || 0) - 8;
          break;
        case 'right':
          top =
            triggerRect.top +
            triggerRect.height / 2 -
            (popoverRect?.height || 0) / 2;
          left = triggerRect.right + 8;
          break;
        default:
          top = triggerRect.bottom + 8;
          left =
            triggerRect.left +
            triggerRect.width / 2 -
            (popoverRect?.width || 0) / 2;
      }

      // Keep popover within viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (left < 8) left = 8;
      if (left + (popoverRect?.width || 0) > viewportWidth - 8) {
        left = viewportWidth - (popoverRect?.width || 0) - 8;
      }
      if (top < 8) top = 8;
      if (top + (popoverRect?.height || 0) > viewportHeight - 8) {
        top = viewportHeight - (popoverRect?.height || 0) - 8;
      }

      setPosition({ top, left });
    }
  }, [isOpen, placement]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleTriggerClick = () => {
    if (triggerType === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const handleTriggerHover = () => {
    if (triggerType === 'hover') {
      setIsOpen(true);
    }
  };

  const handleTriggerLeave = () => {
    if (triggerType === 'hover') {
      setIsOpen(false);
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        ref={triggerRef}
        onClick={handleTriggerClick}
        onMouseEnter={handleTriggerHover}
        onMouseLeave={handleTriggerLeave}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={popoverRef}
          className="fixed z-50 w-64 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          {title && (
            <div className="border-b border-gray-200 dark:border-slate-700 px-4 py-3">
              <h3 className="text-sm font-medium text-gray-900 dark:text-blue-100">
                {title}
              </h3>
            </div>
          )}
          <div className="p-4">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Popover;
