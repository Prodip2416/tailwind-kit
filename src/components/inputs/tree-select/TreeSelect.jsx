import { useState, useRef, useEffect } from 'react';

const TreeSelect = ({
  value,
  onChange,
  name,
  placeholder = 'Select options...',
  options = [],
  multiple = false,
  searchable = true,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValues, setSelectedValues] = useState(value || []);
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const handleSelect = (option) => {
    if (disabled) return;

    let newSelected;
    if (multiple) {
      if (selectedValues.includes(option.value)) {
        newSelected = selectedValues.filter((v) => v !== option.value);
      } else {
        newSelected = [...selectedValues, option.value];
      }
    } else {
      newSelected = [option.value];
      setIsOpen(false);
    }

    setSelectedValues(newSelected);
    onChange({
      target: { name, value: multiple ? newSelected : newSelected[0] },
    });
  };

  const isSelected = (optionValue) => {
    return selectedValues.includes(optionValue);
  };

  const hasChildren = (option) => {
    return option.children && option.children.length > 0;
  };

  const isExpanded = (optionId) => {
    return expandedNodes.has(optionId);
  };

  const filterOptions = (options, term) => {
    if (!term) return options;

    return options.filter((option) => {
      const matchesSearch = option.label
        .toLowerCase()
        .includes(term.toLowerCase());
      const hasMatchingChildren =
        hasChildren(option) && filterOptions(option.children, term).length > 0;
      return matchesSearch || hasMatchingChildren;
    });
  };

  const renderOption = (option, level = 0) => {
    const hasChildren = option.children && option.children.length > 0;
    const isExpanded = expandedNodes.has(option.id);
    const isSelected = selectedValues.includes(option.value);
    const indent = level * 20;

    return (
      <div key={option.id}>
        <div
          className={`
            flex items-center px-3 py-2 text-sm cursor-pointer transition-colors
            ${
              isSelected
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                : 'hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-blue-200'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          style={{ paddingLeft: `${indent + 12}px` }}
          onClick={() => {
            if (hasChildren) {
              toggleNode(option.id);
            } else {
              handleSelect(option);
            }
          }}
        >
          {/* Expand/Collapse Icon */}
          {hasChildren && (
            <div className="mr-2 flex-shrink-0">
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isExpanded ? 'rotate-90' : ''
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
            </div>
          )}

          {/* Checkbox for multiple selection */}
          {multiple && !hasChildren && (
            <div className="mr-2 flex-shrink-0">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleSelect(option)}
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"
              />
            </div>
          )}

          {/* Radio for single selection */}
          {!multiple && !hasChildren && (
            <div className="mr-2 flex-shrink-0">
              <input
                type="radio"
                checked={isSelected}
                onChange={() => handleSelect(option)}
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"
              />
            </div>
          )}

          {/* Option Label */}
          <span className="flex-1 truncate">{option.label}</span>
        </div>

        {/* Render Children */}
        {hasChildren && isExpanded && (
          <div>
            {option.children.map((child) => renderOption(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const getDisplayText = () => {
    if (selectedValues.length === 0) return placeholder;

    if (multiple) {
      if (selectedValues.length === 1) {
        const option = findOptionByValue(options, selectedValues[0]);
        return option ? option.label : selectedValues[0];
      }
      return `${selectedValues.length} items selected`;
    } else {
      const option = findOptionByValue(options, selectedValues[0]);
      return option ? option.label : selectedValues[0];
    }
  };

  const findOptionByValue = (options, value) => {
    for (const option of options) {
      if (option.value === value) return option;
      if (option.children) {
        const found = findOptionByValue(option.children, value);
        if (found) return found;
      }
    }
    return null;
  };

  const filteredOptions = filterOptions(options, searchTerm);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Input Field */}
      <div
        className={`
          w-full px-3 py-2 pr-10 border border-gray-300 dark:border-slate-600 rounded-md 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent 
          dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm 
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          min-w-0 bg-white dark:bg-slate-700
        `}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span
          className={
            selectedValues.length > 0
              ? 'text-gray-900 dark:text-blue-100'
              : 'text-gray-500 dark:text-slate-400'
          }
        >
          {getDisplayText()}
        </span>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className={`w-4 h-4 text-gray-500 dark:text-slate-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
          {/* Search Input */}
          {searchable && (
            <div className="p-2 border-b border-gray-200 dark:border-slate-600">
              <input
                type="text"
                placeholder="Search options..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100"
              />
            </div>
          )}

          {/* Options List */}
          <div className="py-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => renderOption(option))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500 dark:text-blue-300">
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TreeSelect;
