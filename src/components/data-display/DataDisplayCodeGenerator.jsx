import React from 'react';

export const generateCodeExample = (component, language = 'js') => {
  const normalizedLanguage = String(language || 'js').toLowerCase();
  const isTypeScript =
    normalizedLanguage === 'ts' ||
    normalizedLanguage === 'tsx' ||
    normalizedLanguage === 'typescript';

  switch (component.id) {
    case 'table':
      if (isTypeScript) {
        return `// Complete Table Component (TypeScript) - Copy & Paste Ready
import React, { useState } from 'react';

type SortDirection = 'asc' | 'desc';

type Column<T> = {
  key: keyof T;
  label: string;
  sortable?: boolean;
};

type TableProps<T extends Record<string, unknown>> = {
  data?: T[];
  columns?: Column<T>[];
  sortable?: boolean;
  filterable?: boolean;
  pagination?: boolean;
  pageSize?: number;
  striped?: boolean;
  hoverable?: boolean;
  className?: string;
};

const Table = <T extends Record<string, unknown>>({
  data = [],
  columns = [],
  sortable = true,
  filterable = true,
  pagination = true,
  pageSize = 10,
  striped = false,
  hoverable = true,
  className = '',
}: TableProps<T>) => {
  const [sortConfig, setSortConfig] = useState<{ key: keyof T | null; direction: SortDirection }>({
    key: null,
    direction: 'asc',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<Record<string, string>>({});

  const handleSort = (key: keyof T) => {
    if (!sortable) return;
    const direction: SortDirection =
      sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  const handleFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const getSortedData = (): T[] => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key!];
      const bVal = b[sortConfig.key!];
      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const getFilteredData = (): T[] => {
    return getSortedData().filter((row) =>
      Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return String(row[key] ?? '').toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  const getPaginatedData = (): T[] => {
    const filtered = getFilteredData();
    if (!pagination) return filtered;
    const startIndex = (currentPage - 1) * pageSize;
    return filtered.slice(startIndex, startIndex + pageSize);
  };

  const totalPages = Math.ceil(getFilteredData().length / pageSize);

  return (
    <div className={\`w-full \${className}\`}>
      {filterable && (
        <div className="mb-4 flex flex-wrap gap-2">
          {columns.map((column) => (
            <input
              key={String(column.key)}
              type="text"
              placeholder={\`Filter \${column.label}...\`}
              value={filters[String(column.key)] || ''}
              onChange={(e) => handleFilter(String(column.key), e.target.value)}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100"
            />
          ))}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
          <thead className="bg-gray-50 dark:bg-slate-800">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={\`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-300 uppercase tracking-wider \${
                    column.sortable && sortable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700' : ''
                  }\`}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.label}</span>
                    {column.sortable && sortable && (
                      <svg
                        className={\`w-3 h-3 \${
                          sortConfig.key === column.key ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'
                        }\`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700">
            {getPaginatedData().map((row, index) => (
              <tr
                key={String((row as Record<string, unknown>).id ?? index)}
                className={\`\${hoverable ? 'hover:bg-gray-50 dark:hover:bg-slate-800' : ''} \${
                  striped && index % 2 === 0 ? 'bg-gray-50 dark:bg-slate-800' : ''
                }\`}
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-blue-100"
                  >
                    {String(row[column.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination && totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700 dark:text-blue-200">
            Showing {(currentPage - 1) * pageSize + 1} to{' '}
            {Math.min(currentPage * pageSize, getFilteredData().length)} of{' '}
            {getFilteredData().length} results
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-slate-800"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={\`px-3 py-1 text-sm border rounded-md \${
                  currentPage === page
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800'
                }\`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-slate-800"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;`;
      }
      return `// Complete Table Component - Copy & Paste Ready
import React, { useState } from 'react';

const Table = ({
  data = [],
  columns = [],
  sortable = true,
  filterable = true,
  pagination = true,
  pageSize = 10,
  striped = false,
  hoverable = true,
  className = '',
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});

  const handleSort = (key) => {
    if (!sortable) return;
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const getSortedData = () => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const getFilteredData = () => {
    const sortedData = getSortedData();
    return sortedData.filter(row => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return row[key]?.toString().toLowerCase().includes(value.toLowerCase());
      });
    });
  };

  const getPaginatedData = () => {
    const filteredData = getFilteredData();
    if (!pagination) return filteredData;
    const startIndex = (currentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  };

  const totalPages = Math.ceil(getFilteredData().length / pageSize);

  return (
    <div className={\`w-full \${className}\`}>
      {filterable && (
        <div className="mb-4 flex flex-wrap gap-2">
          {columns.map(column => (
            <input
              key={column.key}
              type="text"
              placeholder={\`Filter \${column.label}...\`}
              value={filters[column.key] || ''}
              onChange={(e) => handleFilter(column.key, e.target.value)}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100"
            />
          ))}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
          <thead className="bg-gray-50 dark:bg-slate-800">
            <tr>
              {columns.map(column => (
                <th
                  key={column.key}
                  className={\`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-300 uppercase tracking-wider \${
                    column.sortable && sortable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700' : ''
                  }\`}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.label}</span>
                    {column.sortable && sortable && (
                      <div className="flex flex-col">
                        <svg className={\`w-3 h-3 \${
                          sortConfig.key === column.key && sortConfig.direction === 'asc'
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-400'
                        }\`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={\`bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700 \${
            striped ? 'divide-y divide-gray-200 dark:divide-slate-700' : ''
          }\`}>
            {getPaginatedData().map((row, index) => (
              <tr
                key={row.id || index}
                className={\`\${
                  hoverable ? 'hover:bg-gray-50 dark:hover:bg-slate-800' : ''
                } \${
                  striped && index % 2 === 0 ? 'bg-gray-50 dark:bg-slate-800' : ''
                }\`}
              >
                {columns.map(column => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-blue-100">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination && totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700 dark:text-blue-200">
            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, getFilteredData().length)} of {getFilteredData().length} results
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-slate-800"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={\`px-3 py-1 text-sm border rounded-md \${
                  currentPage === page
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800'
                }\`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-slate-800"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;`;

    case 'card':
      if (isTypeScript) {
        return `// Complete Card Component (TypeScript) - Copy & Paste Ready
import React from 'react';

type CardVariant = 'default' | 'outlined' | 'filled' | 'elevated';
type CardSize = 'sm' | 'md' | 'lg' | 'xl';
type CardShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type CardRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

type CardProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  variant?: CardVariant;
  size?: CardSize;
  shadow?: CardShadow;
  rounded?: CardRounded;
  className?: string;
};

const Card = ({
  title,
  subtitle,
  children,
  image,
  imageAlt,
  actions,
  variant = 'default',
  size = 'md',
  shadow = 'md',
  rounded = 'lg',
  className = '',
}: CardProps) => {
  const getVariantClasses = (): string => {
    switch (variant) {
      case 'outlined': return 'border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800';
      case 'filled': return 'bg-gray-50 dark:bg-slate-800';
      case 'elevated': return 'bg-white dark:bg-slate-800 shadow-xl';
      default: return 'bg-white dark:bg-slate-800';
    }
  };

  const getSizeClasses = (): string => {
    switch (size) {
      case 'sm': return 'p-4';
      case 'lg': return 'p-8';
      case 'xl': return 'p-10';
      default: return 'p-6';
    }
  };

  const getShadowClasses = (): string => {
    switch (shadow) {
      case 'none': return '';
      case 'sm': return 'shadow-sm';
      case 'lg': return 'shadow-lg';
      case 'xl': return 'shadow-xl';
      case '2xl': return 'shadow-2xl';
      default: return 'shadow-md';
    }
  };

  const getRoundedClasses = (): string => {
    switch (rounded) {
      case 'none': return '';
      case 'sm': return 'rounded-sm';
      case 'md': return 'rounded-md';
      case 'xl': return 'rounded-xl';
      case '2xl': return 'rounded-2xl';
      case 'full': return 'rounded-full';
      default: return 'rounded-lg';
    }
  };

  return (
    <div className={\`\${getVariantClasses()} \${getShadowClasses()} \${getRoundedClasses()} \${className}\`}>
      {image && (
        <div className="mb-4">
          <img src={image} alt={imageAlt || title || 'Card image'} className="w-full h-48 object-cover rounded-t-lg" />
        </div>
      )}
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-1">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-600 dark:text-blue-300">{subtitle}</p>}
        </div>
      )}
      <div className={getSizeClasses()}>{children}</div>
      {actions && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
          <div className="flex justify-end space-x-2">{actions}</div>
        </div>
      )}
    </div>
  );
};

export default Card;`;
      }
      return `// Complete Card Component - Copy & Paste Ready
import React from 'react';

const Card = ({
  title,
  subtitle,
  children,
  image,
  imageAlt,
  actions,
  variant = 'default',
  size = 'md',
  shadow = 'md',
  rounded = 'lg',
  className = '',
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined': return 'border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800';
      case 'filled': return 'bg-gray-50 dark:bg-slate-800';
      case 'elevated': return 'bg-white dark:bg-slate-800 shadow-xl';
      default: return 'bg-white dark:bg-slate-800';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'p-4';
      case 'lg': return 'p-8';
      case 'xl': return 'p-10';
      default: return 'p-6';
    }
  };

  const getShadowClasses = () => {
    switch (shadow) {
      case 'none': return '';
      case 'sm': return 'shadow-sm';
      case 'lg': return 'shadow-lg';
      case 'xl': return 'shadow-xl';
      case '2xl': return 'shadow-2xl';
      default: return 'shadow-md';
    }
  };

  const getRoundedClasses = () => {
    switch (rounded) {
      case 'none': return '';
      case 'sm': return 'rounded-sm';
      case 'md': return 'rounded-md';
      case 'lg': return 'rounded-lg';
      case 'xl': return 'rounded-xl';
      case '2xl': return 'rounded-2xl';
      case 'full': return 'rounded-full';
      default: return 'rounded-lg';
    }
  };

  return (
    <div
      className={\`\${getVariantClasses()} \${getShadowClasses()} \${getRoundedClasses()} \${className}\`}
      {...props}
    >
      {image && (
        <div className="mb-4">
          <img src={image} alt={imageAlt || title || 'Card image'} className="w-full h-48 object-cover rounded-t-lg" />
        </div>
      )}
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-1">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-600 dark:text-blue-300">{subtitle}</p>}
        </div>
      )}
      <div className={\`\${getSizeClasses()}\`}>{children}</div>
      {actions && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
          <div className="flex justify-end space-x-2">{actions}</div>
        </div>
      )}
    </div>
  );
};

export default Card;`;

    case 'list':
      if (isTypeScript) {
        return `// Complete List Component (TypeScript) - Copy & Paste Ready
import React from 'react';

type ListVariant = 'default' | 'outlined' | 'filled' | 'elevated';
type ListSize = 'sm' | 'md' | 'lg' | 'xl';

type ListItem = {
  id?: string | number;
  content: React.ReactNode;
};

type ListProps = {
  items?: ListItem[];
  variant?: ListVariant;
  size?: ListSize;
  dividers?: boolean;
  hoverable?: boolean;
  className?: string;
};

const List = ({
  items = [],
  variant = 'default',
  size = 'md',
  dividers = true,
  hoverable = true,
  className = '',
}: ListProps) => {
  const getVariantClasses = (): string => {
    switch (variant) {
      case 'outlined': return 'border border-gray-200 dark:border-slate-700 rounded-lg';
      case 'filled': return 'bg-gray-50 dark:bg-slate-800 rounded-lg';
      case 'elevated': return 'bg-white dark:bg-slate-800 shadow-md rounded-lg';
      default: return 'bg-white dark:bg-slate-800 rounded-lg';
    }
  };

  const getSizeClasses = (): string => {
    switch (size) {
      case 'sm': return 'py-1';
      case 'lg': return 'py-2';
      case 'xl': return 'py-3';
      default: return 'py-1';
    }
  };

  const getItemClasses = (): string => {
    const baseClasses = 'flex items-center justify-between px-4';
    const hoverClasses = hoverable ? 'hover:bg-gray-50 dark:hover:bg-slate-700' : '';
    const dividerClasses = dividers ? 'border-b border-gray-200 dark:border-slate-700 last:border-b-0' : '';
    return \`\${baseClasses} \${hoverClasses} \${dividerClasses} \${getSizeClasses()}\`;
  };

  return (
    <div className={\`\${getVariantClasses()} \${className}\`}>
      {items.map((item, index) => (
        <div key={item.id ?? index} className={getItemClasses()}>
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default List;`;
      }
      return `// Complete List Component - Copy & Paste Ready
import React from 'react';

const List = ({
  items = [],
  variant = 'default',
  size = 'md',
  dividers = true,
  hoverable = true,
  className = '',
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined': return 'border border-gray-200 dark:border-slate-700 rounded-lg';
      case 'filled': return 'bg-gray-50 dark:bg-slate-800 rounded-lg';
      case 'elevated': return 'bg-white dark:bg-slate-800 shadow-md rounded-lg';
      default: return 'bg-white dark:bg-slate-800 rounded-lg';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'py-1';
      case 'lg': return 'py-2';
      case 'xl': return 'py-3';
      default: return 'py-1';
    }
  };

  const getItemClasses = () => {
    const baseClasses = 'flex items-center justify-between px-4';
    const hoverClasses = hoverable ? 'hover:bg-gray-50 dark:hover:bg-slate-700' : '';
    const dividerClasses = dividers ? 'border-b border-gray-200 dark:border-slate-700 last:border-b-0' : '';
    return \`\${baseClasses} \${hoverClasses} \${dividerClasses} \${getSizeClasses()}\`;
  };

  return (
    <div className={\`\${getVariantClasses()} \${className}\`} {...props}>
      {items.map((item, index) => (
        <div key={item.id || index} className={getItemClasses()}>
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default List;`;

    case 'grid':
      if (isTypeScript) {
        return `// Complete Grid Component (TypeScript) - Copy & Paste Ready
import React from 'react';

type GridGap = 'none' | 'sm' | 'md' | 'lg' | 'xl';

type GridProps = {
  children: React.ReactNode;
  columns?: number;
  gap?: GridGap;
  responsive?: boolean;
  className?: string;
};

const Grid = ({
  children,
  columns = 3,
  gap = 'md',
  responsive = true,
  className = '',
}: GridProps) => {
  const getGapClasses = (): string => {
    switch (gap) {
      case 'none': return 'gap-0';
      case 'sm': return 'gap-2';
      case 'lg': return 'gap-6';
      case 'xl': return 'gap-8';
      default: return 'gap-4';
    }
  };

  const getGridClasses = (): string => {
    if (!responsive) return \`grid-cols-\${columns}\`;
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 sm:grid-cols-2';
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      case 5: return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5';
      case 6: return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
      default: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className={\`grid \${getGridClasses()} \${getGapClasses()} \${className}\`}>
      {children}
    </div>
  );
};

export default Grid;`;
      }
      return `// Complete Grid Component - Copy & Paste Ready
import React from 'react';

const Grid = ({
  children,
  columns = 3,
  gap = 'md',
  responsive = true,
  className = '',
  ...props
}) => {
  const getGapClasses = () => {
    switch (gap) {
      case 'none': return 'gap-0';
      case 'sm': return 'gap-2';
      case 'md': return 'gap-4';
      case 'lg': return 'gap-6';
      case 'xl': return 'gap-8';
      default: return 'gap-4';
    }
  };

  const getGridClasses = () => {
    if (!responsive) return \`grid-cols-\${columns}\`;
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 sm:grid-cols-2';
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      case 5: return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5';
      case 6: return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
      case 12: return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12';
      default: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className={\`grid \${getGridClasses()} \${getGapClasses()} \${className}\`} {...props}>
      {children}
    </div>
  );
};

export default Grid;`;

    case 'chart':
      if (isTypeScript) {
        return `// Complete Chart Component (TypeScript) - Copy & Paste Ready
import React from 'react';

type ChartType = 'bar' | 'line';

type ChartDataItem = {
  label: string;
  value: number;
};

type ChartProps = {
  type?: ChartType;
  data?: ChartDataItem[];
  width?: number;
  height?: number;
  title?: string;
  subtitle?: string;
  showLegend?: boolean;
  showGrid?: boolean;
  showAxes?: boolean;
  colors?: string[];
  className?: string;
};

const Chart = ({
  type = 'bar',
  data = [],
  width = 400,
  height = 300,
  title,
  subtitle,
  colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
  className = '',
}: ChartProps) => {
  const maxValue = Math.max(...data.map((item) => item.value));
  const minValue = Math.min(...data.map((item) => item.value));
  const range = maxValue - minValue;

  const renderBarChart = () => (
    <div className="flex items-end justify-between h-full space-x-1">
      {data.map((item, index) => {
        const barHeight = (item.value / maxValue) * 100;
        return (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="w-full bg-blue-500 dark:bg-blue-400 rounded-t"
              style={{ height: \`\${barHeight}%\` }}
            />
            <div className="text-xs text-gray-600 dark:text-blue-300 mt-1">{item.label}</div>
          </div>
        );
      })}
    </div>
  );

  const renderLineChart = () => (
    <div className="relative h-full">
      <svg width="100%" height="100%" className="overflow-visible">
        <polyline
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
          points={data
            .map((item, index) => {
              const x = (index / (data.length - 1)) * 100;
              const y = 100 - ((item.value - minValue) / range) * 100;
              return \`\${x},\${y}\`;
            })
            .join(' ')}
        />
        {data.map((item, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = 100 - ((item.value - minValue) / range) * 100;
          return <circle key={index} cx={x} cy={y} r="3" fill="#3B82F6" />;
        })}
      </svg>
    </div>
  );

  return (
    <div className={\`bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 \${className}\`}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-600 dark:text-blue-300">{subtitle}</p>}
        </div>
      )}
      <div className="relative" style={{ width, height }}>
        {type === 'line' ? renderLineChart() : renderBarChart()}
      </div>
    </div>
  );
};

export default Chart;`;
      }
      return `// Complete Chart Component - Copy & Paste Ready
import React from 'react';

const Chart = ({
  type = 'bar',
  data = [],
  width = 400,
  height = 300,
  title,
  subtitle,
  showLegend = true,
  showGrid = true,
  showAxes = true,
  colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
  className = '',
  ...props
}) => {
  const maxValue = Math.max(...data.map(item => item.value));
  const minValue = Math.min(...data.map(item => item.value));
  const range = maxValue - minValue;

  const renderBarChart = () => (
    <div className="flex items-end justify-between h-full space-x-1">
      {data.map((item, index) => {
        const height = (item.value / maxValue) * 100;
        return (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className="w-full bg-blue-500 dark:bg-blue-400 rounded-t" style={{ height: \`\${height}%\` }} />
            <div className="text-xs text-gray-600 dark:text-blue-300 mt-1">{item.label}</div>
          </div>
        );
      })}
    </div>
  );

  const renderLineChart = () => (
    <div className="relative h-full">
      <svg width="100%" height="100%" className="overflow-visible">
        <polyline
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
          points={data.map((item, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 100 - ((item.value - minValue) / range) * 100;
            return \`\${x},\${y}\`;
          }).join(' ')}
        />
        {data.map((item, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = 100 - ((item.value - minValue) / range) * 100;
          return <circle key={index} cx={x} cy={y} r="3" fill="#3B82F6" />;
        })}
      </svg>
    </div>
  );

  const renderChart = () => {
    switch (type) {
      case 'line': return renderLineChart();
      default: return renderBarChart();
    }
  };

  return (
    <div className={\`bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 \${className}\`} {...props}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-600 dark:text-blue-300">{subtitle}</p>}
        </div>
      )}
      <div className="relative" style={{ width, height }}>
        {renderChart()}
      </div>
    </div>
  );
};

export default Chart;`;

    case 'stat':
      if (isTypeScript) {
        return `// Complete Stat Component (TypeScript) - Copy & Paste Ready
import React from 'react';

type StatVariant = 'default' | 'outlined' | 'filled' | 'elevated';
type StatSize = 'sm' | 'md' | 'lg' | 'xl';
type ChangeType = 'positive' | 'negative' | 'neutral';

type StatProps = {
  title?: string;
  value?: string | number;
  change?: string;
  changeType?: ChangeType;
  icon?: React.ReactNode;
  description?: string;
  size?: StatSize;
  variant?: StatVariant;
  className?: string;
};

const Stat = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  description,
  size = 'md',
  variant = 'default',
  className = '',
}: StatProps) => {
  const getSizeClasses = (): string => {
    switch (size) {
      case 'sm': return 'p-4';
      case 'lg': return 'p-8';
      case 'xl': return 'p-10';
      default: return 'p-6';
    }
  };

  const getVariantClasses = (): string => {
    switch (variant) {
      case 'outlined': return 'border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800';
      case 'filled': return 'bg-gray-50 dark:bg-slate-800';
      case 'elevated': return 'bg-white dark:bg-slate-800 shadow-lg';
      default: return 'bg-white dark:bg-slate-800 shadow-sm';
    }
  };

  const getChangeClasses = (): string => {
    switch (changeType) {
      case 'positive': return 'text-green-600 dark:text-green-400';
      case 'negative': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-blue-300';
    }
  };

  return (
    <div className={\`\${getVariantClasses()} rounded-lg \${getSizeClasses()} \${className}\`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-blue-300 truncate">{title}</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900 dark:text-blue-100">{value}</p>
            {change && (
              <div className={\`ml-2 flex items-baseline text-sm font-medium \${getChangeClasses()}\`}>
                <span className="ml-1">{change}</span>
              </div>
            )}
          </div>
          {description && <p className="text-sm text-gray-500 dark:text-blue-400 mt-1">{description}</p>}
        </div>
        {icon && (
          <div className="flex-shrink-0 ml-4">
            <div className="w-8 h-8 text-gray-400 dark:text-blue-400">{icon}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stat;`;
      }
      return `// Complete Stat Component - Copy & Paste Ready
import React from 'react';

const Stat = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  trend,
  description,
  size = 'md',
  variant = 'default',
  className = '',
  ...props
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'p-4';
      case 'lg': return 'p-8';
      case 'xl': return 'p-10';
      default: return 'p-6';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined': return 'border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800';
      case 'filled': return 'bg-gray-50 dark:bg-slate-800';
      case 'elevated': return 'bg-white dark:bg-slate-800 shadow-lg';
      default: return 'bg-white dark:bg-slate-800 shadow-sm';
    }
  };

  const getChangeClasses = () => {
    switch (changeType) {
      case 'positive': return 'text-green-600 dark:text-green-400';
      case 'negative': return 'text-red-600 dark:text-red-400';
      case 'neutral': return 'text-gray-600 dark:text-blue-300';
      default: return 'text-gray-600 dark:text-blue-300';
    }
  };

  return (
    <div className={\`\${getVariantClasses()} rounded-lg \${getSizeClasses()} \${className}\`} {...props}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-blue-300 truncate">{title}</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900 dark:text-blue-100">{value}</p>
            {change && (
              <div className={\`ml-2 flex items-baseline text-sm font-medium \${getChangeClasses()}\`}>
                <span className="ml-1">{change}</span>
              </div>
            )}
          </div>
          {description && <p className="text-sm text-gray-500 dark:text-blue-400 mt-1">{description}</p>}
        </div>
        {icon && (
          <div className="flex-shrink-0 ml-4">
            <div className="w-8 h-8 text-gray-400 dark:text-blue-400">{icon}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stat;`;

    case 'timeline':
      if (isTypeScript) {
        return `// Complete Timeline Component (TypeScript) - Copy & Paste Ready
import React from 'react';

type TimelineOrientation = 'vertical' | 'horizontal';
type TimelineSize = 'sm' | 'md' | 'lg' | 'xl';

type TimelineItem = {
  id?: string | number;
  title: string;
  description?: string;
  time?: string;
  icon?: React.ReactNode;
};

type TimelineProps = {
  items?: TimelineItem[];
  orientation?: TimelineOrientation;
  size?: TimelineSize;
  className?: string;
};

const Timeline = ({
  items = [],
  orientation = 'vertical',
  size = 'md',
  className = '',
}: TimelineProps) => {
  const getOrientationClasses = (): string => {
    switch (orientation) {
      case 'horizontal': return 'flex flex-row overflow-x-auto';
      default: return 'flex flex-col';
    }
  };

  const getSizeClasses = (): string => {
    switch (size) {
      case 'sm': return 'space-y-3';
      case 'lg': return 'space-y-6';
      case 'xl': return 'space-y-8';
      default: return 'space-y-4';
    }
  };

  return (
    <div className={\`bg-white dark:bg-slate-800 shadow-sm rounded-lg p-4 \${className}\`}>
      <div className={\`\${getOrientationClasses()} \${getSizeClasses()}\`}>
        {items.map((item, index) => (
          <div key={item.id ?? index} className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">
              {item.icon ?? index + 1}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900 dark:text-blue-100">{item.title}</h3>
                {item.time && <span className="text-xs text-gray-500 dark:text-blue-400">{item.time}</span>}
              </div>
              {item.description && (
                <p className="mt-1 text-sm text-gray-600 dark:text-blue-300">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;`;
      }
      return `// Complete Timeline Component - Copy & Paste Ready
import React from 'react';

const Timeline = ({
  items = [],
  orientation = 'vertical',
  size = 'md',
  variant = 'default',
  className = '',
  ...props
}) => {
  const getOrientationClasses = () => {
    switch (orientation) {
      case 'horizontal': return 'flex flex-row overflow-x-auto';
      default: return 'flex flex-col';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'space-y-3';
      case 'lg': return 'space-y-6';
      case 'xl': return 'space-y-8';
      default: return 'space-y-4';
    }
  };

  return (
    <div className={\`bg-white dark:bg-slate-800 shadow-sm rounded-lg p-4 \${className}\`} {...props}>
      <div className={\`\${getOrientationClasses()} \${getSizeClasses()}\`}>
        {items.map((item, index) => (
          <div key={item.id || index} className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">
              {item.icon || (index + 1)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900 dark:text-blue-100">{item.title}</h3>
                {item.time && <span className="text-xs text-gray-500 dark:text-blue-400">{item.time}</span>}
              </div>
              {item.description && (
                <p className="mt-1 text-sm text-gray-600 dark:text-blue-300">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;`;

    case 'avatar':
      if (isTypeScript) {
        return `// Complete Avatar Component (TypeScript) - Copy & Paste Ready
import React from 'react';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type AvatarShape = 'circle' | 'square' | 'rounded';
type AvatarColor = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' | 'indigo' | 'gray';

type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: boolean;
  statusColor?: string;
  icon?: React.ReactNode;
  color?: AvatarColor;
  className?: string;
};

const Avatar = ({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  status,
  icon,
  color = 'blue',
  className = '',
}: AvatarProps) => {
  const getSizeClasses = (): string => {
    switch (size) {
      case 'xs': return 'w-6 h-6 text-xs';
      case 'sm': return 'w-8 h-8 text-sm';
      case 'lg': return 'w-12 h-12 text-lg';
      case 'xl': return 'w-16 h-16 text-xl';
      case '2xl': return 'w-20 h-20 text-2xl';
      default: return 'w-10 h-10 text-base';
    }
  };

  const getShapeClasses = (): string => {
    switch (shape) {
      case 'square': return 'rounded-md';
      case 'rounded': return 'rounded-lg';
      default: return 'rounded-full';
    }
  };

  const getColorClasses = (): string => {
    switch (color) {
      case 'green': return 'bg-green-500 text-white';
      case 'red': return 'bg-red-500 text-white';
      case 'yellow': return 'bg-yellow-500 text-white';
      case 'purple': return 'bg-purple-500 text-white';
      case 'pink': return 'bg-pink-500 text-white';
      case 'indigo': return 'bg-indigo-500 text-white';
      case 'gray': return 'bg-gray-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  const getInitials = (name?: string): string => {
    if (!name) return '';
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={\`relative inline-block \${className}\`}>
      <div className={\`\${getSizeClasses()} \${getShapeClasses()} flex items-center justify-center overflow-hidden \${getColorClasses()}\`}>
        {src ? (
          <img src={src} alt={alt || name || 'Avatar'} className="w-full h-full object-cover" />
        ) : icon ? (
          <div className="flex items-center justify-center">{icon}</div>
        ) : (
          <span className="font-medium">{getInitials(name)}</span>
        )}
      </div>
      {status && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-800" />
      )}
    </div>
  );
};

export default Avatar;`;
      }
      return `// Complete Avatar Component - Copy & Paste Ready
import React from 'react';

const Avatar = ({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  status,
  statusColor = 'green',
  icon,
  color = 'blue',
  className = '',
  ...props
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'xs': return 'w-6 h-6 text-xs';
      case 'sm': return 'w-8 h-8 text-sm';
      case 'md': return 'w-10 h-10 text-base';
      case 'lg': return 'w-12 h-12 text-lg';
      case 'xl': return 'w-16 h-16 text-xl';
      case '2xl': return 'w-20 h-20 text-2xl';
      default: return 'w-10 h-10 text-base';
    }
  };

  const getShapeClasses = () => {
    switch (shape) {
      case 'square': return 'rounded-md';
      case 'rounded': return 'rounded-lg';
      case 'circle': return 'rounded-full';
      default: return 'rounded-full';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'blue': return 'bg-blue-500 text-white';
      case 'green': return 'bg-green-500 text-white';
      case 'red': return 'bg-red-500 text-white';
      case 'yellow': return 'bg-yellow-500 text-white';
      case 'purple': return 'bg-purple-500 text-white';
      case 'pink': return 'bg-pink-500 text-white';
      case 'indigo': return 'bg-indigo-500 text-white';
      case 'gray': return 'bg-gray-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  const getInitials = (name) => {
    if (!name) return '';
    return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className={\`relative inline-block \${className}\`} {...props}>
      <div className={\`\${getSizeClasses()} \${getShapeClasses()} flex items-center justify-center overflow-hidden \${getColorClasses()}\`}>
        {src ? (
          <img src={src} alt={alt || name || 'Avatar'} className="w-full h-full object-cover" />
        ) : icon ? (
          <div className="flex items-center justify-center">{icon}</div>
        ) : (
          <span className="font-medium">{getInitials(name)}</span>
        )}
      </div>
      {status && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-800" />
      )}
    </div>
  );
};

export default Avatar;`;

    default: {
      const componentName = component.name.replace(/\s+/g, '');
      if (isTypeScript) {
        return `// ${component.name} Component (TypeScript) - Copy & Paste Ready
import React from 'react';

type ${componentName}Props = {
  content?: string;
  className?: string;
};

const ${componentName} = ({ content, className = '' }: ${componentName}Props) => {
  return (
    <div className={\`w-full \${className}\`}>
      <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
        <p className="text-gray-600 dark:text-blue-300">{content}</p>
      </div>
    </div>
  );
};

const ${componentName}Example = () => {
  return (
    <${componentName} content="${component.description}" />
  );
};

export default ${componentName}Example;`;
      }
      return `// ${component.name} Component - Copy & Paste Ready
import React from 'react';

const ${componentName} = ({ content }) => {
  return (
    <div className="w-full">
      <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
        <p className="text-gray-600 dark:text-blue-300">
          ${component.description}
        </p>
      </div>
    </div>
  );
};

const ${componentName}Example = () => {
  return (
    <${componentName}
      content="${component.description}"
    />
  );
};

export default ${componentName}Example;`;
    }
  }
};
