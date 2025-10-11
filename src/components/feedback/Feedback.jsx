import React from 'react';
import FeedbackElementRenderer from './FeedbackElementRenderer';

const Feedback = ({ feedbackType }) => {
  return <FeedbackElementRenderer feedbackType={feedbackType} />;
};

export default Feedback;
