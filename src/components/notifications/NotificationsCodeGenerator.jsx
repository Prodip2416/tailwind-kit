// Notifications Code Generator Component
export const generateCodeExample = (selectedComponent) => {
  if (!selectedComponent) return '';

  const componentId = selectedComponent.id;

  switch (componentId) {
    case 'alert':
      return `// Complete Alert Component - Copy & Paste Ready
import { useState } from 'react';

const Alert = ({
  type = 'info',
  title,
  message,
  dismissible = true,
  onDismiss,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  if (!isVisible) return null;

  const typeStyles = {
    success: {
      container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      icon: 'text-green-400',
      title: 'text-green-800 dark:text-green-200',
      message: 'text-green-700 dark:text-green-300',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    error: {
      container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      icon: 'text-red-400',
      title: 'text-red-800 dark:text-red-200',
      message: 'text-red-700 dark:text-red-300',
      iconPath: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    warning: {
      container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
      icon: 'text-yellow-400',
      title: 'text-yellow-800 dark:text-yellow-200',
      message: 'text-yellow-700 dark:text-yellow-300',
      iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
    },
    info: {
      container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      icon: 'text-blue-400',
      title: 'text-blue-800 dark:text-blue-200',
      message: 'text-blue-700 dark:text-blue-300',
      iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  };

  const styles = typeStyles[type] || typeStyles.info;

  return (
    <div
      className={\`rounded-lg border p-4 \${styles.container} \${className}\`}
      role="alert"
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className={\`h-5 w-5 \${styles.icon}\`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={styles.iconPath}
            />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={\`text-sm font-medium \${styles.title}\`}>{title}</h3>
          )}
          {message && (
            <div className={\`mt-1 text-sm \${styles.message}\`}>
              <p>{message}</p>
            </div>
          )}
        </div>
        {dismissible && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={handleDismiss}
                className={\`inline-flex rounded-md p-1.5 \${styles.icon} hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-gray-600\`}
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AlertExample = () => {
  return (
    <div className="space-y-4">
      <Alert
        type="success"
        title="Success!"
        message="Your action was completed successfully."
        dismissible={true}
      />
      <Alert
        type="error"
        title="Error"
        message="Something went wrong. Please try again."
        dismissible={true}
      />
    </div>
  );
};

export default AlertExample;`;

    case 'toast':
      return `// Complete Toast Component - Copy & Paste Ready
import { useState, useEffect } from 'react';

const Toast = ({
  type = 'info',
  title,
  message,
  duration = 5000,
  position = 'top-right',
  onClose,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300);
  };

  if (!isVisible) return null;

  const typeStyles = {
    success: {
      container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      icon: 'text-green-400',
      title: 'text-green-800 dark:text-green-200',
      message: 'text-green-700 dark:text-green-300',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    error: {
      container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      icon: 'text-red-400',
      title: 'text-red-800 dark:text-red-200',
      message: 'text-red-700 dark:text-red-300',
      iconPath: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    warning: {
      container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
      icon: 'text-yellow-400',
      title: 'text-yellow-800 dark:text-yellow-200',
      message: 'text-yellow-700 dark:text-yellow-300',
      iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
    },
    info: {
      container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      icon: 'text-blue-400',
      title: 'text-blue-800 dark:text-blue-200',
      message: 'text-blue-700 dark:text-blue-300',
      iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  };

  const positionStyles = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  };

  const styles = typeStyles[type] || typeStyles.info;
  const positionClass = positionStyles[position] || positionStyles['top-right'];

  return (
    <div
      className={\`fixed z-50 max-w-sm w-full \${positionClass} \${className}\`}
      role="alert"
    >
      <div
        className={\`rounded-lg border p-4 shadow-lg transition-all duration-300 \${
          isExiting
            ? 'opacity-0 transform scale-95 translate-y-2'
            : 'opacity-100 transform scale-100 translate-y-0'
        } \${styles.container}\`}
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className={\`h-5 w-5 \${styles.icon}\`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={styles.iconPath}
              />
            </svg>
          </div>
          <div className="ml-3 flex-1">
            {title && (
              <h3 className={\`text-sm font-medium \${styles.title}\`}>{title}</h3>
            )}
            {message && (
              <div className={\`mt-1 text-sm \${styles.message}\`}>
                <p>{message}</p>
              </div>
            )}
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={handleClose}
                className={\`inline-flex rounded-md p-1.5 \${styles.icon} hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-gray-600\`}
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToastExample = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowToast(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Show Toast
      </button>
      {showToast && (
        <Toast
          type="success"
          title="Success!"
          message="Your action was completed successfully."
          duration={3000}
          position="top-right"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ToastExample;`;

    case 'modal':
      return `// Complete Modal Component - Copy & Paste Ready
import { useState, useEffect } from 'react';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  const sizeStyles = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4',
  };

  if (!isOpen) return null;

  return (
    <div
      className={\`fixed inset-0 z-50 overflow-y-auto \${className}\`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={handleOverlayClick}
        ></div>

        {/* Modal panel */}
        <div
          className={\`relative inline-block transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:align-middle \${sizeStyles[size]}\`}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-700 px-6 py-4">
              <h3
                className="text-lg font-medium text-gray-900 dark:text-blue-100"
                id="modal-title"
              >
                {title}
              </h3>
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div className="px-6 py-4">
            {children}
          </div>

          {/* Footer */}
          <div className="flex justify-end space-x-3 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-200 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Open Modal
      </button>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Example Modal"
          size="md"
        >
          <p className="text-gray-600 dark:text-blue-300">
            This is an example modal dialog. You can put any content here.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default ModalExample;`;

    case 'popover':
      return `// Complete Popover Component - Copy & Paste Ready
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
          left = triggerRect.left + triggerRect.width / 2 - (popoverRect?.width || 0) / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left = triggerRect.left + triggerRect.width / 2 - (popoverRect?.width || 0) / 2;
          break;
        case 'left':
          top = triggerRect.top + triggerRect.height / 2 - (popoverRect?.height || 0) / 2;
          left = triggerRect.left - (popoverRect?.width || 0) - 8;
          break;
        case 'right':
          top = triggerRect.top + triggerRect.height / 2 - (popoverRect?.height || 0) / 2;
          left = triggerRect.right + 8;
          break;
        default:
          top = triggerRect.bottom + 8;
          left = triggerRect.left + triggerRect.width / 2 - (popoverRect?.width || 0) / 2;
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
    <div className={\`relative inline-block \${className}\`}>
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
            top: \`\${position.top}px\`,
            left: \`\${position.left}px\`,
          }}
        >
          {title && (
            <div className="border-b border-gray-200 dark:border-slate-700 px-4 py-3">
              <h3 className="text-sm font-medium text-gray-900 dark:text-blue-100">
                {title}
              </h3>
            </div>
          )}
          <div className="p-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const PopoverExample = () => {
  return (
    <Popover
      trigger={
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
          Click Popover
        </button>
      }
      title="Popover Title"
      placement="bottom"
      triggerType="click"
    >
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-blue-300">
          This is a popover that appears on click.
        </p>
        <button className="w-full px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
          Action Button
        </button>
      </div>
    </Popover>
  );
};

export default PopoverExample;`;

    case 'tooltip':
      return `// Complete Tooltip Component - Copy & Paste Ready
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
          left = triggerRect.left + triggerRect.width / 2 - (tooltipRect?.width || 0) / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left = triggerRect.left + triggerRect.width / 2 - (tooltipRect?.width || 0) / 2;
          break;
        case 'left':
          top = triggerRect.top + triggerRect.height / 2 - (tooltipRect?.height || 0) / 2;
          left = triggerRect.left - (tooltipRect?.width || 0) - 8;
          break;
        case 'right':
          top = triggerRect.top + triggerRect.height / 2 - (tooltipRect?.height || 0) / 2;
          left = triggerRect.right + 8;
          break;
        default:
          top = triggerRect.top - (tooltipRect?.height || 0) - 8;
          left = triggerRect.left + triggerRect.width / 2 - (tooltipRect?.width || 0) / 2;
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
    <div className={\`relative inline-block \${className}\`}>
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
            top: \`\${position.top}px\`,
            left: \`\${position.left}px\`,
          }}
        >
          {content}
          {/* Arrow */}
          <div
            className={\`absolute w-2 h-2 bg-gray-900 dark:bg-slate-700 transform rotate-45 \${
              placement === 'top'
                ? 'top-full left-1/2 -translate-x-1/2 -translate-y-1'
                : placement === 'bottom'
                ? 'bottom-full left-1/2 -translate-x-1/2 translate-y-1'
                : placement === 'left'
                ? 'left-full top-1/2 -translate-y-1/2 -translate-x-1'
                : 'right-full top-1/2 -translate-y-1/2 translate-x-1'
            }\`}
          />
        </div>
      )}
    </div>
  );
};

const TooltipExample = () => {
  return (
    <Tooltip content="This is a tooltip" placement="top">
      <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
        Hover for Tooltip
      </button>
    </Tooltip>
  );
};

export default TooltipExample;`;

    case 'loading':
      return `// Complete Loading Component - Copy & Paste Ready
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
    <div className={\`animate-spin \${spinnerSizes[size]} \${colorStyles[color]}\`}>
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
    <div className={\`\${textSizes[size]} \${colorStyles[color]} font-mono\`}>
      {text}{dots}
    </div>
  );

  const renderPulse = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={\`\${sizeStyles[size]} bg-current rounded-full animate-pulse\`}
          style={{
            animationDelay: \`\${i * 0.2}s\`,
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
          className={\`w-1 bg-current rounded-full animate-pulse\`}
          style={{
            height: \`\${12 + i * 4}px\`,
            animationDelay: \`\${i * 0.1}s\`,
            animationDuration: '1.2s',
          }}
        />
      ))}
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
      default:
        return renderSpinner();
    }
  };

  const content = (
    <div className={\`flex flex-col items-center justify-center space-y-2 \${className}\`}>
      <div className={colorStyles[color]}>
        {renderContent()}
      </div>
      {text && type !== 'dots' && (
        <div className={\`\${textSizes[size]} \${colorStyles[color]}\`}>
          {text}
        </div>
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

const LoadingExample = () => {
  return (
    <div className="space-y-4">
      <Loading type="spinner" size="md" color="blue" text="Loading..." />
      <Loading type="dots" size="md" color="green" text="Processing" />
      <Loading type="pulse" size="md" color="purple" text="Working" />
    </div>
  );
};

export default LoadingExample;`;

    case 'progress':
      return `// Complete Progress Component - Copy & Paste Ready
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
    <div className={\`w-full \${className}\`}>
      {/* Label */}
      {showLabel && (label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className={\`\${textSizes[size]} font-medium text-gray-700 dark:text-blue-200\`}>
              {label}
            </span>
          )}
          {showPercentage && (
            <span className={\`\${textSizes[size]} font-medium text-gray-600 dark:text-blue-300\`}>
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      {/* Progress Bar */}
      <div className={\`w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden \${sizeStyles[size]}\`}>
        <div
          className={\`h-full transition-all duration-300 ease-out \${colorStyles[color]} \${getStripedClass()}\`}
          style={{
            width: \`\${percentage}%\`,
            transition: animated ? 'width 0.5s ease-out' : 'none',
          }}
        />
      </div>

      {/* Value Display */}
      {!showPercentage && (
        <div className="flex justify-between items-center mt-1">
          <span className={\`\${textSizes[size]} text-gray-600 dark:text-blue-300\`}>
            {displayValue}
          </span>
          <span className={\`\${textSizes[size]} text-gray-500 dark:text-blue-400\`}>
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
  const radius = size === 'sm' ? 20 : size === 'md' ? 30 : size === 'lg' ? 40 : 50;
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
    <div className={\`relative inline-flex items-center justify-center \${sizeStyles[size]} \${className}\`}>
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
          className={\`transition-all duration-300 ease-out \${colorStyles[color]}\`}
          style={{
            transition: animated ? 'stroke-dashoffset 0.5s ease-out' : 'none',
          }}
        />
      </svg>
      
      {/* Percentage text */}
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={\`\${textSizes[size]} font-medium text-gray-700 dark:text-blue-200\`}>
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  );
};

const ProgressExample = () => {
  return (
    <div className="space-y-4">
      <Progress value={50} color="blue" label="Basic Progress" />
      <CircularProgress value={75} size="md" color="green" />
    </div>
  );
};

export default ProgressExample;`;

    default:
      return `// ${selectedComponent.name} Component - Copy & Paste Ready
import { useState } from 'react';

const ${selectedComponent.name.replace(/\s+/g, '')} = ({ content }) => {
  return (
    <div className="w-full">
      <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
        <p className="text-gray-600 dark:text-blue-300">
          ${selectedComponent.description}
        </p>
      </div>
    </div>
  );
};

const ${selectedComponent.name.replace(/\s+/g, '')}Example = () => {
  return (
    <${selectedComponent.name.replace(/\s+/g, '')}
      content="${selectedComponent.description}"
    />
  );
};

export default ${selectedComponent.name.replace(/\s+/g, '')}Example;`;
  }
};
