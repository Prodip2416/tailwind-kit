import React from 'react';
import Navbar from './navbar/Navbar';
import Breadcrumb from './breadcrumb/Breadcrumb';
import Pagination from './pagination/Pagination';
import Tabs from './tabs/Tabs';
import Menu from './menu/Menu';

const NavigationElementRenderer = ({ componentId, navigationData }) => {
  const renderNavigationComponent = () => {
    switch (componentId) {
      case 'navbar':
        return <Navbar />;
      case 'breadcrumb':
        return <Breadcrumb />;
      case 'pagination':
        return <Pagination />;
      case 'tabs':
        return <Tabs />;
      case 'menu':
        return <Menu />;
      default:
        return <div>Navigation component not found</div>;
    }
  };

  return <div className="w-full">{renderNavigationComponent()}</div>;
};

export default NavigationElementRenderer;
