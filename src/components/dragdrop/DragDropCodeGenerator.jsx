export const generateDragDropCode = (component, language = 'js') => {
  const isTypeScript = language === 'ts';

  switch (component.id) {
    case 'sortable-list':
      if (isTypeScript) {
        return `import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableItem {
  id: string;
  content?: string;
  name?: string;
  title?: string;
  status?: string;
}

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

interface SortableListProps {
  items?: SortableItem[];
  onReorder?: (items: SortableItem[]) => void;
  className?: string;
  itemClassName?: string;
  children?: (item: SortableItem) => React.ReactNode;
}

const SortableItemComponent: React.FC<SortableItemProps> = ({ id, children, className = '' }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={\`\${className} \${isDragging ? 'shadow-lg' : ''}\`}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

const SortableList: React.FC<SortableListProps> = ({
  items = [],
  onReorder,
  className = '',
  itemClassName = '',
  children,
}) => {
  const [localItems, setLocalItems] = useState<SortableItem[]>(items);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent): void => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setLocalItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        if (onReorder) onReorder(newItems);
        return newItems;
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={localItems.map(item => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className={className}>
          {localItems.map((item) => (
            <SortableItemComponent
              key={item.id}
              id={item.id}
              className={itemClassName}
            >
              {children ? children(item) : (
                <div className="p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"></div>
                    <span className="text-gray-900 dark:text-blue-100 font-medium">
                      {item.content || item.name || item.title}
                    </span>
                  </div>
                </div>
              )}
            </SortableItemComponent>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default SortableList;`;
      }
      return `// Complete Sortable List Component - Copy & Paste Ready
import React, { useState } from 'react';
import {
  DndContext,
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
      className={\`\${className} \${isDragging ? 'shadow-lg' : ''}\`}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

const SortableList = ({
  items = [],
  onReorder,
  className = '',
  itemClassName = '',
  children,
}) => {
  const [localItems, setLocalItems] = useState(items);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setLocalItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        if (onReorder) onReorder(newItems);
        return newItems;
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={localItems.map(item => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className={className}>
          {localItems.map((item) => (
            <SortableItem
              key={item.id}
              id={item.id}
              className={itemClassName}
            >
              {children ? children(item) : (
                <div className="p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"></div>
                    <span className="text-gray-900 dark:text-blue-100 font-medium">
                      {item.content || item.name || item.title}
                    </span>
                  </div>
                </div>
              )}
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default SortableList;`;

    case 'drag-drop-cards':
      if (isTypeScript) {
        return `import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface CardItem {
  id: string;
  title?: string;
  name?: string;
  description?: string;
  content?: string;
  status?: 'completed' | 'in-progress' | 'pending';
}

interface SortableCardProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

interface DragDropCardProps {
  items?: CardItem[];
  onReorder?: (items: CardItem[]) => void;
  className?: string;
  cardClassName?: string;
  columns?: number;
  children?: (item: CardItem) => React.ReactNode;
}

const SortableCard: React.FC<SortableCardProps> = ({ id, children, className = '' }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={\`\${className} \${isDragging ? 'shadow-2xl scale-105' : ''}\`}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

const DragDropCard: React.FC<DragDropCardProps> = ({
  items = [],
  onReorder,
  className = '',
  cardClassName = '',
  columns = 3,
  children,
}) => {
  const [localItems, setLocalItems] = useState<CardItem[]>(items);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent): void => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent): void => {
    const { active, over } = event;
    setActiveId(null);

    if (over && active.id !== over.id) {
      setLocalItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        if (onReorder) onReorder(newItems);
        return newItems;
      });
    }
  };

  const activeItem = localItems.find(item => item.id === activeId);

  const statusClass: Record<string, string> = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    pending: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={localItems.map(item => item.id)}
        strategy={rectSortingStrategy}
      >
        <div className={\`grid gap-4 \${className}\`} style={{ gridTemplateColumns: \`repeat(\${columns}, 1fr)\` }}>
          {localItems.map((item) => (
            <SortableCard key={item.id} id={item.id} className={cardClassName}>
              {children ? children(item) : (
                <div className="p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                      {item.title || item.name}
                    </h3>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 dark:text-blue-300 text-sm">
                    {item.description || item.content}
                  </p>
                  {item.status && (
                    <div className="mt-3">
                      <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium \${statusClass[item.status] ?? statusClass.pending}\`}>
                        {item.status}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </SortableCard>
          ))}
        </div>
      </SortableContext>
      <DragOverlay>
        {activeItem ? (
          <div className="p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-2xl opacity-90">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2">
              {activeItem.title || activeItem.name}
            </h3>
            <p className="text-gray-600 dark:text-blue-300 text-sm">
              {activeItem.description || activeItem.content}
            </p>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DragDropCard;`;
      }
      return `// Complete Drag & Drop Cards Component - Copy & Paste Ready
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
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableCard = ({ id, children, className = '' }) => {
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
      className={\`\${className} \${isDragging ? 'shadow-2xl scale-105' : ''}\`}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

const DragDropCard = ({
  items = [],
  onReorder,
  className = '',
  cardClassName = '',
  columns = 3,
  children,
}) => {
  const [localItems, setLocalItems] = useState(items);
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

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);

    if (active.id !== over.id) {
      setLocalItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        if (onReorder) onReorder(newItems);
        return newItems;
      });
    }
  };

  const activeItem = localItems.find(item => item.id === activeId);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={localItems.map(item => item.id)}
        strategy={rectSortingStrategy}
      >
        <div className={\`grid gap-4 \${className}\`} style={{ gridTemplateColumns: \`repeat(\${columns}, 1fr)\` }}>
          {localItems.map((item) => (
            <SortableCard
              key={item.id}
              id={item.id}
              className={cardClassName}
            >
              {children ? children(item) : (
                <div className="p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                      {item.title || item.name}
                    </h3>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 dark:text-blue-300 text-sm">
                    {item.description || item.content}
                  </p>
                  {item.status && (
                    <div className="mt-3">
                      <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium \${
                        item.status === 'completed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : item.status === 'in-progress'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }\`}>
                        {item.status}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </SortableCard>
          ))}
        </div>
      </SortableContext>
      <DragOverlay>
        {activeItem ? (
          <div className="p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-2xl opacity-90">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                {activeItem.title || activeItem.name}
              </h3>
              <div className="w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"></div>
            </div>
            <p className="text-gray-600 dark:text-blue-300 text-sm">
              {activeItem.description || activeItem.content}
            </p>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DragDropCard;`;

    case 'file-drop-zone':
      if (isTypeScript) {
        return `import React, { useState, useCallback } from 'react';
import { useDropzone, FileRejection, Accept } from 'react-dropzone';

interface FileDropZoneProps {
  onFilesAccepted?: (accepted: File[], rejected: FileRejection[]) => void;
  accept?: Accept;
  maxFiles?: number;
  maxSize?: number;
  className?: string;
  children?: React.ReactNode;
}

const FileDropZone: React.FC<FileDropZoneProps> = ({
  onFilesAccepted,
  accept = {
    'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
    'application/pdf': ['.pdf'],
    'text/*': ['.txt', '.md'],
  },
  maxFiles = 10,
  maxSize = 10 * 1024 * 1024,
  className = '',
  children,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragActive, setIsDragActive] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    setFiles(acceptedFiles);
    if (onFilesAccepted) {
      onFilesAccepted(acceptedFiles, rejectedFiles);
    }
  }, [onFilesAccepted]);

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    maxSize,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  const removeFile = (index: number): void => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={\`w-full \${className}\`}>
      <div
        {...getRootProps()}
        className={\`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200
          \${isDragAccept || isDragActive
            ? 'border-green-400 bg-green-50 dark:bg-green-900/20'
            : isDragReject
            ? 'border-red-400 bg-red-50 dark:bg-red-900/20'
            : 'border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800'
          }
          hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20
        \`}
      >
        <input {...getInputProps()} />
        {children || (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900 dark:text-blue-100">
                {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
              </p>
              <p className="text-sm text-gray-600 dark:text-blue-300">or click to select files</p>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
                Supports: Images, PDFs, Text files (max {formatFileSize(maxSize)})
              </p>
            </div>
          </div>
        )}
      </div>

      {fileRejections.length > 0 && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
            Some files were rejected:
          </h4>
          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
            {fileRejections.map(({ file, errors }) => (
              <li key={file.name}>
                {file.name}: {errors.map(e => e.message).join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900 dark:text-blue-100 mb-3">
            Selected Files ({files.length})
          </h4>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-slate-700 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-blue-100">{file.name}</p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button onClick={() => removeFile(index)} className="text-gray-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileDropZone;`;
      }
      return `// Complete File Drop Zone Component - Copy & Paste Ready
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileDropZone = ({
  onFilesAccepted,
  accept = {
    'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
    'application/pdf': ['.pdf'],
    'text/*': ['.txt', '.md'],
  },
  maxFiles = 10,
  maxSize = 10 * 1024 * 1024, // 10MB
  className = '',
  children,
}) => {
  const [files, setFiles] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    setFiles(acceptedFiles);
    if (onFilesAccepted) {
      onFilesAccepted(acceptedFiles, rejectedFiles);
    }
  }, [onFilesAccepted]);

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    maxSize,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={\`w-full \${className}\`}>
      <div
        {...getRootProps()}
        className={\`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200
          \${isDragAccept || isDragActive
            ? 'border-green-400 bg-green-50 dark:bg-green-900/20'
            : isDragReject
            ? 'border-red-400 bg-red-50 dark:bg-red-900/20'
            : 'border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800'
          }
          hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20
        \`}
      >
        <input {...getInputProps()} />
        {children || (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900 dark:text-blue-100">
                {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
              </p>
              <p className="text-sm text-gray-600 dark:text-blue-300">
                or click to select files
              </p>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
                Supports: Images, PDFs, Text files (max {formatFileSize(maxSize)})
              </p>
            </div>
          </div>
        )}
      </div>

      {fileRejections.length > 0 && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
            Some files were rejected:
          </h4>
          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
            {fileRejections.map(({ file, errors }) => (
              <li key={file.name}>
                {file.name}: {errors.map(e => e.message).join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900 dark:text-blue-100 mb-3">
            Selected Files ({files.length})
          </h4>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-slate-700 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-blue-100">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileDropZone;`;

    case 'kanban-board':
      if (isTypeScript) {
        return `import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  DragOverEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Priority = 'high' | 'medium' | 'low';

interface KanbanItem {
  id: string;
  title: string;
  description?: string;
  priority?: Priority;
  status?: string;
}

interface KanbanColumn {
  id: string;
  title: string;
  items: KanbanItem[];
}

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

interface KanbanBoardProps {
  columns?: KanbanColumn[];
  onReorder?: (columns: KanbanColumn[]) => void;
  className?: string;
  columnClassName?: string;
  itemClassName?: string;
  children?: (item: KanbanItem) => React.ReactNode;
}

const priorityClass: Record<Priority, string> = {
  high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
};

const SortableItem: React.FC<SortableItemProps> = ({ id, children, className = '' }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={\`\${className} \${isDragging ? 'shadow-lg' : ''}\`}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

const KanbanBoard: React.FC<KanbanBoardProps> = ({
  columns = [],
  onReorder,
  className = '',
  columnClassName = '',
  itemClassName = '',
  children,
}) => {
  const [localColumns, setLocalColumns] = useState<KanbanColumn[]>(columns);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const findColumn = (id: string): KanbanColumn | undefined =>
    localColumns.find(col => col.items.some(item => item.id === id) || col.id === id);

  const handleDragStart = (event: DragStartEvent): void => {
    setActiveId(event.active.id as string);
  };

  const handleDragOver = (event: DragOverEvent): void => {
    const { active, over } = event;
    if (!over) return;

    const activeCol = findColumn(active.id as string);
    const overCol = findColumn(over.id as string);

    if (!activeCol || !overCol || activeCol.id === overCol.id) return;

    setLocalColumns(cols => {
      const activeItems = activeCol.items;
      const overItems = overCol.items;
      const activeIndex = activeItems.findIndex(i => i.id === active.id);
      const overIndex = overItems.findIndex(i => i.id === over.id);
      const newIndex = overIndex >= 0 ? overIndex : overItems.length;

      return cols.map(col => {
        if (col.id === activeCol.id) {
          return { ...col, items: col.items.filter(i => i.id !== active.id) };
        }
        if (col.id === overCol.id) {
          return {
            ...col,
            items: [
              ...col.items.slice(0, newIndex),
              activeItems[activeIndex],
              ...col.items.slice(newIndex),
            ],
          };
        }
        return col;
      });
    });
  };

  const handleDragEnd = (event: DragEndEvent): void => {
    const { active, over } = event;
    setActiveId(null);
    if (!over) return;

    const activeCol = findColumn(active.id as string);
    const overCol = findColumn(over.id as string);
    if (!activeCol || !overCol) return;

    if (activeCol.id === overCol.id) {
      const activeIndex = activeCol.items.findIndex(i => i.id === active.id);
      const overIndex = activeCol.items.findIndex(i => i.id === over.id);
      if (activeIndex !== overIndex) {
        setLocalColumns(cols => {
          const updated = cols.map(col =>
            col.id === activeCol.id
              ? { ...col, items: arrayMove(col.items, activeIndex, overIndex) }
              : col
          );
          if (onReorder) onReorder(updated);
          return updated;
        });
      }
    }
  };

  const activeItem = localColumns.flatMap(c => c.items).find(i => i.id === activeId);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className={\`flex gap-6 \${className}\`}>
        {localColumns.map((column) => (
          <div key={column.id} className={\`flex-1 \${columnClassName}\`}>
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 min-h-[400px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                  {column.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-slate-400 bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded-full">
                  {column.items.length}
                </span>
              </div>
              <SortableContext
                items={column.items.map(item => item.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-3">
                  {column.items.map((item) => (
                    <SortableItem key={item.id} id={item.id} className={itemClassName}>
                      {children ? children(item) : (
                        <div className="p-4 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                          <h4 className="font-medium text-gray-900 dark:text-blue-100 mb-2">
                            {item.title}
                          </h4>
                          {item.description && (
                            <p className="text-sm text-gray-600 dark:text-blue-300 mb-3">
                              {item.description}
                            </p>
                          )}
                          {item.priority && (
                            <span className={\`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium \${priorityClass[item.priority]}\`}>
                              {item.priority}
                            </span>
                          )}
                        </div>
                      )}
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </div>
          </div>
        ))}
      </div>
      <DragOverlay>
        {activeItem ? (
          <div className="p-4 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg shadow-lg opacity-90">
            <h4 className="font-medium text-gray-900 dark:text-blue-100 mb-2">{activeItem.title}</h4>
            {activeItem.description && (
              <p className="text-sm text-gray-600 dark:text-blue-300">{activeItem.description}</p>
            )}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default KanbanBoard;`;
      }
      return `// Complete Kanban Board Component - Copy & Paste Ready
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
      className={\`\${className} \${isDragging ? 'shadow-lg' : ''}\`}
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
      const newIndex = overIndex >= 0 ? overIndex : overItems.length;

      return columns.map(column => {
        if (column.id === activeContainer.id) {
          return { ...column, items: column.items.filter(item => item.id !== activeId) };
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

    const activeContainer = localColumns.find(col =>
      col.items.some(item => item.id === activeId)
    );
    const overContainer = localColumns.find(col =>
      col.items.some(item => item.id === overId) || col.id === overId
    );

    if (!activeContainer || !overContainer) return;

    if (activeContainer.id === overContainer.id) {
      const activeIndex = activeContainer.items.findIndex(item => item.id === activeId);
      const overIndex = activeContainer.items.findIndex(item => item.id === overId);

      if (activeIndex !== overIndex) {
        setLocalColumns(columns => {
          const newColumns = columns.map(column => {
            if (column.id === activeContainer.id) {
              return { ...column, items: arrayMove(column.items, activeIndex, overIndex) };
            }
            return column;
          });
          if (onReorder) onReorder(newColumns);
          return newColumns;
        });
      }
    } else {
      const activeIndex = activeContainer.items.findIndex(item => item.id === activeId);
      const overIndex = overContainer.items.findIndex(item => item.id === overId);
      const newIndex = overIndex >= 0 ? overIndex : overContainer.items.length;

      setLocalColumns(columns => {
        const newColumns = columns.map(column => {
          if (column.id === activeContainer.id) {
            return { ...column, items: column.items.filter(item => item.id !== activeId) };
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

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className={\`flex gap-6 \${className}\`}>
        {localColumns.map((column) => (
          <div key={column.id} className={\`flex-1 \${columnClassName}\`}>
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 min-h-[400px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                  {column.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-slate-400 bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded-full">
                  {column.items.length}
                </span>
              </div>
              <SortableContext
                items={column.items.map(item => item.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-3">
                  {column.items.map((item) => (
                    <SortableItem key={item.id} id={item.id} className={itemClassName}>
                      {children ? children(item) : (
                        <div className="p-4 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                          <h4 className="font-medium text-gray-900 dark:text-blue-100 mb-2">
                            {item.title || item.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-blue-300 mb-3">
                            {item.description || item.content}
                          </p>
                          {item.priority && (
                            <span className={\`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium \${
                              item.priority === 'high'
                                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                : item.priority === 'medium'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            }\`}>
                              {item.priority}
                            </span>
                          )}
                        </div>
                      )}
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </div>
          </div>
        ))}
      </div>
      <DragOverlay>
        {activeItem ? (
          <div className="p-4 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg shadow-lg opacity-90">
            <h4 className="font-medium text-gray-900 dark:text-blue-100 mb-2">
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

export default KanbanBoard;`;

    default:
      return '// Component not found';
  }
};
