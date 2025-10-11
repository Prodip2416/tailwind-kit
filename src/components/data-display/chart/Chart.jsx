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
  // Sample data if none provided
  const sampleData =
    data.length > 0
      ? data
      : [
          { label: 'Jan', value: 65 },
          { label: 'Feb', value: 59 },
          { label: 'Mar', value: 80 },
          { label: 'Apr', value: 81 },
          { label: 'May', value: 56 },
          { label: 'Jun', value: 55 },
        ];

  const maxValue = Math.max(...sampleData.map((item) => item.value));
  const minValue = Math.min(...sampleData.map((item) => item.value));
  const range = maxValue - minValue;

  const renderBarChart = () => (
    <div className="flex items-end justify-between h-full space-x-1">
      {sampleData.map((item, index) => {
        const height = (item.value / maxValue) * 100;
        return (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="w-full bg-blue-500 dark:bg-blue-400 rounded-t"
              style={{ height: `${height}%` }}
            />
            <div className="text-xs text-gray-600 dark:text-blue-300 mt-1">
              {item.label}
            </div>
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
          points={sampleData
            .map((item, index) => {
              const x = (index / (sampleData.length - 1)) * 100;
              const y = 100 - ((item.value - minValue) / range) * 100;
              return `${x},${y}`;
            })
            .join(' ')}
        />
        {sampleData.map((item, index) => {
          const x = (index / (sampleData.length - 1)) * 100;
          const y = 100 - ((item.value - minValue) / range) * 100;
          return <circle key={index} cx={x} cy={y} r="3" fill="#3B82F6" />;
        })}
      </svg>
    </div>
  );

  const renderPieChart = () => {
    let cumulativePercentage = 0;
    const radius = 80;
    const centerX = 50;
    const centerY = 50;

    return (
      <div className="flex items-center justify-center h-full">
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          className="transform -rotate-90"
        >
          {sampleData.map((item, index) => {
            const percentage =
              (item.value / sampleData.reduce((sum, d) => sum + d.value, 0)) *
              100;
            const startAngle = (cumulativePercentage / 100) * 360;
            const endAngle = ((cumulativePercentage + percentage) / 100) * 360;

            const x1 =
              centerX + radius * Math.cos((startAngle * Math.PI) / 180);
            const y1 =
              centerY + radius * Math.sin((startAngle * Math.PI) / 180);
            const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
            const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180);

            const largeArcFlag = percentage > 50 ? 1 : 0;
            const pathData = [
              `M ${centerX} ${centerY}`,
              `L ${x1} ${y1}`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              'Z',
            ].join(' ');

            cumulativePercentage += percentage;

            return (
              <path
                key={index}
                d={pathData}
                fill={colors[index % colors.length]}
                stroke="white"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>
    );
  };

  const renderDoughnutChart = () => {
    let cumulativePercentage = 0;
    const radius = 60;
    const innerRadius = 30;
    const centerX = 50;
    const centerY = 50;

    return (
      <div className="flex items-center justify-center h-full">
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          className="transform -rotate-90"
        >
          {sampleData.map((item, index) => {
            const percentage =
              (item.value / sampleData.reduce((sum, d) => sum + d.value, 0)) *
              100;
            const startAngle = (cumulativePercentage / 100) * 360;
            const endAngle = ((cumulativePercentage + percentage) / 100) * 360;

            const x1 =
              centerX + radius * Math.cos((startAngle * Math.PI) / 180);
            const y1 =
              centerY + radius * Math.sin((startAngle * Math.PI) / 180);
            const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
            const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180);

            const x1Inner =
              centerX + innerRadius * Math.cos((startAngle * Math.PI) / 180);
            const y1Inner =
              centerY + innerRadius * Math.sin((startAngle * Math.PI) / 180);
            const x2Inner =
              centerX + innerRadius * Math.cos((endAngle * Math.PI) / 180);
            const y2Inner =
              centerY + innerRadius * Math.sin((endAngle * Math.PI) / 180);

            const largeArcFlag = percentage > 50 ? 1 : 0;
            const pathData = [
              `M ${x1} ${y1}`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              `L ${x2Inner} ${y2Inner}`,
              `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1Inner} ${y1Inner}`,
              'Z',
            ].join(' ');

            cumulativePercentage += percentage;

            return (
              <path
                key={index}
                d={pathData}
                fill={colors[index % colors.length]}
                stroke="white"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>
    );
  };

  const renderAreaChart = () => (
    <div className="relative h-full">
      <svg width="100%" height="100%" className="overflow-visible">
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#areaGradient)"
          d={`M 0,100 ${sampleData
            .map((item, index) => {
              const x = (index / (sampleData.length - 1)) * 100;
              const y = 100 - ((item.value - minValue) / range) * 100;
              return `L ${x},${y}`;
            })
            .join(' ')} L 100,100 Z`}
        />
        <polyline
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
          points={sampleData
            .map((item, index) => {
              const x = (index / (sampleData.length - 1)) * 100;
              const y = 100 - ((item.value - minValue) / range) * 100;
              return `${x},${y}`;
            })
            .join(' ')}
        />
      </svg>
    </div>
  );

  const renderChart = () => {
    switch (type) {
      case 'line':
        return renderLineChart();
      case 'pie':
        return renderPieChart();
      case 'doughnut':
        return renderDoughnutChart();
      case 'area':
        return renderAreaChart();
      default:
        return renderBarChart();
    }
  };

  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 ${className}`}
      {...props}
    >
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 dark:text-blue-300">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Chart */}
      <div className="relative" style={{ width, height }}>
        {showGrid && (
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="overflow-visible">
              {Array.from({ length: 5 }, (_, i) => (
                <line
                  key={i}
                  x1="0"
                  y1={`${(i / 4) * 100}%`}
                  x2="100%"
                  y2={`${(i / 4) * 100}%`}
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
              ))}
            </svg>
          </div>
        )}
        {renderChart()}
      </div>

      {/* Legend */}
      {showLegend && (type === 'pie' || type === 'doughnut') && (
        <div className="mt-4 flex flex-wrap justify-center space-x-4">
          {sampleData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span className="text-sm text-gray-600 dark:text-blue-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chart;
