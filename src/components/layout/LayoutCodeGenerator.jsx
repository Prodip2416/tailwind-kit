// Layout Code Generator
export const generateLayoutCodeExample = (selectedComponent, language = 'js') => {
  if (!selectedComponent) return '';

  const normalizedLanguage = String(language || 'js').toLowerCase();
  const isTypeScript =
    normalizedLanguage === 'ts' ||
    normalizedLanguage === 'tsx' ||
    normalizedLanguage === 'typescript';

  const componentId = selectedComponent.id;

  switch (componentId) {
    case 'header':
      if (isTypeScript) {
        return `// TypeScript Header Component - Copy & Paste Ready
import { useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  brand?: string;
  navItems?: NavItem[];
  showSearch?: boolean;
};

const Header = ({
  brand = 'MyApp',
  navItems,
  showSearch = true,
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const defaultNavItems: NavItem[] = navItems ?? [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Docs', href: '#' },
  ];

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {brand}
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {defaultNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Search + Actions */}
          <div className="flex items-center gap-3">
            {showSearch && (
              <div className="hidden sm:block relative">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-48 lg:w-64 pl-9 pr-3 py-1.5 text-sm border border-gray-300 dark:border-slate-600 rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-blue-100 placeholder-gray-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <svg
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            )}

            <button className="hidden md:block px-4 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
              Sign In
            </button>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200 dark:border-slate-700 space-y-1">
            {defaultNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;`;
      }
      return `// Complete Header Component - Copy & Paste Ready
import { useState } from 'react';

const Header = ({
  brand = 'MyApp',
  navItems,
  showSearch = true,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const defaultNavItems = navItems ?? [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Docs', href: '#' },
  ];

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {brand}
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {defaultNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Search + Actions */}
          <div className="flex items-center gap-3">
            {showSearch && (
              <div className="hidden sm:block relative">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-48 lg:w-64 pl-9 pr-3 py-1.5 text-sm border border-gray-300 dark:border-slate-600 rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-blue-100 placeholder-gray-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <svg
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            )}

            <button className="hidden md:block px-4 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
              Sign In
            </button>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200 dark:border-slate-700 space-y-1">
            {defaultNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;`;

    case 'footer':
      if (isTypeScript) {
        return `// TypeScript Footer Component - Copy & Paste Ready

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type FooterProps = {
  brand?: string;
  tagline?: string;
  sections?: FooterSection[];
  copyright?: string;
};

const Footer = ({
  brand = 'MyApp',
  tagline = 'Building great products.',
  sections,
  copyright,
}: FooterProps) => {
  const defaultSections: FooterSection[] = sections ?? [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Changelog', href: '#' },
        { label: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Help Center', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  const year = new Date().getFullYear();
  const defaultCopyright = copyright ?? \`© \${year} \${brand}. All rights reserved.\`;

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold text-white">{brand}</span>
            <p className="mt-3 text-sm text-gray-400">{tagline}</p>
          </div>

          {/* Link sections */}
          {defaultSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">{defaultCopyright}</p>
          <div className="flex items-center gap-4">
            {/* Social icons */}
            {(['github', 'twitter', 'linkedin'] as const).map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-500 hover:text-white transition-colors capitalize text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`;
      }
      return `// Complete Footer Component - Copy & Paste Ready

const Footer = ({
  brand = 'MyApp',
  tagline = 'Building great products.',
  sections,
  copyright,
}) => {
  const defaultSections = sections ?? [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Changelog', href: '#' },
        { label: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Help Center', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  const year = new Date().getFullYear();
  const defaultCopyright = copyright ?? \`© \${year} \${brand}. All rights reserved.\`;

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold text-white">{brand}</span>
            <p className="mt-3 text-sm text-gray-400">{tagline}</p>
          </div>

          {/* Link sections */}
          {defaultSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">{defaultCopyright}</p>
          <div className="flex items-center gap-4">
            {['github', 'twitter', 'linkedin'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-500 hover:text-white transition-colors capitalize text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`;

    case 'sidebar':
      if (isTypeScript) {
        return `// TypeScript Sidebar Component - Copy & Paste Ready
import { useState } from 'react';

type SidebarItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
};

type SidebarSection = {
  title?: string;
  items: SidebarItem[];
};

type SidebarProps = {
  brand?: string;
  sections?: SidebarSection[];
  defaultCollapsed?: boolean;
};

const Sidebar = ({
  brand = 'MyApp',
  sections,
  defaultCollapsed = false,
}: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);
  const [activeItem, setActiveItem] = useState<string>('dashboard');

  const defaultSections: SidebarSection[] = sections ?? [
    {
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          ),
        },
        {
          id: 'analytics',
          label: 'Analytics',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
        {
          id: 'messages',
          label: 'Messages',
          badge: 4,
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          id: 'profile',
          label: 'Profile',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          ),
        },
        {
          id: 'settings',
          label: 'Settings',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <div className={\`flex flex-col bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 h-full transition-all duration-300 \${isCollapsed ? 'w-16' : 'w-64'}\`}>
      {/* Header */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-slate-700 flex-shrink-0">
        {!isCollapsed && (
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400 truncate">{brand}</span>
        )}
        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-md text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isCollapsed ? 'M13 5l7 7-7 7M5 5l7 7-7 7' : 'M11 19l-7-7 7-7m8 14l-7-7 7-7'} />
          </svg>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-6">
        {defaultSections.map((section, si) => (
          <div key={si}>
            {section.title && !isCollapsed && (
              <p className="px-4 mb-2 text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider">
                {section.title}
              </p>
            )}
            <ul className="space-y-1 px-2">
              {section.items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveItem(item.id)}
                    title={isCollapsed ? item.label : undefined}
                    className={\`w-full flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-colors \${
                      activeItem === item.id
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700'
                    }\`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 text-left truncate">{item.label}</span>
                        {item.badge !== undefined && (
                          <span className="flex-shrink-0 bg-blue-600 text-white text-xs font-medium px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;`;
      }
      return `// Complete Sidebar Component - Copy & Paste Ready
import { useState } from 'react';

const Sidebar = ({
  brand = 'MyApp',
  sections,
  defaultCollapsed = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [activeItem, setActiveItem] = useState('dashboard');

  const defaultSections = sections ?? [
    {
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          ),
        },
        {
          id: 'analytics',
          label: 'Analytics',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
        {
          id: 'messages',
          label: 'Messages',
          badge: 4,
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          id: 'profile',
          label: 'Profile',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          ),
        },
        {
          id: 'settings',
          label: 'Settings',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <div className={\`flex flex-col bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 h-full transition-all duration-300 \${isCollapsed ? 'w-16' : 'w-64'}\`}>
      {/* Header */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-slate-700 flex-shrink-0">
        {!isCollapsed && (
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400 truncate">{brand}</span>
        )}
        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-md text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isCollapsed ? 'M13 5l7 7-7 7M5 5l7 7-7 7' : 'M11 19l-7-7 7-7m8 14l-7-7 7-7'} />
          </svg>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-6">
        {defaultSections.map((section, si) => (
          <div key={si}>
            {section.title && !isCollapsed && (
              <p className="px-4 mb-2 text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider">
                {section.title}
              </p>
            )}
            <ul className="space-y-1 px-2">
              {section.items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveItem(item.id)}
                    title={isCollapsed ? item.label : undefined}
                    className={\`w-full flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-colors \${
                      activeItem === item.id
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700'
                    }\`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 text-left truncate">{item.label}</span>
                        {item.badge !== undefined && (
                          <span className="flex-shrink-0 bg-blue-600 text-white text-xs font-medium px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;`;

    case 'grid':
      if (isTypeScript) {
        return `// TypeScript Grid Layout Component - Copy & Paste Ready

type GridCols = 1 | 2 | 3 | 4 | 6 | 12;
type GapSize = 'none' | 'sm' | 'md' | 'lg';

type GridItem = {
  id: string | number;
  content: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
};

type GridProps = {
  cols?: GridCols;
  gap?: GapSize;
  items?: GridItem[];
};

const gapClasses: Record<GapSize, string> = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

const colClasses: Record<GridCols, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
};

const Grid = ({ cols = 3, gap = 'md', items }: GridProps) => {
  const defaultItems: GridItem[] = items ?? [
    {
      id: 1,
      content: (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-2" />
          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Item 1</p>
        </div>
      ),
    },
    {
      id: 2,
      colSpan: 2,
      content: (
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 text-center">
          <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Item 2 (col-span-2)</p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
          <p className="text-sm font-medium text-green-900 dark:text-green-100">Item 3</p>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 text-center">
          <p className="text-sm font-medium text-yellow-900 dark:text-yellow-100">Item 4</p>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-center">
          <p className="text-sm font-medium text-red-900 dark:text-red-100">Item 5</p>
        </div>
      ),
    },
  ];

  return (
    <div className={\`grid \${colClasses[cols]} \${gapClasses[gap]}\`}>
      {defaultItems.map((item) => (
        <div
          key={item.id}
          className={[
            item.colSpan ? \`col-span-\${item.colSpan}\` : '',
            item.rowSpan ? \`row-span-\${item.rowSpan}\` : '',
          ].filter(Boolean).join(' ')}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Grid;`;
      }
      return `// Complete Grid Layout Component - Copy & Paste Ready

const gapClasses = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

const colClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
};

const Grid = ({ cols = 3, gap = 'md', items }) => {
  const defaultItems = items ?? [
    {
      id: 1,
      content: (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-2" />
          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Item 1</p>
        </div>
      ),
    },
    {
      id: 2,
      colSpan: 2,
      content: (
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 text-center">
          <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Item 2 (col-span-2)</p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
          <p className="text-sm font-medium text-green-900 dark:text-green-100">Item 3</p>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 text-center">
          <p className="text-sm font-medium text-yellow-900 dark:text-yellow-100">Item 4</p>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-center">
          <p className="text-sm font-medium text-red-900 dark:text-red-100">Item 5</p>
        </div>
      ),
    },
  ];

  return (
    <div className={\`grid \${colClasses[cols]} \${gapClasses[gap]}\`}>
      {defaultItems.map((item) => (
        <div
          key={item.id}
          className={[
            item.colSpan ? \`col-span-\${item.colSpan}\` : '',
            item.rowSpan ? \`row-span-\${item.rowSpan}\` : '',
          ].filter(Boolean).join(' ')}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Grid;`;

    case 'container':
      if (isTypeScript) {
        return `// TypeScript Container Component - Copy & Paste Ready

type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
type Padding = 'none' | 'sm' | 'md' | 'lg';

type ContainerProps = {
  maxWidth?: MaxWidth;
  padding?: Padding;
  centered?: boolean;
  children?: React.ReactNode;
};

const maxWidthClasses: Record<MaxWidth, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full',
};

const paddingClasses: Record<Padding, string> = {
  none: 'px-0',
  sm: 'px-4',
  md: 'px-6',
  lg: 'px-8',
};

const Container = ({
  maxWidth = '2xl',
  padding = 'md',
  centered = true,
  children,
}: ContainerProps) => {
  return (
    <div
      className={\`w-full \${maxWidthClasses[maxWidth]} \${paddingClasses[padding]} \${
        centered ? 'mx-auto' : ''
      }\`}
    >
      {children ?? (
        <div className="space-y-6">
          {/* Hero section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-3">Welcome to MyApp</h1>
            <p className="text-blue-100 max-w-md mx-auto">
              A centered container with configurable max-width and padding.
            </p>
            <button className="mt-5 px-6 py-2.5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Responsive', desc: 'Works on all screen sizes' },
              { title: 'Accessible', desc: 'Built with a11y in mind' },
              { title: 'Customizable', desc: 'Adjust max-width and padding' },
            ].map((f) => (
              <div key={f.title} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-blue-100 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;`;
      }
      return `// Complete Container Component - Copy & Paste Ready

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full',
};

const paddingClasses = {
  none: 'px-0',
  sm: 'px-4',
  md: 'px-6',
  lg: 'px-8',
};

const Container = ({
  maxWidth = '2xl',
  padding = 'md',
  centered = true,
  children,
}) => {
  return (
    <div
      className={\`w-full \${maxWidthClasses[maxWidth]} \${paddingClasses[padding]} \${
        centered ? 'mx-auto' : ''
      }\`}
    >
      {children ?? (
        <div className="space-y-6">
          {/* Hero section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-3">Welcome to MyApp</h1>
            <p className="text-blue-100 max-w-md mx-auto">
              A centered container with configurable max-width and padding.
            </p>
            <button className="mt-5 px-6 py-2.5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Responsive', desc: 'Works on all screen sizes' },
              { title: 'Accessible', desc: 'Built with a11y in mind' },
              { title: 'Customizable', desc: 'Adjust max-width and padding' },
            ].map((f) => (
              <div key={f.title} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-blue-100 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;`;

    case 'card':
      if (isTypeScript) {
        return `// TypeScript Card Component - Copy & Paste Ready

type CardVariant = 'default' | 'elevated' | 'outlined' | 'filled';

type CardAction = {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick: () => void;
};

type CardProps = {
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  badge?: string;
  variant?: CardVariant;
  actions?: CardAction[];
  children?: React.ReactNode;
};

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm',
  elevated: 'bg-white dark:bg-slate-800 shadow-lg',
  outlined: 'bg-transparent border-2 border-gray-300 dark:border-slate-600',
  filled: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800',
};

const actionVariantClasses: Record<NonNullable<CardAction['variant']>, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-700 dark:text-blue-200',
  ghost: 'hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-blue-300',
};

const Card = ({
  title = 'Card Title',
  subtitle = 'Card subtitle or description goes here.',
  image,
  imageAlt = '',
  badge,
  variant = 'default',
  actions,
  children,
}: CardProps) => {
  const defaultActions: CardAction[] = actions ?? [
    { label: 'Cancel', variant: 'ghost', onClick: () => console.log('Cancel') },
    { label: 'Confirm', variant: 'primary', onClick: () => console.log('Confirm') },
  ];

  return (
    <div className={\`rounded-xl overflow-hidden \${variantClasses[variant]}\`}>
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-slate-400 mt-0.5">{subtitle}</p>
          </div>
          {badge && (
            <span className="flex-shrink-0 px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
              {badge}
            </span>
          )}
        </div>

        {/* Content */}
        {children && (
          <div className="mb-4 text-sm text-gray-600 dark:text-slate-400">
            {children}
          </div>
        )}

        {/* Default content when no children */}
        {!children && (
          <p className="mb-4 text-sm text-gray-600 dark:text-slate-400">
            Card body content goes here. Add any content, forms, or media.
          </p>
        )}

        {/* Actions */}
        {defaultActions.length > 0 && (
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-slate-700">
            {defaultActions.map((action) => (
              <button
                key={action.label}
                type="button"
                onClick={action.onClick}
                className={\`px-4 py-1.5 text-sm font-medium rounded-md transition-colors \${
                  actionVariantClasses[action.variant ?? 'secondary']
                }\`}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;`;
      }
      return `// Complete Card Component - Copy & Paste Ready

const variantClasses = {
  default: 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm',
  elevated: 'bg-white dark:bg-slate-800 shadow-lg',
  outlined: 'bg-transparent border-2 border-gray-300 dark:border-slate-600',
  filled: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800',
};

const actionVariantClasses = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-700 dark:text-blue-200',
  ghost: 'hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-blue-300',
};

const Card = ({
  title = 'Card Title',
  subtitle = 'Card subtitle or description goes here.',
  image,
  imageAlt = '',
  badge,
  variant = 'default',
  actions,
  children,
}) => {
  const defaultActions = actions ?? [
    { label: 'Cancel', variant: 'ghost', onClick: () => console.log('Cancel') },
    { label: 'Confirm', variant: 'primary', onClick: () => console.log('Confirm') },
  ];

  return (
    <div className={\`rounded-xl overflow-hidden \${variantClasses[variant]}\`}>
      {/* Image */}
      {image && (
        <img src={image} alt={imageAlt} className="w-full h-48 object-cover" />
      )}

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-slate-400 mt-0.5">{subtitle}</p>
          </div>
          {badge && (
            <span className="flex-shrink-0 px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
              {badge}
            </span>
          )}
        </div>

        {children && (
          <div className="mb-4 text-sm text-gray-600 dark:text-slate-400">{children}</div>
        )}

        {!children && (
          <p className="mb-4 text-sm text-gray-600 dark:text-slate-400">
            Card body content goes here. Add any content, forms, or media.
          </p>
        )}

        {defaultActions.length > 0 && (
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-slate-700">
            {defaultActions.map((action) => (
              <button
                key={action.label}
                type="button"
                onClick={action.onClick}
                className={\`px-4 py-1.5 text-sm font-medium rounded-md transition-colors \${
                  actionVariantClasses[action.variant ?? 'secondary']
                }\`}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;`;

    default:
      if (isTypeScript) {
        return `// TypeScript ${selectedComponent.name} Component - Copy & Paste Ready
import { useState } from 'react';

type ${selectedComponent.name.replace(/\s+/g, '')}Props = {
  children?: React.ReactNode;
  className?: string;
};

const ${selectedComponent.name.replace(/\s+/g, '')} = ({
  children,
  className = '',
}: ${selectedComponent.name.replace(/\s+/g, '')}Props) => {
  return (
    <div className={\`bg-white dark:bg-slate-800 rounded-lg p-6 \${className}\`}>
      {children ?? (
        <p className="text-gray-600 dark:text-blue-200">
          ${selectedComponent.name} content goes here.
        </p>
      )}
    </div>
  );
};

export default ${selectedComponent.name.replace(/\s+/g, '')};`;
      }
      return `// Complete ${selectedComponent.name} Component - Copy & Paste Ready

const ${selectedComponent.name.replace(/\s+/g, '')} = ({ children, className = '' }) => {
  return (
    <div className={\`bg-white dark:bg-slate-800 rounded-lg p-6 \${className}\`}>
      {children ?? (
        <p className="text-gray-600 dark:text-blue-200">
          ${selectedComponent.name} content goes here.
        </p>
      )}
    </div>
  );
};

export default ${selectedComponent.name.replace(/\s+/g, '')};`;
  }
};
