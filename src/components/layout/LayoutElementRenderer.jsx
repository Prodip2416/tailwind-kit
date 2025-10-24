import React from 'react';
import { Header, Footer, Grid, Container, Card } from './index';
import Sidebar from '../Sidebar';

const LayoutElementRenderer = ({ layoutType }) => {
  const renderLayoutComponent = (type) => {
    switch (type) {
      case 'header':
        return <Header />;
      case 'footer':
        return <Footer />;
      case 'sidebar':
        return <Sidebar />;
      case 'grid':
        return <Grid />;
      case 'container':
        return <Container />;
      case 'card':
        return <Card />;
      default:
        return <div>Layout component not found</div>;
    }
  };

  return <div className="space-y-6">{renderLayoutComponent(layoutType)}</div>;
};

export default LayoutElementRenderer;
