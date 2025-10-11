import React from 'react';
import LayoutElementRenderer from './LayoutElementRenderer';

const Layout = ({ layoutType }) => {
  if (layoutType) {
    return <LayoutElementRenderer layoutType={layoutType} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Layout Components
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Beautiful layout components for structuring your application
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">📋</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Header
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Navigation headers and top bars for your application
          </p>
          <div className="space-y-2 text-sm text-gray-500 dark:text-gray-500">
            <div>• Default Header</div>
            <div>• Centered Header</div>
            <div>• Minimal Header</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🦶</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Footer
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Page footers and bottom sections with links and information
          </p>
          <div className="space-y-2 text-sm text-gray-500 dark:text-gray-500">
            <div>• Default Footer</div>
            <div>• Simple Footer</div>
            <div>• Minimal Footer</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Sidebar
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Navigation sidebars and panels for organizing content
          </p>
          <div className="space-y-2 text-sm text-gray-500 dark:text-gray-500">
            <div>• Default Sidebar</div>
            <div>• Collapsible Sidebar</div>
            <div>• Minimal Sidebar</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🔲</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Grid
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Grid layouts and responsive containers for organizing content
          </p>
          <div className="space-y-2 text-sm text-gray-500 dark:text-gray-500">
            <div>• Default Grid</div>
            <div>• Masonry Grid</div>
            <div>• Responsive Grid</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Container
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Content containers and wrappers for different layouts
          </p>
          <div className="space-y-2 text-sm text-gray-500 dark:text-gray-500">
            <div>• Default Container</div>
            <div>• Narrow Container</div>
            <div>• Wide Container</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🃏</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Card
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Card components and content blocks for displaying information
          </p>
          <div className="space-y-2 text-sm text-gray-500 dark:text-gray-500">
            <div>• Default Card</div>
            <div>• Profile Card</div>
            <div>• Stats Card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
