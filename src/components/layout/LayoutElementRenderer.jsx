import React, { useState } from 'react';
import { Header, Footer, Grid, Container, Card } from './index';

const SidebarDemo = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'analytics', label: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'messages', label: 'Messages', badge: 4, icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    { id: 'settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  ];

  return (
    <div className="flex h-64 border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden">
      <div className={`flex flex-col bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 transition-all duration-300 ${isCollapsed ? 'w-14' : 'w-48'}`}>
        <div className="flex items-center justify-between h-12 px-3 border-b border-gray-200 dark:border-slate-700 flex-shrink-0">
          {!isCollapsed && (
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 truncate">MyApp</span>
          )}
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isCollapsed ? 'M13 5l7 7-7 7M5 5l7 7-7 7' : 'M11 19l-7-7 7-7m8 14l-7-7 7-7'} />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-2 space-y-0.5 px-1.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItem(item.id)}
              title={isCollapsed ? item.label : undefined}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-xs font-medium transition-colors ${
                activeItem === item.id
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                  : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {!isCollapsed && (
                <>
                  <span className="flex-1 text-left truncate">{item.label}</span>
                  {item.badge && (
                    <span className="bg-blue-600 text-white text-xs px-1 py-0.5 rounded-full leading-none">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 bg-gray-50 dark:bg-slate-900 p-4">
        <p className="text-sm text-gray-500 dark:text-slate-400">Main content area</p>
        <p className="text-xs text-gray-400 dark:text-slate-500 mt-1">Click the arrow to collapse/expand sidebar</p>
      </div>
    </div>
  );
};

const LayoutElementRenderer = ({ layoutType }) => {
  const renderLayoutComponent = (type) => {
    switch (type) {
      case 'header':
        return <Header />;
      case 'footer':
        return <Footer />;
      case 'sidebar':
        return <SidebarDemo />;
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
