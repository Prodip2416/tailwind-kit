import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSidebar } from '../contexts/SidebarContext';

const Sidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const [expandedCategories, setExpandedCategories] = useState(
    new Set(['inputs', 'feedback', 'dragdrop'])
  );
  const location = useLocation();
  const navigate = useNavigate();

  const componentCategories = [
    {
      id: 'inputs',
      name: 'Inputs',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      href: '/inputs',
      components: [
        { name: 'Text Input', href: '/inputs#text' },
        { name: 'Email Input', href: '/inputs#email' },
        { name: 'Password Input', href: '/inputs#password' },
        { name: 'Number Input', href: '/inputs#number' },
        { name: 'Textarea', href: '/inputs#textarea' },
        { name: 'Select Dropdown', href: '/inputs#select' },
        { name: 'Checkbox', href: '/inputs#checkbox' },
        { name: 'Radio Buttons', href: '/inputs#radio' },
        { name: 'Range Slider', href: '/inputs#range' },
        { name: 'Date Input', href: '/inputs#date' },
        { name: 'Time Input', href: '/inputs#time' },
        { name: 'File Upload', href: '/inputs#file' },
        { name: 'Date Range Picker', href: '/inputs#dateRange' },
        { name: 'Rate Input', href: '/inputs#rate' },
        { name: 'Switch Input', href: '/inputs#switch' },
        { name: 'Tree Select', href: '/inputs#treeSelect' },
      ],
    },
    {
      id: 'notifications',
      name: 'Notifications',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-5 5v-5zM4.5 5.653c0-.856.917-1.398 1.667-.986l7.8 4.2a1.125 1.125 0 010 1.971l-7.8 4.2c-.75.404-1.667-.13-1.667-.986V5.653z"
          />
        </svg>
      ),
      href: '/notifications',
      components: [
        { name: 'Alert', href: '/notifications#alert' },
        { name: 'Toast', href: '/notifications#toast' },
        { name: 'Modal', href: '/notifications#modal' },
        { name: 'Popover', href: '/notifications#popover' },
        { name: 'Tooltip', href: '/notifications#tooltip' },
        { name: 'Loading', href: '/notifications#loading' },
        { name: 'Progress', href: '/notifications#progress' },
      ],
    },
    {
      id: 'data-display',
      name: 'Data Display',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      href: '/data-display',
      components: [
        { name: 'Table', href: '/data-display#table' },
        { name: 'Card', href: '/data-display#card' },
        { name: 'List', href: '/data-display#list' },
        { name: 'Grid', href: '/data-display#grid' },
        { name: 'Chart', href: '/data-display#chart' },
        { name: 'Stat', href: '/data-display#stat' },
        { name: 'Timeline', href: '/data-display#timeline' },
        { name: 'Avatar', href: '/data-display#avatar' },
      ],
    },
    {
      id: 'forms',
      name: 'Forms',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      href: '/forms',
      components: [
        { name: 'Validation Form', href: '/forms/validation' },
        { name: 'Wizard Form', href: '/forms/wizard' },
        { name: 'Multi-Step Form', href: '/forms/multistep' },
        { name: 'Search Form', href: '/forms/search' },
        { name: 'Filter Form', href: '/forms/filter' },
      ],
    },
    {
      id: 'navigation',
      name: 'Navigation',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ),
      href: '/navigation',
      components: [
        { name: 'Navbar', href: '/navigation/navbar' },
        { name: 'Breadcrumb', href: '/navigation/breadcrumb' },
        { name: 'Pagination', href: '/navigation/pagination' },
        { name: 'Tabs', href: '/navigation/tabs' },
        { name: 'Menu', href: '/navigation/menu' },
      ],
    },
    {
      id: 'layout',
      name: 'Layout',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
      href: '/layout',
      components: [
        { name: 'Header', href: '/layout/header' },
        { name: 'Footer', href: '/layout/footer' },
        { name: 'Sidebar', href: '/layout/sidebar' },
        { name: 'Grid', href: '/layout/grid' },
        { name: 'Container', href: '/layout/container' },
        { name: 'Card', href: '/layout/card' },
      ],
    },
    {
      id: 'feedback',
      name: 'Feedback',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      href: '/feedback',
      components: [
        { name: 'Alert', href: '/feedback/alert' },
        { name: 'Toast', href: '/feedback/toast' },
        { name: 'Modal', href: '/feedback/modal' },
        { name: 'Popover', href: '/feedback/popover' },
        { name: 'Tooltip', href: '/feedback/tooltip' },
        { name: 'Badge', href: '/feedback/badge' },
      ],
    },
    {
      id: 'dragdrop',
      name: 'Drag & Drop',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      ),
      href: '/dragdrop',
      components: [
        { name: 'Sortable List', href: '/dragdrop#sortable-list' },
        { name: 'Drag & Drop Cards', href: '/dragdrop#drag-drop-cards' },
        { name: 'File Drop Zone', href: '/dragdrop#file-drop-zone' },
        { name: 'Kanban Board', href: '/dragdrop#kanban-board' },
      ],
    },
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => {
      const newExpanded = new Set();
      // If clicking the same category, toggle it
      if (prev.has(categoryId)) {
        // Close it (empty set)
        return newExpanded;
      } else {
        // Open only this category (close all others)
        newExpanded.add(categoryId);
        return newExpanded;
      }
    });
  };

  const handleCategoryClick = (category) => {
    // Navigate to the category page
    navigate(category.href);
    // Also expand the category to show submenu
    if (category.components.length > 0) {
      toggleCategory(category.id);
    }
  };

  const isCategoryActive = (category) => {
    return (
      location.pathname === category.href ||
      (category.id === 'forms' && location.pathname.startsWith('/forms/')) ||
      (category.id === 'navigation' &&
        location.pathname.startsWith('/navigation/')) ||
      (category.id === 'layout' && location.pathname.startsWith('/layout/')) ||
      (category.id === 'feedback' && location.pathname.startsWith('/feedback/')) ||
      (category.id === 'dragdrop' && location.pathname.startsWith('/dragdrop'))
    );
  };

  return (
    <div
      className={`bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 transition-all duration-300 flex flex-col h-screen fixed left-0 top-0 z-30 shadow-xl ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Sidebar Header - Fixed */}
      <div className="p-4 border-b border-gray-200 dark:border-slate-700 flex-shrink-0">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
           <Link to="/" className="flex items-center space-x-3">
             <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TK</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-blue-100">
                  TailwindKit
                </h2>
                <p className="text-xs text-gray-500 dark:text-blue-300">
                  UI Components
                </p>
              </div>
            </div>
           </Link>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            <svg
              className="w-4 h-4 text-gray-600 dark:text-blue-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation - Scrollable */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full relative">
        {/* Subtle gradient overlay for better visual appeal */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white dark:from-slate-900 to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none z-10"></div>
        {componentCategories.map((category) => (
          <div key={category.id}>
            <button
              onClick={() => handleCategoryClick(category)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isCategoryActive(category)
                  ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 border-l-4 border-blue-500 dark:border-blue-400'
                  : 'text-gray-700 dark:text-blue-200 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className={`${isCollapsed ? 'mx-auto' : ''}`}>
                  {category.icon}
                </span>
                {!isCollapsed && <span>{category.name}</span>}
              </div>
              {!isCollapsed && (
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    expandedCategories.has(category.id) ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>

            {/* Sub-menu */}
            {!isCollapsed && expandedCategories.has(category.id) && (
              <div className="ml-6 mt-2 space-y-1 border-l-2 border-gray-200 dark:border-slate-700 pl-3">
                {category.components.map((component, index) => (
                  <Link
                    key={index}
                    to={component.href}
                    className={`block px-3 py-1.5 text-xs rounded-md transition-colors ${
                      location.pathname + location.hash === component.href || 
                      (component.href.includes('#') && location.pathname === component.href.split('#')[0] && location.hash === '#' + component.href.split('#')[1])
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 font-semibold border-l-2 border-blue-500 dark:border-blue-400'
                        : 'text-gray-600 dark:text-blue-300 hover:text-gray-900 dark:hover:text-blue-100 hover:bg-gray-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {component.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Sidebar Footer - Fixed */}
      <div className="p-4 border-t border-gray-200 dark:border-slate-700 flex-shrink-0">
        {!isCollapsed && (
          <div className="text-xs text-gray-500 dark:text-blue-300 text-center">
            <p>Built with React & Tailwind CSS</p>
            <p className="mt-1">v1.0.0</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
