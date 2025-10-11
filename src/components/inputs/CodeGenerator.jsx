// Code Generator Component
export const generateCodeExample = (selectedComponent) => {
  if (!selectedComponent) return '';

  const componentId = selectedComponent.id;

  switch (componentId) {
    case 'date':
      return `// Complete CustomDatePicker Component - Copy & Paste Ready
import { useState, useRef, useEffect } from 'react';

const CustomDatePicker = ({
  value,
  onChange,
  name,
  placeholder = 'Select date...',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    value ? new Date(value + 'T00:00:00') : null
  );
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());
  const [hoveredDate, setHoveredDate] = useState(null);
  const calendarRef = useRef(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    if (value) {
      const date = new Date(value + 'T00:00:00');
      setSelectedDate(date);
      setCurrentMonth(date);
    } else {
      setSelectedDate(null);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const handleDateSelect = (date) => {
    if (date) {
      setSelectedDate(date);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = \`\${year}-\${month}-\${day}\`;
      onChange({ target: { name, value: formattedDate } });
      setIsOpen(false);
    }
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date) => {
    if (!date || !selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isHovered = (date) => {
    if (!date || !hoveredDate) return false;
    return date.toDateString() === hoveredDate.toDateString();
  };

  const formatDisplayDate = () => {
    if (!selectedDate) return placeholder;
    return selectedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const daysInMonth = getDaysInMonth(currentMonth);

  return (
    <div className="relative" ref={calendarRef}>
      <div
        className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm cursor-pointer min-w-0 bg-white dark:bg-slate-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={
            selectedDate
              ? 'text-gray-900 dark:text-blue-100'
              : 'text-gray-500 dark:text-slate-400'
          }
        >
          {formatDisplayDate()}
        </span>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-xl z-50 p-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>

            <button
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {days.map((day) => (
              <div
                key={day}
                className="text-center text-xs font-medium text-gray-500 dark:text-blue-300 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {daysInMonth.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                onMouseEnter={() => setHoveredDate(date)}
                onMouseLeave={() => setHoveredDate(null)}
                className={\`
                  h-8 w-8 text-sm rounded-lg transition-all duration-200 flex items-center justify-center
                  \${
                    !date
                      ? 'cursor-default'
                      : isSelected(date)
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : isToday(date)
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold'
                      : isHovered(date)
                      ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-blue-100'
                      : 'text-gray-700 dark:text-blue-200 hover:bg-gray-100 dark:hover:bg-slate-700'
                  }
                \`}
                disabled={!date}
              >
                {date && date.getDate()}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-4 pt-3 border-t border-gray-200 dark:border-slate-600">
            <button
              onClick={() => {
                const today = new Date();
                handleDateSelect(today);
              }}
              className="px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
            >
              Today
            </button>
            <button
              onClick={() => {
                setSelectedDate(null);
                onChange({ target: { name, value: '' } });
                setIsOpen(false);
              }}
              className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-blue-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DateInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <CustomDatePicker
      name="date"
      value={value}
      onChange={handleChange}
      placeholder="Select a date..."
    />
  );
};

export default DateInput;`;

    case 'text':
      return `// Text Input Component - Copy & Paste Ready
import { useState } from 'react';

const TextInput = ({ value, onChange, name, placeholder = 'Enter text...' }) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0"
    />
  );
};

const TextInputExample = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <TextInput
      name="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter text here..."
    />
  );
};

export default TextInputExample;`;

    case 'email':
      return `// Email Input Component - Copy & Paste Ready
import { useState } from 'react';

const EmailInput = ({ value, onChange, name, placeholder = 'Enter email...' }) => {
  return (
    <input
      type="email"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0"
    />
  );
};

const EmailInputExample = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <EmailInput
      name="email"
      value={value}
      onChange={handleChange}
      placeholder="Enter email address..."
    />
  );
};

export default EmailInputExample;`;

    default:
      return `// ${selectedComponent.name} Component - Copy & Paste Ready
import { useState } from 'react';

const ${selectedComponent.name.replace(
        /\s+/g,
        ''
      )} = ({ value, onChange, name }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder="${selectedComponent.description}"
        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
      />
    </div>
  );
};

const ${selectedComponent.name.replace(/\s+/g, '')}Example = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <${selectedComponent.name.replace(/\s+/g, '')}
      name="${componentId}"
      value={value}
      onChange={handleChange}
    />
  );
};

export default ${selectedComponent.name.replace(/\s+/g, '')}Example;`;
  }
};
