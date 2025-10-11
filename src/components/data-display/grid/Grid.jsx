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
      case 'none':
        return 'gap-0';
      case 'sm':
        return 'gap-2';
      case 'md':
        return 'gap-4';
      case 'lg':
        return 'gap-6';
      case 'xl':
        return 'gap-8';
      default:
        return 'gap-4';
    }
  };

  const getGridClasses = () => {
    if (!responsive) {
      return `grid-cols-${columns}`;
    }

    switch (columns) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      case 5:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5';
      case 6:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
      case 12:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12';
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div
      className={`grid ${getGridClasses()} ${getGapClasses()} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Grid Item Component
export const GridItem = ({
  children,
  span = 1,
  start = 'auto',
  end = 'auto',
  className = '',
  ...props
}) => {
  const getSpanClasses = () => {
    if (span === 'full') return 'col-span-full';
    if (span === 'auto') return 'col-auto';
    return `col-span-${span}`;
  };

  const getStartClasses = () => {
    if (start === 'auto') return '';
    return `col-start-${start}`;
  };

  const getEndClasses = () => {
    if (end === 'auto') return '';
    return `col-end-${end}`;
  };

  return (
    <div
      className={`${getSpanClasses()} ${getStartClasses()} ${getEndClasses()} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Masonry Grid Component
export const MasonryGrid = ({
  children,
  columns = 3,
  gap = 'md',
  className = '',
  ...props
}) => {
  const getGapClasses = () => {
    switch (gap) {
      case 'none':
        return 'gap-0';
      case 'sm':
        return 'gap-2';
      case 'md':
        return 'gap-4';
      case 'lg':
        return 'gap-6';
      case 'xl':
        return 'gap-8';
      default:
        return 'gap-4';
    }
  };

  return (
    <div
      className={`columns-1 sm:columns-2 lg:columns-${columns} ${getGapClasses()} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Masonry Item Component
export const MasonryItem = ({ children, className = '', ...props }) => (
  <div className={`break-inside-avoid mb-4 ${className}`} {...props}>
    {children}
  </div>
);

// Flex Grid Component
export const FlexGrid = ({
  children,
  direction = 'row',
  wrap = true,
  justify = 'start',
  align = 'start',
  gap = 'md',
  className = '',
  ...props
}) => {
  const getDirectionClasses = () => {
    switch (direction) {
      case 'column':
        return 'flex-col';
      case 'column-reverse':
        return 'flex-col-reverse';
      case 'row-reverse':
        return 'flex-row-reverse';
      default:
        return 'flex-row';
    }
  };

  const getWrapClasses = () => {
    switch (wrap) {
      case false:
        return 'flex-nowrap';
      case 'wrap-reverse':
        return 'flex-wrap-reverse';
      default:
        return 'flex-wrap';
    }
  };

  const getJustifyClasses = () => {
    switch (justify) {
      case 'center':
        return 'justify-center';
      case 'end':
        return 'justify-end';
      case 'between':
        return 'justify-between';
      case 'around':
        return 'justify-around';
      case 'evenly':
        return 'justify-evenly';
      default:
        return 'justify-start';
    }
  };

  const getAlignClasses = () => {
    switch (align) {
      case 'center':
        return 'items-center';
      case 'end':
        return 'items-end';
      case 'baseline':
        return 'items-baseline';
      case 'stretch':
        return 'items-stretch';
      default:
        return 'items-start';
    }
  };

  const getGapClasses = () => {
    switch (gap) {
      case 'none':
        return 'gap-0';
      case 'sm':
        return 'gap-2';
      case 'md':
        return 'gap-4';
      case 'lg':
        return 'gap-6';
      case 'xl':
        return 'gap-8';
      default:
        return 'gap-4';
    }
  };

  return (
    <div
      className={`flex ${getDirectionClasses()} ${getWrapClasses()} ${getJustifyClasses()} ${getAlignClasses()} ${getGapClasses()} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Flex Item Component
export const FlexItem = ({
  children,
  grow = false,
  shrink = true,
  basis = 'auto',
  className = '',
  ...props
}) => {
  const getGrowClasses = () => {
    if (grow === true) return 'flex-grow';
    if (grow === false) return 'flex-grow-0';
    return `flex-grow-${grow}`;
  };

  const getShrinkClasses = () => {
    if (shrink === true) return 'flex-shrink';
    if (shrink === false) return 'flex-shrink-0';
    return `flex-shrink-${shrink}`;
  };

  const getBasisClasses = () => {
    if (basis === 'auto') return 'flex-basis-auto';
    if (basis === 'full') return 'flex-basis-full';
    return `flex-basis-${basis}`;
  };

  return (
    <div
      className={`${getGrowClasses()} ${getShrinkClasses()} ${getBasisClasses()} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
