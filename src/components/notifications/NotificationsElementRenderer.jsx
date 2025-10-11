import { useState } from 'react';
import Alert from './alerts/Alert';
import Toast from './toasts/Toast';
import Modal from './modals/Modal';
import Popover from './popovers/Popover';
import Tooltip from './tooltips/Tooltip';
import Loading from './loading/Loading';
import Progress, { CircularProgress } from './progress/Progress';

const NotificationsElementRenderer = ({
  componentId,
  formData,
  handleInputChange,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [showInfoToast, setShowInfoToast] = useState(false);
  const [showWarningToast, setShowWarningToast] = useState(false);

  switch (componentId) {
    case 'alert':
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
          <Alert
            type="warning"
            title="Warning"
            message="Please review your input before proceeding."
            dismissible={true}
          />
          <Alert
            type="info"
            title="Information"
            message="Here's some helpful information for you."
            dismissible={true}
          />
        </div>
      );

    case 'toast':
      return (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setShowSuccessToast(true);
                setTimeout(() => setShowSuccessToast(false), 3000);
              }}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Show Success Toast
            </button>
            <button
              onClick={() => {
                setShowErrorToast(true);
                setTimeout(() => setShowErrorToast(false), 3000);
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Show Error Toast
            </button>
            <button
              onClick={() => {
                setShowInfoToast(true);
                setTimeout(() => setShowInfoToast(false), 3000);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Show Info Toast
            </button>
            <button
              onClick={() => {
                setShowWarningToast(true);
                setTimeout(() => setShowWarningToast(false), 3000);
              }}
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
            >
              Show Warning Toast
            </button>
          </div>
          
          {showSuccessToast && (
            <Toast
              type="success"
              title="Success!"
              message="Your action was completed successfully."
              duration={3000}
              position="top-right"
              onClose={() => setShowSuccessToast(false)}
            />
          )}
          
          {showErrorToast && (
            <Toast
              type="error"
              title="Error"
              message="Something went wrong. Please try again."
              duration={3000}
              position="top-right"
              onClose={() => setShowErrorToast(false)}
            />
          )}
          
          {showInfoToast && (
            <Toast
              type="info"
              title="Information"
              message="Here's some useful information for you."
              duration={3000}
              position="top-right"
              onClose={() => setShowInfoToast(false)}
            />
          )}
          
          {showWarningToast && (
            <Toast
              type="warning"
              title="Warning"
              message="Please check your input before proceeding."
              duration={3000}
              position="top-right"
              onClose={() => setShowWarningToast(false)}
            />
          )}
        </div>
      );

    case 'modal':
      return (
        <div className="space-y-4">
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
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-blue-300">
                  This is an example modal dialog. You can put any content here.
                </p>
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-blue-100 mb-2">
                    Modal Content
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-blue-300">
                    This modal demonstrates how to display important information
                    or collect user input in a focused interface.
                  </p>
                </div>
              </div>
            </Modal>
          )}
        </div>
      );

    case 'popover':
      return (
        <div className="space-y-4">
          <div className="flex space-x-4">
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

            <Popover
              trigger={
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                  Hover Popover
                </button>
              }
              title="Hover Popover"
              placement="top"
              triggerType="hover"
            >
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-blue-300">
                  This popover appears on hover.
                </p>
                <div className="text-xs text-gray-500 dark:text-blue-400">
                  Hover to see this content
                </div>
              </div>
            </Popover>
          </div>
        </div>
      );

    case 'tooltip':
      return (
        <div className="space-y-4">
          <div className="flex space-x-4">
            <Tooltip content="This is a tooltip on the top" placement="top">
              <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                Top Tooltip
              </button>
            </Tooltip>

            <Tooltip
              content="This is a tooltip on the bottom"
              placement="bottom"
            >
              <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                Bottom Tooltip
              </button>
            </Tooltip>

            <Tooltip content="This is a tooltip on the left" placement="left">
              <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                Left Tooltip
              </button>
            </Tooltip>

            <Tooltip content="This is a tooltip on the right" placement="right">
              <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                Right Tooltip
              </button>
            </Tooltip>
          </div>

          <div className="mt-6">
            <Tooltip content="Hover over this text to see a tooltip">
              <span className="text-blue-600 dark:text-blue-400 cursor-pointer underline">
                Hover over this text
              </span>
            </Tooltip>
          </div>
        </div>
      );

    case 'loading':
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Spinner Loading
            </h4>
            <div className="flex space-x-4">
              <Loading type="spinner" size="sm" color="blue" text="Small" />
              <Loading type="spinner" size="md" color="green" text="Medium" />
              <Loading type="spinner" size="lg" color="purple" text="Large" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Dots Loading
            </h4>
            <div className="flex space-x-4">
              <Loading type="dots" size="sm" color="blue" text="Loading" />
              <Loading type="dots" size="md" color="red" text="Processing" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Pulse Loading
            </h4>
            <div className="flex space-x-4">
              <Loading type="pulse" size="sm" color="yellow" text="Pulse" />
              <Loading type="bars" size="md" color="purple" text="Bars" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Skeleton Loading
            </h4>
            <Loading type="skeleton" size="md" color="gray" text="" />
          </div>
        </div>
      );

    case 'progress':
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Linear Progress
            </h4>
            <div className="space-y-3">
              <Progress value={25} color="blue" label="Basic Progress" />
              <Progress value={50} color="green" label="Half Complete" />
              <Progress value={75} color="purple" label="Almost Done" />
              <Progress value={100} color="red" label="Complete" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Circular Progress
            </h4>
            <div className="flex space-x-6">
              <CircularProgress value={25} size="sm" color="blue" />
              <CircularProgress value={50} size="md" color="green" />
              <CircularProgress value={75} size="lg" color="purple" />
              <CircularProgress value={100} size="xl" color="red" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-blue-200">
              Animated Progress
            </h4>
            <div className="space-y-3">
              <Progress
                value={60}
                color="blue"
                animated
                striped
                label="Animated Striped"
              />
              <Progress
                value={80}
                color="green"
                animated
                label="Animated Progress"
              />
            </div>
          </div>
        </div>
      );

    default:
      return <div>Component not found</div>;
  }
};

export default NotificationsElementRenderer;
