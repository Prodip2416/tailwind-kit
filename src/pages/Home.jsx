import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Components', value: '80+', icon: '🧩' },
    { label: 'Categories', value: '8', icon: '📁' },
    { label: 'Examples', value: '200+', icon: '💡' },
    { label: 'Dependencies', value: '0', icon: '⚡' }
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with Vite for instant HMR and optimized builds',
      color: 'blue'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Crafted with Tailwind CSS for stunning, responsive designs',
      color: 'green'
    },
    {
      icon: '🌙',
      title: 'Dark Mode',
      description: 'Built-in dark/light theme with smooth transitions',
      color: 'purple'
    },
    {
      icon: '♿',
      title: 'Accessible',
      description: 'WCAG compliant components with keyboard navigation',
      color: 'orange'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Mobile-first design that works on all devices',
      color: 'pink'
    },
    {
      icon: '🖱️',
      title: 'Interactive',
      description: 'Advanced drag & drop, forms, and interactive components',
      color: 'indigo'
    }
  ];

  const componentCategories = [
    {
      name: 'Data Display',
      description: 'Tables, cards, charts, and data visualization',
      icon: '📊',
      href: '/data-display',
      count: '12 components'
    },
    {
      name: 'Feedback',
      description: 'Alerts, modals, toasts, and user notifications',
      icon: '💬',
      href: '/feedback',
      count: '6 components'
    },
    {
      name: 'Forms',
      description: 'Inputs, validation, wizards, and form controls',
      icon: '📝',
      href: '/forms',
      count: '5 components'
    },
    {
      name: 'Inputs',
      description: 'Text fields, checkboxes, selects, and input controls',
      icon: '⌨️',
      href: '/inputs',
      count: '16 components'
    },
    {
      name: 'Layout',
      description: 'Containers, headers, footers, and layout components',
      icon: '🏗️',
      href: '/layout',
      count: '5 components'
    },
    {
      name: 'Navigation',
      description: 'Menus, breadcrumbs, pagination, and navigation',
      icon: '🧭',
      href: '/navigation',
      count: '5 components'
    },
    {
      name: 'Drag & Drop',
      description: 'Sortable lists, kanban boards, and file uploads',
      icon: '🖱️',
      href: '/dragdrop',
      count: '4 components'
    },
    {
      name: 'Notifications',
      description: 'Alerts, loading states, and notification systems',
      icon: '🔔',
      href: '/notifications',
      count: '7 components'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-emerald-900/30 text-green-600 dark:text-emerald-400',
      purple: 'bg-purple-100 dark:bg-violet-900/30 text-purple-600 dark:text-violet-400',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            {/* Logo and Title */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-blue-100 mb-6">
              TailwindKit
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-blue-200 mb-4">
              Modern UI Component Library
            </p>
            <p className="text-lg text-gray-500 dark:text-blue-300 max-w-3xl mx-auto mb-12">
              A comprehensive collection of 80+ beautiful, responsive UI components built with React and Tailwind CSS. 
              Copy-paste ready components for modern web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/data-display"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore Components
              </Link>
              <Link
                to="/dragdrop"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-blue-100 font-semibold rounded-lg shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-700 transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Try Drag & Drop
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-blue-100">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-blue-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-blue-100 mb-4">
              Why Choose TailwindKit?
            </h2>
            <p className="text-lg text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
              Built with modern web technologies and best practices for the best developer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className={`w-12 h-12 ${getColorClasses(feature.color)} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-blue-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-blue-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Component Categories Section */}
      <div className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-blue-100 mb-4">
              Component Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
              Explore our comprehensive collection of UI components organized by functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {componentCategories.map((category, index) => (
              <Link
                key={index}
                to={category.href}
                className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 border border-gray-200 dark:border-slate-700"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-blue-200 mb-3">
                    {category.description}
                  </p>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {category.count}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-blue-100 mb-4">
              Built with Modern Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
              Powered by the latest web technologies for optimal performance and developer experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13H6v-2h12v2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2">React 19</h3>
              <p className="text-sm text-gray-600 dark:text-blue-200">Modern React with hooks</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13H6v-2h12v2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2">Tailwind CSS</h3>
              <p className="text-sm text-gray-600 dark:text-blue-200">Utility-first CSS framework</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13H6v-2h12v2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2">Vite</h3>
              <p className="text-sm text-gray-600 dark:text-blue-200">Lightning-fast build tool</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13H6v-2h12v2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2">TypeScript Ready</h3>
              <p className="text-sm text-gray-600 dark:text-blue-200">Type-safe development</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Amazing UIs?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start building with our comprehensive component library today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/data-display"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Started
            </Link>
            <a
              href="https://github.com/your-username/tailwind-kit-github"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;