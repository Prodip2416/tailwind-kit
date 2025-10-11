import { useState, useRef, useEffect } from 'react';

const DateRangePicker = ({
  value,
  onChange,
  name,
  placeholder = 'Select date range...',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(
    value?.start ? new Date(value.start + 'T00:00:00') : null
  );
  const [endDate, setEndDate] = useState(
    value?.end ? new Date(value.end + 'T00:00:00') : null
  );
  const [currentMonth, setCurrentMonth] = useState(startDate || new Date());
  const [hoveredDate, setHoveredDate] = useState(null);
  const [selectingEnd, setSelectingEnd] = useState(false);
  const calendarRef = useRef(null);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    if (value?.start) {
      setStartDate(new Date(value.start + 'T00:00:00'));
      setCurrentMonth(new Date(value.start + 'T00:00:00'));
    }
    if (value?.end) {
      setEndDate(new Date(value.end + 'T00:00:00'));
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsOpen(false);
        setSelectingEnd(false);
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
    if (!date) return;

    if (!startDate || (startDate && endDate)) {
      // Start new selection
      setStartDate(date);
      setEndDate(null);
      setSelectingEnd(true);
    } else if (selectingEnd) {
      // Complete the range
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
      setSelectingEnd(false);
      setIsOpen(false);

      // Update parent component
      const startStr = formatDateString(startDate);
      const endStr = formatDateString(date < startDate ? startDate : date);
      onChange({
        target: {
          name,
          value: {
            start: date < startDate ? startStr : formatDateString(startDate),
            end: date < startDate ? startStr : endStr,
          },
        },
      });
    }
  };

  const formatDateString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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

  const isStartDate = (date) => {
    if (!date || !startDate) return false;
    return date.toDateString() === startDate.toDateString();
  };

  const isEndDate = (date) => {
    if (!date || !endDate) return false;
    return date.toDateString() === endDate.toDateString();
  };

  const isInRange = (date) => {
    if (!date || !startDate || !endDate) return false;
    return date > startDate && date < endDate;
  };

  const isHovered = (date) => {
    if (!date || !hoveredDate) return false;
    return date.toDateString() === hoveredDate.toDateString();
  };

  const formatDisplayDate = () => {
    if (!startDate && !endDate) return placeholder;
    if (startDate && !endDate) {
      return `${startDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })} - Select end date`;
    }
    if (startDate && endDate) {
      return `${startDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })} - ${endDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })}`;
    }
    return placeholder;
  };

  const clearRange = () => {
    setStartDate(null);
    setEndDate(null);
    setSelectingEnd(false);
    onChange({ target: { name, value: { start: '', end: '' } } });
    setIsOpen(false);
  };

  const daysInMonth = getDaysInMonth(currentMonth);

  return (
    <div className="relative" ref={calendarRef}>
      {/* Input Field */}
      <div
        className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm cursor-pointer min-w-0 bg-white dark:bg-slate-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={
            startDate || endDate
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

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-xl z-50 p-4">
          {/* Calendar Header */}
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

          {/* Selection Status */}
          <div className="mb-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
            <p className="text-xs text-blue-800 dark:text-blue-200">
              {!startDate
                ? 'Select start date'
                : !endDate
                ? 'Select end date'
                : 'Range selected'}
            </p>
          </div>

          {/* Days of Week Header */}
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

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {daysInMonth.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                onMouseEnter={() => setHoveredDate(date)}
                onMouseLeave={() => setHoveredDate(null)}
                className={`
                  h-8 w-8 text-sm rounded-lg transition-all duration-200 flex items-center justify-center relative
                  ${
                    !date
                      ? 'cursor-default'
                      : isStartDate(date)
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105 font-semibold'
                      : isEndDate(date)
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105 font-semibold'
                      : isInRange(date)
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : isToday(date)
                      ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-blue-100 font-semibold'
                      : isHovered(date)
                      ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-blue-100'
                      : 'text-gray-700 dark:text-blue-200 hover:bg-gray-100 dark:hover:bg-slate-700'
                  }
                `}
                disabled={!date}
              >
                {date && date.getDate()}
                {/* Range indicator line */}
                {date && isInRange(date) && (
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-0.5 bg-blue-300 dark:bg-blue-400"></div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex justify-between mt-4 pt-3 border-t border-gray-200 dark:border-slate-600">
            <button
              onClick={() => {
                const today = new Date();
                const tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() + 1);
                setStartDate(today);
                setEndDate(tomorrow);
                setSelectingEnd(false);
                onChange({
                  target: {
                    name,
                    value: {
                      start: formatDateString(today),
                      end: formatDateString(tomorrow),
                    },
                  },
                });
                setIsOpen(false);
              }}
              className="px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
            >
              Today + 1
            </button>
            <button
              onClick={clearRange}
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

export default DateRangePicker;
