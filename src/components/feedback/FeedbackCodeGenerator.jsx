// Feedback Code Generator
export const generateFeedbackCodeExample = (selectedComponent, language = 'js') => {
  if (!selectedComponent) return '';

  const normalizedLanguage = String(language || 'js').toLowerCase();
  const isTypeScript =
    normalizedLanguage === 'ts' ||
    normalizedLanguage === 'tsx' ||
    normalizedLanguage === 'typescript';

  const componentId = selectedComponent.id;

  switch (componentId) {
    case 'alert':
      if (isTypeScript) {
        return `// TypeScript Alert Component - Copy & Paste Ready
import { useState } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

type AlertProps = {
  variant?: AlertVariant;
  title?: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
};

const variantStyles: Record<AlertVariant, { container: string; icon: string; title: string; text: string }> = {
  info: {
    container: 'bg-blue-50 border-blue-400 dark:bg-blue-900/20 dark:border-blue-500',
    icon: 'text-blue-500 dark:text-blue-400',
    title: 'text-blue-800 dark:text-blue-200',
    text: 'text-blue-700 dark:text-blue-300',
  },
  success: {
    container: 'bg-green-50 border-green-400 dark:bg-green-900/20 dark:border-green-500',
    icon: 'text-green-500 dark:text-green-400',
    title: 'text-green-800 dark:text-green-200',
    text: 'text-green-700 dark:text-green-300',
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-400 dark:bg-yellow-900/20 dark:border-yellow-500',
    icon: 'text-yellow-500 dark:text-yellow-400',
    title: 'text-yellow-800 dark:text-yellow-200',
    text: 'text-yellow-700 dark:text-yellow-300',
  },
  error: {
    container: 'bg-red-50 border-red-400 dark:bg-red-900/20 dark:border-red-500',
    icon: 'text-red-500 dark:text-red-400',
    title: 'text-red-800 dark:text-red-200',
    text: 'text-red-700 dark:text-red-300',
  },
};

const iconPaths: Record<AlertVariant, string> = {
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
};

const Alert = ({
  variant = 'info',
  title,
  message,
  dismissible = true,
  onDismiss,
}: AlertProps) => {
  const [visible, setVisible] = useState<boolean>(true);
  const styles = variantStyles[variant];

  const handleDismiss = (): void => {
    setVisible(false);
    onDismiss?.();
  };

  if (!visible) return null;

  return (
    <div className={\`flex items-start gap-3 p-4 border-l-4 rounded-r-lg \${styles.container}\`} role="alert">
      <svg className={\`w-5 h-5 flex-shrink-0 mt-0.5 \${styles.icon}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[variant]} />
      </svg>
      <div className="flex-1 min-w-0">
        {title && <p className={\`text-sm font-semibold \${styles.title}\`}>{title}</p>}
        <p className={\`text-sm \${styles.text}\`}>{message}</p>
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          className={\`flex-shrink-0 p-1 rounded transition-opacity opacity-60 hover:opacity-100 \${styles.icon}\`}
          aria-label="Dismiss"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

// Usage example
const AlertDemo = () => (
  <div className="space-y-3 p-4">
    <Alert variant="info" title="Info" message="This is an informational alert." />
    <Alert variant="success" title="Success" message="Operation completed successfully!" />
    <Alert variant="warning" title="Warning" message="Please review before continuing." />
    <Alert variant="error" title="Error" message="Something went wrong. Please try again." />
  </div>
);

export default AlertDemo;`;
      }
      return `// Complete Alert Component - Copy & Paste Ready
import { useState } from 'react';

const variantStyles = {
  info: {
    container: 'bg-blue-50 border-blue-400 dark:bg-blue-900/20 dark:border-blue-500',
    icon: 'text-blue-500 dark:text-blue-400',
    title: 'text-blue-800 dark:text-blue-200',
    text: 'text-blue-700 dark:text-blue-300',
  },
  success: {
    container: 'bg-green-50 border-green-400 dark:bg-green-900/20 dark:border-green-500',
    icon: 'text-green-500 dark:text-green-400',
    title: 'text-green-800 dark:text-green-200',
    text: 'text-green-700 dark:text-green-300',
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-400 dark:bg-yellow-900/20 dark:border-yellow-500',
    icon: 'text-yellow-500 dark:text-yellow-400',
    title: 'text-yellow-800 dark:text-yellow-200',
    text: 'text-yellow-700 dark:text-yellow-300',
  },
  error: {
    container: 'bg-red-50 border-red-400 dark:bg-red-900/20 dark:border-red-500',
    icon: 'text-red-500 dark:text-red-400',
    title: 'text-red-800 dark:text-red-200',
    text: 'text-red-700 dark:text-red-300',
  },
};

const iconPaths = {
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
};

const Alert = ({
  variant = 'info',
  title,
  message,
  dismissible = true,
  onDismiss,
}) => {
  const [visible, setVisible] = useState(true);
  const styles = variantStyles[variant];

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  if (!visible) return null;

  return (
    <div className={\`flex items-start gap-3 p-4 border-l-4 rounded-r-lg \${styles.container}\`} role="alert">
      <svg className={\`w-5 h-5 flex-shrink-0 mt-0.5 \${styles.icon}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[variant]} />
      </svg>
      <div className="flex-1 min-w-0">
        {title && <p className={\`text-sm font-semibold \${styles.title}\`}>{title}</p>}
        <p className={\`text-sm \${styles.text}\`}>{message}</p>
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          className={\`flex-shrink-0 p-1 rounded transition-opacity opacity-60 hover:opacity-100 \${styles.icon}\`}
          aria-label="Dismiss"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

// Usage example
const AlertDemo = () => (
  <div className="space-y-3 p-4">
    <Alert variant="info" title="Info" message="This is an informational alert." />
    <Alert variant="success" title="Success" message="Operation completed successfully!" />
    <Alert variant="warning" title="Warning" message="Please review before continuing." />
    <Alert variant="error" title="Error" message="Something went wrong. Please try again." />
  </div>
);

export default AlertDemo;`;

    case 'toast':
      if (isTypeScript) {
        return `// TypeScript Toast Component - Copy & Paste Ready
import { useState, useEffect, useCallback } from 'react';

type ToastVariant = 'info' | 'success' | 'warning' | 'error';
type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

type Toast = {
  id: string;
  variant: ToastVariant;
  title?: string;
  message: string;
  duration?: number;
};

type ToastProps = Toast & {
  onRemove: (id: string) => void;
};

const toastStyles: Record<ToastVariant, string> = {
  info: 'bg-blue-50 border-blue-300 dark:bg-blue-900/30 dark:border-blue-600',
  success: 'bg-green-50 border-green-300 dark:bg-green-900/30 dark:border-green-600',
  warning: 'bg-yellow-50 border-yellow-300 dark:bg-yellow-900/30 dark:border-yellow-600',
  error: 'bg-red-50 border-red-300 dark:bg-red-900/30 dark:border-red-600',
};

const toastIconColor: Record<ToastVariant, string> = {
  info: 'text-blue-500 dark:text-blue-400',
  success: 'text-green-500 dark:text-green-400',
  warning: 'text-yellow-500 dark:text-yellow-400',
  error: 'text-red-500 dark:text-red-400',
};

const ToastItem = ({ id, variant, title, message, duration = 4000, onRemove }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => onRemove(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onRemove]);

  return (
    <div className={\`flex items-start gap-3 p-4 border rounded-lg shadow-lg min-w-[280px] max-w-sm \${toastStyles[variant]}\`}>
      <span className={\`flex-shrink-0 mt-0.5 \${toastIconColor[variant]}\`}>
        {variant === 'success' && '✓'}
        {variant === 'error' && '✕'}
        {variant === 'warning' && '⚠'}
        {variant === 'info' && 'ℹ'}
      </span>
      <div className="flex-1 min-w-0">
        {title && <p className="text-sm font-semibold text-gray-900 dark:text-blue-100">{title}</p>}
        <p className="text-sm text-gray-700 dark:text-blue-200">{message}</p>
      </div>
      <button
        type="button"
        onClick={() => onRemove(id)}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>): void => {
    const id = Math.random().toString(36).slice(2);
    setToasts(prev => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string): void => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
};

const ToastContainer = ({ position = 'top-right' }: { position?: ToastPosition }) => {
  const { toasts, addToast, removeToast } = useToast();

  const positionClasses: Record<ToastPosition, string> = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  };

  return (
    <div className="p-4 space-y-3">
      <div className="flex flex-wrap gap-2">
        {(['success', 'error', 'warning', 'info'] as ToastVariant[]).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => addToast({ variant: v, title: v.charAt(0).toUpperCase() + v.slice(1), message: \`This is a \${v} toast notification!\` })}
            className="px-3 py-1.5 text-sm font-medium bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors capitalize"
          >
            {v}
          </button>
        ))}
      </div>

      {/* Toast Container */}
      <div className={\`fixed \${positionClasses[position]} z-50 space-y-2\`}>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} {...toast} onRemove={removeToast} />
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;`;
      }
      return `// Complete Toast Component - Copy & Paste Ready
import { useState, useEffect, useCallback } from 'react';

const toastStyles = {
  info: 'bg-blue-50 border-blue-300 dark:bg-blue-900/30 dark:border-blue-600',
  success: 'bg-green-50 border-green-300 dark:bg-green-900/30 dark:border-green-600',
  warning: 'bg-yellow-50 border-yellow-300 dark:bg-yellow-900/30 dark:border-yellow-600',
  error: 'bg-red-50 border-red-300 dark:bg-red-900/30 dark:border-red-600',
};

const toastIconColor = {
  info: 'text-blue-500 dark:text-blue-400',
  success: 'text-green-500 dark:text-green-400',
  warning: 'text-yellow-500 dark:text-yellow-400',
  error: 'text-red-500 dark:text-red-400',
};

const ToastItem = ({ id, variant, title, message, duration = 4000, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => onRemove(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onRemove]);

  return (
    <div className={\`flex items-start gap-3 p-4 border rounded-lg shadow-lg min-w-[280px] max-w-sm \${toastStyles[variant]}\`}>
      <span className={\`flex-shrink-0 mt-0.5 \${toastIconColor[variant]}\`}>
        {variant === 'success' && '✓'}
        {variant === 'error' && '✕'}
        {variant === 'warning' && '⚠'}
        {variant === 'info' && 'ℹ'}
      </span>
      <div className="flex-1 min-w-0">
        {title && <p className="text-sm font-semibold text-gray-900 dark:text-blue-100">{title}</p>}
        <p className="text-sm text-gray-700 dark:text-blue-200">{message}</p>
      </div>
      <button
        type="button"
        onClick={() => onRemove(id)}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = Math.random().toString(36).slice(2);
    setToasts(prev => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
};

const ToastContainer = ({ position = 'top-right' }) => {
  const { toasts, addToast, removeToast } = useToast();

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  };

  return (
    <div className="p-4 space-y-3">
      <div className="flex flex-wrap gap-2">
        {['success', 'error', 'warning', 'info'].map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => addToast({ variant: v, title: v.charAt(0).toUpperCase() + v.slice(1), message: \`This is a \${v} toast notification!\` })}
            className="px-3 py-1.5 text-sm font-medium bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors capitalize"
          >
            {v}
          </button>
        ))}
      </div>

      {/* Toast Container */}
      <div className={\`fixed \${positionClasses[position]} z-50 space-y-2\`}>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} {...toast} onRemove={removeToast} />
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;`;

    case 'modal':
      if (isTypeScript) {
        return `// TypeScript Modal Component - Copy & Paste Ready
import { useState, useEffect, useRef, KeyboardEvent } from 'react';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: ModalSize;
  closeOnBackdrop?: boolean;
  showCloseButton?: boolean;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full mx-4',
};

const Modal = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  closeOnBackdrop = true,
  showCloseButton = true,
  children,
  footer,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      dialogRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Escape') onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onKeyDown={handleKeyDown}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
        onClick={closeOnBackdrop ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        tabIndex={-1}
        className={\`relative w-full \${sizeClasses[size]} bg-white dark:bg-slate-800 rounded-xl shadow-2xl outline-none\`}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700">
            {title && (
              <h2 id="modal-title" className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="ml-auto p-1.5 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4 text-gray-700 dark:text-blue-200">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-gray-200 dark:border-slate-700 flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

// Usage example
const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="p-4">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
        size="md"
        footer={
          <>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-200 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              Confirm
            </button>
          </>
        }
      >
        <p>This is the modal body content. Add any content here.</p>
      </Modal>
    </div>
  );
};

export default ModalDemo;`;
      }
      return `// Complete Modal Component - Copy & Paste Ready
import { useState, useEffect, useRef } from 'react';

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full mx-4',
};

const Modal = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  closeOnBackdrop = true,
  showCloseButton = true,
  children,
  footer,
}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      dialogRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onKeyDown={handleKeyDown}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
        onClick={closeOnBackdrop ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        tabIndex={-1}
        className={\`relative w-full \${sizeClasses[size]} bg-white dark:bg-slate-800 rounded-xl shadow-2xl outline-none\`}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700">
            {title && (
              <h2 id="modal-title" className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="ml-auto p-1.5 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4 text-gray-700 dark:text-blue-200">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-gray-200 dark:border-slate-700 flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

// Usage example
const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
        size="md"
        footer={
          <>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-200 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              Confirm
            </button>
          </>
        }
      >
        <p>This is the modal body content. Add any content here.</p>
      </Modal>
    </div>
  );
};

export default ModalDemo;`;

    case 'popover':
      if (isTypeScript) {
        return `// TypeScript Popover Component - Copy & Paste Ready
import { useState, useRef, useEffect } from 'react';

type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right';

type PopoverProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  title?: string;
  placement?: PopoverPlacement;
  closeOnClickOutside?: boolean;
};

const placementClasses: Record<PopoverPlacement, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const arrowClasses: Record<PopoverPlacement, string> = {
  top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-200 dark:border-t-slate-600 border-l-transparent border-r-transparent border-b-transparent border-4',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-200 dark:border-b-slate-600 border-l-transparent border-r-transparent border-t-transparent border-4',
  left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-200 dark:border-l-slate-600 border-t-transparent border-b-transparent border-r-transparent border-4',
  right: 'right-full top-1/2 -translate-y-1/2 border-r-gray-200 dark:border-r-slate-600 border-t-transparent border-b-transparent border-l-transparent border-4',
};

const Popover = ({
  trigger,
  content,
  title,
  placement = 'bottom',
  closeOnClickOutside = true,
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!closeOnClickOutside) return;
    const handleClick = (e: MouseEvent): void => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [closeOnClickOutside]);

  return (
    <div className="relative inline-block" ref={containerRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div className={\`absolute z-50 \${placementClasses[placement]}\`}>
          {/* Arrow */}
          <div className={\`absolute w-0 h-0 \${arrowClasses[placement]}\`} />

          {/* Content */}
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-lg p-4 min-w-[200px] max-w-xs">
            {title && (
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-100 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-blue-100">{title}</h4>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            <div className="text-sm text-gray-600 dark:text-blue-200">{content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

// Usage example
const PopoverDemo = () => (
  <div className="flex flex-wrap gap-8 p-8 justify-center">
    {(['top', 'bottom', 'left', 'right'] as PopoverPlacement[]).map((placement) => (
      <Popover
        key={placement}
        placement={placement}
        title="Popover Title"
        trigger={
          <button className="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors capitalize">
            {placement}
          </button>
        }
        content="This is the popover content. Add any information here."
      />
    ))}
  </div>
);

export default PopoverDemo;`;
      }
      return `// Complete Popover Component - Copy & Paste Ready
import { useState, useRef, useEffect } from 'react';

const placementClasses = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const Popover = ({
  trigger,
  content,
  title,
  placement = 'bottom',
  closeOnClickOutside = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!closeOnClickOutside) return;
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [closeOnClickOutside]);

  return (
    <div className="relative inline-block" ref={containerRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div className={\`absolute z-50 \${placementClasses[placement]}\`}>
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-lg p-4 min-w-[200px] max-w-xs">
            {title && (
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-100 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-blue-100">{title}</h4>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            <div className="text-sm text-gray-600 dark:text-blue-200">{content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

// Usage example
const PopoverDemo = () => (
  <div className="flex flex-wrap gap-8 p-8 justify-center">
    {['top', 'bottom', 'left', 'right'].map((placement) => (
      <Popover
        key={placement}
        placement={placement}
        title="Popover Title"
        trigger={
          <button className="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors capitalize">
            {placement}
          </button>
        }
        content="This is the popover content. Add any information here."
      />
    ))}
  </div>
);

export default PopoverDemo;`;

    case 'tooltip':
      if (isTypeScript) {
        return `// TypeScript Tooltip Component - Copy & Paste Ready
import { useState, useRef } from 'react';

type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

type TooltipProps = {
  content: string;
  placement?: TooltipPlacement;
  delay?: number;
  children: React.ReactNode;
};

const tooltipClasses: Record<TooltipPlacement, { container: string; arrow: string }> = {
  top: {
    container: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    arrow: 'top-full left-1/2 -translate-x-1/2 border-t-gray-900 dark:border-t-slate-700 border-x-transparent border-b-transparent border-4',
  },
  bottom: {
    container: 'top-full left-1/2 -translate-x-1/2 mt-2',
    arrow: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-900 dark:border-b-slate-700 border-x-transparent border-t-transparent border-4',
  },
  left: {
    container: 'right-full top-1/2 -translate-y-1/2 mr-2',
    arrow: 'left-full top-1/2 -translate-y-1/2 border-l-gray-900 dark:border-l-slate-700 border-y-transparent border-r-transparent border-4',
  },
  right: {
    container: 'left-full top-1/2 -translate-y-1/2 ml-2',
    arrow: 'right-full top-1/2 -translate-y-1/2 border-r-gray-900 dark:border-r-slate-700 border-y-transparent border-l-transparent border-4',
  },
};

const Tooltip = ({
  content,
  placement = 'top',
  delay = 0,
  children,
}: TooltipProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { container, arrow } = tooltipClasses[placement];

  const show = (): void => {
    timerRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = (): void => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}

      {visible && (
        <div className={\`absolute z-50 pointer-events-none \${container}\`} role="tooltip">
          <div className={\`absolute w-0 h-0 \${arrow}\`} />
          <div className="bg-gray-900 dark:bg-slate-700 text-white text-xs font-medium px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-lg">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

// Usage example
const TooltipDemo = () => (
  <div className="flex flex-wrap gap-6 p-8 justify-center items-center">
    {(['top', 'bottom', 'left', 'right'] as TooltipPlacement[]).map((placement) => (
      <Tooltip key={placement} content={\`Tooltip on \${placement}\`} placement={placement}>
        <button className="px-3 py-1.5 text-sm font-medium border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-blue-200 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors capitalize">
          {placement}
        </button>
      </Tooltip>
    ))}
    <Tooltip content="Appears after 500ms" delay={500} placement="top">
      <button className="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Delayed
      </button>
    </Tooltip>
  </div>
);

export default TooltipDemo;`;
      }
      return `// Complete Tooltip Component - Copy & Paste Ready
import { useState, useRef } from 'react';

const tooltipClasses = {
  top: {
    container: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    arrow: 'top-full left-1/2 -translate-x-1/2 border-t-gray-900 dark:border-t-slate-700 border-x-transparent border-b-transparent border-4',
  },
  bottom: {
    container: 'top-full left-1/2 -translate-x-1/2 mt-2',
    arrow: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-900 dark:border-b-slate-700 border-x-transparent border-t-transparent border-4',
  },
  left: {
    container: 'right-full top-1/2 -translate-y-1/2 mr-2',
    arrow: 'left-full top-1/2 -translate-y-1/2 border-l-gray-900 dark:border-l-slate-700 border-y-transparent border-r-transparent border-4',
  },
  right: {
    container: 'left-full top-1/2 -translate-y-1/2 ml-2',
    arrow: 'right-full top-1/2 -translate-y-1/2 border-r-gray-900 dark:border-r-slate-700 border-y-transparent border-l-transparent border-4',
  },
};

const Tooltip = ({
  content,
  placement = 'top',
  delay = 0,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);
  const { container, arrow } = tooltipClasses[placement];

  const show = () => {
    timerRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}

      {visible && (
        <div className={\`absolute z-50 pointer-events-none \${container}\`} role="tooltip">
          <div className={\`absolute w-0 h-0 \${arrow}\`} />
          <div className="bg-gray-900 dark:bg-slate-700 text-white text-xs font-medium px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-lg">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

// Usage example
const TooltipDemo = () => (
  <div className="flex flex-wrap gap-6 p-8 justify-center items-center">
    {['top', 'bottom', 'left', 'right'].map((placement) => (
      <Tooltip key={placement} content={\`Tooltip on \${placement}\`} placement={placement}>
        <button className="px-3 py-1.5 text-sm font-medium border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-blue-200 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors capitalize">
          {placement}
        </button>
      </Tooltip>
    ))}
    <Tooltip content="Appears after 500ms" delay={500} placement="top">
      <button className="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Delayed
      </button>
    </Tooltip>
  </div>
);

export default TooltipDemo;`;

    case 'badge':
      if (isTypeScript) {
        return `// TypeScript Badge Component - Copy & Paste Ready

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';
type BadgeShape = 'rounded' | 'pill' | 'square';

type BadgeProps = {
  label: string | number;
  variant?: BadgeVariant;
  size?: BadgeSize;
  shape?: BadgeShape;
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-slate-300',
  primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  success: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  error: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
  info: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
};

const dotColors: Record<BadgeVariant, string> = {
  default: 'bg-gray-500',
  primary: 'bg-blue-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
  info: 'bg-purple-500',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2.5 py-0.5 text-xs',
  lg: 'px-3 py-1 text-sm',
};

const shapeClasses: Record<BadgeShape, string> = {
  rounded: 'rounded-md',
  pill: 'rounded-full',
  square: 'rounded-none',
};

const Badge = ({
  label,
  variant = 'default',
  size = 'md',
  shape = 'pill',
  dot = false,
  removable = false,
  onRemove,
}: BadgeProps) => {
  return (
    <span
      className={\`inline-flex items-center gap-1 font-medium \${variantClasses[variant]} \${sizeClasses[size]} \${shapeClasses[shape]}\`}
    >
      {dot && <span className={\`w-1.5 h-1.5 rounded-full flex-shrink-0 \${dotColors[variant]}\`} />}
      {label}
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-0.5 hover:opacity-75 transition-opacity flex-shrink-0"
          aria-label="Remove"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
};

// Usage example
const BadgeDemo = () => (
  <div className="space-y-6 p-4">
    {/* Variants */}
    <div>
      <p className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-3">Variants</p>
      <div className="flex flex-wrap gap-2">
        {(['default', 'primary', 'success', 'warning', 'error', 'info'] as BadgeVariant[]).map(v => (
          <Badge key={v} label={v} variant={v} />
        ))}
      </div>
    </div>

    {/* With dot */}
    <div>
      <p className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-3">With Dot</p>
      <div className="flex flex-wrap gap-2">
        {(['success', 'error', 'warning'] as BadgeVariant[]).map(v => (
          <Badge key={v} label={v} variant={v} dot />
        ))}
      </div>
    </div>

    {/* Sizes */}
    <div>
      <p className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-3">Sizes</p>
      <div className="flex flex-wrap items-center gap-2">
        <Badge label="Small" variant="primary" size="sm" />
        <Badge label="Medium" variant="primary" size="md" />
        <Badge label="Large" variant="primary" size="lg" />
      </div>
    </div>

    {/* Removable */}
    <div>
      <p className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-3">Removable</p>
      <div className="flex flex-wrap gap-2">
        <Badge label="React" variant="primary" removable onRemove={() => console.log('removed')} />
        <Badge label="TypeScript" variant="info" removable onRemove={() => console.log('removed')} />
        <Badge label="Tailwind" variant="success" removable onRemove={() => console.log('removed')} />
      </div>
    </div>
  </div>
);

export default BadgeDemo;`;
      }
      return `// Complete Badge Component - Copy & Paste Ready

const variantClasses = {
  default: 'bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-slate-300',
  primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  success: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  error: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
  info: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
};

const dotColors = {
  default: 'bg-gray-500',
  primary: 'bg-blue-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
  info: 'bg-purple-500',
};

const sizeClasses = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2.5 py-0.5 text-xs',
  lg: 'px-3 py-1 text-sm',
};

const shapeClasses = {
  rounded: 'rounded-md',
  pill: 'rounded-full',
  square: 'rounded-none',
};

const Badge = ({
  label,
  variant = 'default',
  size = 'md',
  shape = 'pill',
  dot = false,
  removable = false,
  onRemove,
}) => {
  return (
    <span
      className={\`inline-flex items-center gap-1 font-medium \${variantClasses[variant]} \${sizeClasses[size]} \${shapeClasses[shape]}\`}
    >
      {dot && <span className={\`w-1.5 h-1.5 rounded-full flex-shrink-0 \${dotColors[variant]}\`} />}
      {label}
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-0.5 hover:opacity-75 transition-opacity flex-shrink-0"
          aria-label="Remove"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
};

// Usage example
const BadgeDemo = () => (
  <div className="space-y-6 p-4">
    {/* Variants */}
    <div>
      <p className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-3">Variants</p>
      <div className="flex flex-wrap gap-2">
        {['default', 'primary', 'success', 'warning', 'error', 'info'].map(v => (
          <Badge key={v} label={v} variant={v} />
        ))}
      </div>
    </div>

    {/* With dot */}
    <div>
      <p className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-3">With Dot</p>
      <div className="flex flex-wrap gap-2">
        {['success', 'error', 'warning'].map(v => (
          <Badge key={v} label={v} variant={v} dot />
        ))}
      </div>
    </div>

    {/* Sizes */}
    <div>
      <p className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-3">Sizes</p>
      <div className="flex flex-wrap items-center gap-2">
        <Badge label="Small" variant="primary" size="sm" />
        <Badge label="Medium" variant="primary" size="md" />
        <Badge label="Large" variant="primary" size="lg" />
      </div>
    </div>

    {/* Removable */}
    <div>
      <p className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-3">Removable</p>
      <div className="flex flex-wrap gap-2">
        <Badge label="React" variant="primary" removable onRemove={() => console.log('removed')} />
        <Badge label="TypeScript" variant="info" removable onRemove={() => console.log('removed')} />
        <Badge label="Tailwind" variant="success" removable onRemove={() => console.log('removed')} />
      </div>
    </div>
  </div>
);

export default BadgeDemo;`;

    default:
      if (isTypeScript) {
        return `// TypeScript ${selectedComponent.name} Component - Copy & Paste Ready
import { useState } from 'react';

type ${selectedComponent.name.replace(/\s+/g, '')}Props = {
  message?: string;
  onClose?: () => void;
};

const ${selectedComponent.name.replace(/\s+/g, '')} = ({
  message = 'Feedback message',
  onClose,
}: ${selectedComponent.name.replace(/\s+/g, '')}Props) => {
  const [visible, setVisible] = useState<boolean>(true);

  const handleClose = (): void => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
      <p className="text-sm text-blue-700 dark:text-blue-300">{message}</p>
      <button
        type="button"
        onClick={handleClose}
        className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default ${selectedComponent.name.replace(/\s+/g, '')};`;
      }
      return `// Complete ${selectedComponent.name} Component - Copy & Paste Ready
import { useState } from 'react';

const ${selectedComponent.name.replace(/\s+/g, '')} = ({
  message = 'Feedback message',
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
      <p className="text-sm text-blue-700 dark:text-blue-300">{message}</p>
      <button
        type="button"
        onClick={handleClose}
        className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default ${selectedComponent.name.replace(/\s+/g, '')};`;
  }
};
