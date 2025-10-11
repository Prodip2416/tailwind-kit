import React from 'react';
import { Alert, Toast, Modal, Popover, Tooltip, Badge } from './index';

const FeedbackElementRenderer = ({ feedbackType }) => {
  const renderFeedbackComponent = () => {
    switch (feedbackType) {
      case 'alert':
        return <Alert />;
      case 'toast':
        return <Toast />;
      case 'modal':
        return <Modal />;
      case 'popover':
        return <Popover />;
      case 'tooltip':
        return <Tooltip />;
      case 'badge':
        return <Badge />;
      default:
        return <div>Component not found</div>;
    }
  };

  return <div className="p-6">{renderFeedbackComponent()}</div>;
};

export default FeedbackElementRenderer;
