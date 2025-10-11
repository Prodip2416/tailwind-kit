import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({ id, children, className = '' }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${className} ${isDragging ? 'shadow-lg' : ''}`}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

const SortableColumn = ({ id, children, className = '' }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${className} ${isDragging ? 'shadow-lg' : ''}`}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

const KanbanBoard = ({
  columns = [],
  onReorder,
  className = '',
  columnClassName = '',
  itemClassName = '',
  children,
  showStats = true,
  showProgress = true,
}) => {
  const [localColumns, setLocalColumns] = useState(columns);
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    // Find the containers
    const activeContainer = localColumns.find(col => 
      col.items.some(item => item.id === activeId)
    );
    const overContainer = localColumns.find(col => 
      col.items.some(item => item.id === overId) || col.id === overId
    );

    if (!activeContainer || !overContainer) return;

    if (activeContainer.id === overContainer.id) return;

    setLocalColumns(columns => {
      const activeItems = activeContainer.items;
      const overItems = overContainer.items;

      const activeIndex = activeItems.findIndex(item => item.id === activeId);
      const overIndex = overItems.findIndex(item => item.id === overId);

      let newIndex;
      if (overId in overItems) {
        newIndex = overIndex;
      } else {
        newIndex = overItems.length;
      }

      return columns.map(column => {
        if (column.id === activeContainer.id) {
          return {
            ...column,
            items: column.items.filter(item => item.id !== activeId)
          };
        } else if (column.id === overContainer.id) {
          return {
            ...column,
            items: [
              ...column.items.slice(0, newIndex),
              activeItems[activeIndex],
              ...column.items.slice(newIndex)
            ]
          };
        }
        return column;
      });
    });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    // Find the containers
    const activeContainer = localColumns.find(col => 
      col.items.some(item => item.id === activeId)
    );
    const overContainer = localColumns.find(col => 
      col.items.some(item => item.id === overId) || col.id === overId
    );

    if (!activeContainer || !overContainer) return;

    if (activeContainer.id === overContainer.id) {
      // Reordering within the same column
      const activeIndex = activeContainer.items.findIndex(item => item.id === activeId);
      const overIndex = activeContainer.items.findIndex(item => item.id === overId);

      if (activeIndex !== overIndex) {
        setLocalColumns(columns => {
          const newColumns = columns.map(column => {
            if (column.id === activeContainer.id) {
              return {
                ...column,
                items: arrayMove(column.items, activeIndex, overIndex)
              };
            }
            return column;
          });
          if (onReorder) onReorder(newColumns);
          return newColumns;
        });
      }
    } else {
      // Moving between columns
      const activeIndex = activeContainer.items.findIndex(item => item.id === activeId);
      const overIndex = overContainer.items.findIndex(item => item.id === overId);

      let newIndex;
      if (overId in overContainer.items) {
        newIndex = overIndex;
      } else {
        newIndex = overContainer.items.length;
      }

      setLocalColumns(columns => {
        const newColumns = columns.map(column => {
          if (column.id === activeContainer.id) {
            return {
              ...column,
              items: column.items.filter(item => item.id !== activeId)
            };
          } else if (column.id === overContainer.id) {
            return {
              ...column,
              items: [
                ...column.items.slice(0, newIndex),
                activeContainer.items[activeIndex],
                ...column.items.slice(newIndex)
              ]
            };
          }
          return column;
        });
        if (onReorder) onReorder(newColumns);
        return newColumns;
      });
    }
  };

  const activeItem = localColumns
    .flatMap(col => col.items)
    .find(item => item.id === activeId);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-200 dark:border-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-700';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-600';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'pending':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className={`flex gap-6 overflow-x-auto ${className}`}>
        {localColumns.map((column) => (
          <SortableColumn
            key={column.id}
            id={column.id}
            className={`flex-1 min-w-[320px] max-w-[400px] ${columnClassName}`}
          >
            <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4 min-h-[700px] shadow-sm border border-gray-200 dark:border-slate-700 w-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${column.color || 'bg-blue-500'}`}></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-blue-100">
                    {column.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  {showStats && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 dark:text-blue-100">
                        {column.items.length}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-slate-400">
                        tasks
                      </div>
                    </div>
                  )}
                  <div className="w-8 h-8 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-500 dark:text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <SortableContext
                items={column.items.map(item => item.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-4">
                  {column.items.map((item) => (
                    <SortableItem
                      key={item.id}
                      id={item.id}
                      className={itemClassName}
                    >
                      {children ? children(item) : (
                        <div className="group p-4 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 cursor-grab active:cursor-grabbing hover:scale-[1.01] w-full">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1 min-w-0 pr-2">
                              <h4 className="text-base font-semibold text-gray-900 dark:text-blue-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors line-clamp-2 break-words">
                                {item.title || item.name}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-blue-300 leading-relaxed line-clamp-3 break-words">
                                {item.description || item.content}
                              </p>
                            </div>
                            <div className="flex flex-col items-end space-y-1 flex-shrink-0">
                              {item.priority && (
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(item.priority)} whitespace-nowrap`}>
                                  {item.priority}
                                </span>
                              )}
                              {item.status && (
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)} whitespace-nowrap`}>
                                  {item.status}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Progress Bar */}
                          {showProgress && item.progress !== undefined && (
                            <div className="mb-4">
                              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-slate-400 mb-2">
                                <span>Progress</span>
                                <span>{item.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                                <div 
                                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${item.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          )}

                          {/* Footer */}
                          <div className="pt-3 border-t border-gray-100 dark:border-slate-600">
                            <div className="flex flex-col space-y-2">
                              {/* Top Row - Assignee and Due Date */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2 min-w-0 flex-1">
                                  {/* Assignee Avatar */}
                                  {item.assignee && (
                                    <div className="flex items-center space-x-2 min-w-0">
                                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                                        {item.assignee.charAt(0).toUpperCase()}
                                      </div>
                                      <span className="text-xs text-gray-600 dark:text-blue-300 truncate">
                                        {item.assignee}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                
                                {/* Due Date */}
                                {item.dueDate && (
                                  <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-slate-400 flex-shrink-0">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    <span className="whitespace-nowrap">{formatDate(item.dueDate)}</span>
                                  </div>
                                )}
                              </div>

                              {/* Bottom Row - Tags */}
                              {item.tags && item.tags.length > 0 && (
                                <div className="flex items-center space-x-1 flex-wrap">
                                  {item.tags.slice(0, 3).map((tag, index) => (
                                    <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 dark:bg-slate-600 dark:text-gray-300 whitespace-nowrap">
                                      {tag}
                                    </span>
                                  ))}
                                  {item.tags.length > 3 && (
                                    <span className="text-xs text-gray-500 dark:text-slate-400 whitespace-nowrap">
                                      +{item.tags.length - 3}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </div>
          </SortableColumn>
        ))}
      </div>
      <DragOverlay>
        {activeItem ? (
          <div className="p-6 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl shadow-2xl opacity-95 transform rotate-2">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2">
              {activeItem.title || activeItem.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-blue-300">
              {activeItem.description || activeItem.content}
            </p>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default KanbanBoard;
