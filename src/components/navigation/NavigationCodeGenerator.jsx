// Navigation Code Generator
export const generateNavigationCodeExample = (selectedComponent, language = 'js') => {
  if (!selectedComponent) return '';

  const normalizedLanguage = String(language || 'js').toLowerCase();
  const isTypeScript =
    normalizedLanguage === 'ts' ||
    normalizedLanguage === 'tsx' ||
    normalizedLanguage === 'typescript';

  const componentId = selectedComponent.id;

  switch (componentId) {
    case 'navbar':
      if (isTypeScript) {
        return `// TypeScript Navbar Component - Copy & Paste Ready
import { useState } from 'react';

type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};

type NavbarProps = {
  brand?: string;
  links?: NavLink[];
};

const Navbar = ({ brand = 'MyApp', links = [] }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('Home');

  const defaultLinks: NavLink[] = links.length > 0 ? links : [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-md border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {brand}
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {defaultLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={\`px-3 py-2 rounded-md text-sm font-medium transition-colors \${
                  activeLink === link.label
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }\`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200 dark:border-slate-700">
            {defaultLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => { setActiveLink(link.label); setIsMenuOpen(false); }}
                className={\`block px-3 py-2 rounded-md text-sm font-medium transition-colors \${
                  activeLink === link.label
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }\`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;`;
      }
      return `// Complete Navbar Component - Copy & Paste Ready
import { useState } from 'react';

const Navbar = ({ brand = 'MyApp', links = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const defaultLinks = links.length > 0 ? links : [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-md border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {brand}
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {defaultLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={\`px-3 py-2 rounded-md text-sm font-medium transition-colors \${
                  activeLink === link.label
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }\`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200 dark:border-slate-700">
            {defaultLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => { setActiveLink(link.label); setIsMenuOpen(false); }}
                className={\`block px-3 py-2 rounded-md text-sm font-medium transition-colors \${
                  activeLink === link.label
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }\`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;`;

    case 'breadcrumb':
      if (isTypeScript) {
        return `// TypeScript Breadcrumb Component - Copy & Paste Ready
import { Fragment } from 'react';

type BreadcrumbItem = {
  label: string;
  href?: string;
  icon?: boolean;
};

type BreadcrumbProps = {
  items?: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const defaultItems: BreadcrumbItem[] = items ?? [
    { label: 'Home', href: '/', icon: true },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptops' },
  ];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {defaultItems.map((item, index) => {
          const isLast = index === defaultItems.length - 1;

          return (
            <Fragment key={index}>
              <li className="flex items-center">
                {item.href && !isLast ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline transition-colors"
                  >
                    {item.icon && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )}
                    {item.label}
                  </a>
                ) : (
                  <span
                    className={isLast
                      ? 'text-gray-900 dark:text-blue-100 font-medium'
                      : 'text-gray-500 dark:text-slate-400'}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="text-gray-400 dark:text-slate-500 select-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;`;
      }
      return `// Complete Breadcrumb Component - Copy & Paste Ready
import { Fragment } from 'react';

const Breadcrumb = ({ items }) => {
  const defaultItems = items ?? [
    { label: 'Home', href: '/', icon: true },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptops' },
  ];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {defaultItems.map((item, index) => {
          const isLast = index === defaultItems.length - 1;

          return (
            <Fragment key={index}>
              <li className="flex items-center">
                {item.href && !isLast ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline transition-colors"
                  >
                    {item.icon && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )}
                    {item.label}
                  </a>
                ) : (
                  <span
                    className={isLast
                      ? 'text-gray-900 dark:text-blue-100 font-medium'
                      : 'text-gray-500 dark:text-slate-400'}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="text-gray-400 dark:text-slate-500 select-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;`;

    case 'pagination':
      if (isTypeScript) {
        return `// TypeScript Pagination Component - Copy & Paste Ready
import { useState } from 'react';

type PaginationProps = {
  totalItems?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
};

const Pagination = ({
  totalItems = 100,
  itemsPerPage = 10,
  onPageChange,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number): void => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const getVisiblePages = (): (number | '...')[] => {
    const delta = 2;
    const pages: (number | '...')[] = [];
    const rangeStart = Math.max(2, currentPage - delta);
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);
    if (rangeStart > 2) pages.push('...');
    for (let i = rangeStart; i <= rangeEnd; i++) pages.push(i);
    if (rangeEnd < totalPages - 1) pages.push('...');
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-600 dark:text-slate-400">
        Showing <span className="font-medium text-gray-900 dark:text-blue-100">{startItem}</span>
        {' '}–{' '}
        <span className="font-medium text-gray-900 dark:text-blue-100">{endItem}</span>
        {' '}of{' '}
        <span className="font-medium text-gray-900 dark:text-blue-100">{totalItems}</span> results
      </p>

      <nav className="flex items-center gap-1" aria-label="Pagination">
        {/* Prev */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Prev
        </button>

        {/* Page Numbers */}
        {getVisiblePages().map((page, idx) =>
          page === '...' ? (
            <span key={\`ellipsis-\${idx}\`} className="px-3 py-2 text-sm text-gray-400 dark:text-slate-500">
              …
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(page as number)}
              className={\`px-3 py-2 text-sm font-medium rounded-md transition-colors \${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }\`}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          Next
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Pagination;`;
      }
      return `// Complete Pagination Component - Copy & Paste Ready
import { useState } from 'react';

const Pagination = ({
  totalItems = 100,
  itemsPerPage = 10,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const getVisiblePages = () => {
    const delta = 2;
    const pages = [];
    const rangeStart = Math.max(2, currentPage - delta);
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);
    if (rangeStart > 2) pages.push('...');
    for (let i = rangeStart; i <= rangeEnd; i++) pages.push(i);
    if (rangeEnd < totalPages - 1) pages.push('...');
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-600 dark:text-slate-400">
        Showing <span className="font-medium text-gray-900 dark:text-blue-100">{startItem}</span>
        {' '}–{' '}
        <span className="font-medium text-gray-900 dark:text-blue-100">{endItem}</span>
        {' '}of{' '}
        <span className="font-medium text-gray-900 dark:text-blue-100">{totalItems}</span> results
      </p>

      <nav className="flex items-center gap-1" aria-label="Pagination">
        {/* Prev */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Prev
        </button>

        {/* Page Numbers */}
        {getVisiblePages().map((page, idx) =>
          page === '...' ? (
            <span key={\`ellipsis-\${idx}\`} className="px-3 py-2 text-sm text-gray-400 dark:text-slate-500">
              …
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={\`px-3 py-2 text-sm font-medium rounded-md transition-colors \${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }\`}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          Next
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Pagination;`;

    case 'tabs':
      if (isTypeScript) {
        return `// TypeScript Tabs Component - Copy & Paste Ready
import { useState } from 'react';

type Tab = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
};

type TabsProps = {
  tabs?: Tab[];
  defaultTab?: string;
};

const Tabs = ({ tabs, defaultTab }: TabsProps) => {
  const defaultTabs: Tab[] = tabs ?? [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="p-4 text-gray-700 dark:text-blue-200">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-sm">Overview content goes here. Add your overview details.</p>
        </div>
      ),
    },
    {
      id: 'features',
      label: 'Features',
      content: (
        <div className="p-4 text-gray-700 dark:text-blue-200">
          <h3 className="text-lg font-semibold mb-2">Features</h3>
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>Feature one</li>
            <li>Feature two</li>
            <li>Feature three</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'settings',
      label: 'Settings',
      content: (
        <div className="p-4 text-gray-700 dark:text-blue-200">
          <h3 className="text-lg font-semibold mb-2">Settings</h3>
          <p className="text-sm">Settings and configuration options.</p>
        </div>
      ),
    },
    {
      id: 'disabled',
      label: 'Disabled',
      disabled: true,
      content: null,
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(
    defaultTab ?? defaultTabs.find(t => !t.disabled)?.id ?? ''
  );

  const handleTabClick = (tab: Tab): void => {
    if (tab.disabled) return;
    setActiveTab(tab.id);
  };

  const activeContent = defaultTabs.find(t => t.id === activeTab)?.content;

  return (
    <div className="w-full">
      {/* Tab List */}
      <div className="border-b border-gray-200 dark:border-slate-600">
        <nav className="flex gap-1 px-1 -mb-px" role="tablist">
          {defaultTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-disabled={tab.disabled}
              onClick={() => handleTabClick(tab)}
              className={\`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors \${
                tab.disabled
                  ? 'text-gray-400 dark:text-slate-600 cursor-not-allowed border-transparent'
                  : activeTab === tab.id
                  ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
                  : 'text-gray-600 dark:text-slate-400 border-transparent hover:text-gray-900 dark:hover:text-blue-200 hover:border-gray-300 dark:hover:border-slate-500'
              }\`}
            >
              {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Panel */}
      <div
        role="tabpanel"
        className="bg-white dark:bg-slate-800 rounded-b-lg min-h-[100px]"
      >
        {activeContent}
      </div>
    </div>
  );
};

export default Tabs;`;
      }
      return `// Complete Tabs Component - Copy & Paste Ready
import { useState } from 'react';

const Tabs = ({ tabs, defaultTab }) => {
  const defaultTabs = tabs ?? [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="p-4 text-gray-700 dark:text-blue-200">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-sm">Overview content goes here. Add your overview details.</p>
        </div>
      ),
    },
    {
      id: 'features',
      label: 'Features',
      content: (
        <div className="p-4 text-gray-700 dark:text-blue-200">
          <h3 className="text-lg font-semibold mb-2">Features</h3>
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>Feature one</li>
            <li>Feature two</li>
            <li>Feature three</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'settings',
      label: 'Settings',
      content: (
        <div className="p-4 text-gray-700 dark:text-blue-200">
          <h3 className="text-lg font-semibold mb-2">Settings</h3>
          <p className="text-sm">Settings and configuration options.</p>
        </div>
      ),
    },
    {
      id: 'disabled',
      label: 'Disabled',
      disabled: true,
      content: null,
    },
  ];

  const [activeTab, setActiveTab] = useState(
    defaultTab ?? defaultTabs.find(t => !t.disabled)?.id ?? ''
  );

  const handleTabClick = (tab) => {
    if (tab.disabled) return;
    setActiveTab(tab.id);
  };

  const activeContent = defaultTabs.find(t => t.id === activeTab)?.content;

  return (
    <div className="w-full">
      {/* Tab List */}
      <div className="border-b border-gray-200 dark:border-slate-600">
        <nav className="flex gap-1 px-1 -mb-px" role="tablist">
          {defaultTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => handleTabClick(tab)}
              className={\`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors \${
                tab.disabled
                  ? 'text-gray-400 dark:text-slate-600 cursor-not-allowed border-transparent'
                  : activeTab === tab.id
                  ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
                  : 'text-gray-600 dark:text-slate-400 border-transparent hover:text-gray-900 dark:hover:text-blue-200 hover:border-gray-300 dark:hover:border-slate-500'
              }\`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Panel */}
      <div
        role="tabpanel"
        className="bg-white dark:bg-slate-800 rounded-b-lg min-h-[100px]"
      >
        {activeContent}
      </div>
    </div>
  );
};

export default Tabs;`;

    case 'menu':
      if (isTypeScript) {
        return `// TypeScript Menu Component - Copy & Paste Ready
import { useState, useRef, useEffect } from 'react';

type MenuItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  danger?: boolean;
  divider?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

type MenuProps = {
  trigger?: React.ReactNode;
  items?: MenuItem[];
};

const Menu = ({ trigger, items }: MenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const defaultItems: MenuItem[] = items ?? [
    { id: 'profile', label: 'View Profile', shortcut: '⌘P', onClick: () => console.log('Profile') },
    { id: 'settings', label: 'Settings', shortcut: '⌘,', onClick: () => console.log('Settings') },
    { id: 'divider1', label: '', divider: true },
    { id: 'invite', label: 'Invite Team', onClick: () => console.log('Invite') },
    { id: 'billing', label: 'Billing', disabled: true },
    { id: 'divider2', label: '', divider: true },
    { id: 'logout', label: 'Log Out', danger: true, shortcut: '⌘Q', onClick: () => console.log('Logout') },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (item: MenuItem): void => {
    if (item.disabled || item.divider) return;
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-200 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
      >
        {trigger ?? (
          <>
            <span>Options</span>
            <svg
              className={\`w-4 h-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 z-50 overflow-hidden">
          <div className="py-1">
            {defaultItems.map((item) => {
              if (item.divider) {
                return <hr key={item.id} className="my-1 border-gray-200 dark:border-slate-700" />;
              }
              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={item.disabled}
                  onClick={() => handleItemClick(item)}
                  className={\`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors \${
                    item.disabled
                      ? 'text-gray-400 dark:text-slate-600 cursor-not-allowed'
                      : item.danger
                      ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
                      : 'text-gray-700 dark:text-blue-200 hover:bg-gray-100 dark:hover:bg-slate-700'
                  }\`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon && <span>{item.icon}</span>}
                    {item.label}
                  </span>
                  {item.shortcut && (
                    <kbd className="text-xs text-gray-400 dark:text-slate-500 font-mono">
                      {item.shortcut}
                    </kbd>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;`;
      }
      return `// Complete Menu Component - Copy & Paste Ready
import { useState, useRef, useEffect } from 'react';

const Menu = ({ trigger, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const defaultItems = items ?? [
    { id: 'profile', label: 'View Profile', shortcut: '⌘P', onClick: () => console.log('Profile') },
    { id: 'settings', label: 'Settings', shortcut: '⌘,', onClick: () => console.log('Settings') },
    { id: 'divider1', label: '', divider: true },
    { id: 'invite', label: 'Invite Team', onClick: () => console.log('Invite') },
    { id: 'billing', label: 'Billing', disabled: true },
    { id: 'divider2', label: '', divider: true },
    { id: 'logout', label: 'Log Out', danger: true, shortcut: '⌘Q', onClick: () => console.log('Logout') },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (item) => {
    if (item.disabled || item.divider) return;
    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-200 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
      >
        {trigger ?? (
          <>
            <span>Options</span>
            <svg
              className={\`w-4 h-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 z-50 overflow-hidden">
          <div className="py-1">
            {defaultItems.map((item) => {
              if (item.divider) {
                return <hr key={item.id} className="my-1 border-gray-200 dark:border-slate-700" />;
              }
              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={item.disabled}
                  onClick={() => handleItemClick(item)}
                  className={\`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors \${
                    item.disabled
                      ? 'text-gray-400 dark:text-slate-600 cursor-not-allowed'
                      : item.danger
                      ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
                      : 'text-gray-700 dark:text-blue-200 hover:bg-gray-100 dark:hover:bg-slate-700'
                  }\`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                  </span>
                  {item.shortcut && (
                    <kbd className="text-xs text-gray-400 dark:text-slate-500 font-mono">
                      {item.shortcut}
                    </kbd>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;`;

    default:
      if (isTypeScript) {
        return `// TypeScript ${selectedComponent.name} Component - Copy & Paste Ready
import { useState } from 'react';

type ${selectedComponent.name.replace(/\s+/g, '')}Props = {
  items?: string[];
};

const ${selectedComponent.name.replace(/\s+/g, '')} = ({ items = [] }: ${selectedComponent.name.replace(/\s+/g, '')}Props) => {
  const [active, setActive] = useState<string>('');

  return (
    <nav className="bg-white dark:bg-slate-800 rounded-lg p-4">
      {/* Add your ${selectedComponent.name} content here */}
      <ul className="flex gap-2">
        {items.map((item) => (
          <li key={item}>
            <button
              onClick={() => setActive(item)}
              className={\`px-3 py-2 text-sm rounded-md transition-colors \${
                active === item
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-blue-200 hover:bg-gray-100 dark:hover:bg-slate-700'
              }\`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ${selectedComponent.name.replace(/\s+/g, '')};`;
      }
      return `// Complete ${selectedComponent.name} Component - Copy & Paste Ready
import { useState } from 'react';

const ${selectedComponent.name.replace(/\s+/g, '')} = ({ items = [] }) => {
  const [active, setActive] = useState('');

  return (
    <nav className="bg-white dark:bg-slate-800 rounded-lg p-4">
      {/* Add your ${selectedComponent.name} content here */}
      <ul className="flex gap-2">
        {items.map((item) => (
          <li key={item}>
            <button
              onClick={() => setActive(item)}
              className={\`px-3 py-2 text-sm rounded-md transition-colors \${
                active === item
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-blue-200 hover:bg-gray-100 dark:hover:bg-slate-700'
              }\`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ${selectedComponent.name.replace(/\s+/g, '')};`;
  }
};
