import React, { useState } from 'react';
import SortableList from './SortableList';
import DragDropCard from './DragDropCard';
import FileDropZone from './FileDropZone';
import KanbanBoard from './KanbanBoard';

const DragDropElementRenderer = ({
  componentId,
  formData,
  handleInputChange,
}) => {
  const [listItems, setListItems] = useState([
    { id: '1', content: 'First item' },
    { id: '2', content: 'Second item' },
    { id: '3', content: 'Third item' },
    { id: '4', content: 'Fourth item' },
    { id: '5', content: 'Fifth item' }
  ]);

  const [taskItems, setTaskItems] = useState([
    { id: '1', content: 'Design user interface', status: 'completed' },
    { id: '2', content: 'Implement authentication', status: 'in-progress' },
    { id: '3', content: 'Write unit tests', status: 'pending' },
    { id: '4', content: 'Deploy to production', status: 'pending' }
  ]);

  const [cardItems, setCardItems] = useState([
    { id: '1', title: 'Website Redesign', description: 'Complete UI overhaul', status: 'in-progress' },
    { id: '2', title: 'Mobile App', description: 'iOS and Android development', status: 'pending' },
    { id: '3', title: 'API Integration', description: 'Third-party service integration', status: 'completed' },
    { id: '4', title: 'Database Migration', description: 'Move to new database system', status: 'in-progress' },
    { id: '5', title: 'Performance Optimization', description: 'Improve loading times', status: 'pending' },
    { id: '6', title: 'Security Audit', description: 'Review and fix security issues', status: 'pending' }
  ]);

  const [kanbanColumns, setKanbanColumns] = useState([
    {
      id: 'todo',
      title: 'To Do',
      color: 'bg-red-500',
      items: [
        { 
          id: '1', 
          title: 'Research competitors', 
          description: 'Analyze market landscape and identify key players in the industry', 
          priority: 'high',
          status: 'pending',
          assignee: 'John Doe',
          dueDate: '2024-01-15',
          progress: 0,
          tags: ['research', 'analysis']
        },
        { 
          id: '2', 
          title: 'Create wireframes', 
          description: 'Design user flow and create interactive mockups', 
          priority: 'medium',
          status: 'pending',
          assignee: 'Jane Smith',
          dueDate: '2024-01-20',
          progress: 0,
          tags: ['design', 'ux']
        },
        { 
          id: '3', 
          title: 'Setup development environment', 
          description: 'Configure tools and development workflow', 
          priority: 'low',
          status: 'pending',
          assignee: 'Mike Johnson',
          dueDate: '2024-01-10',
          progress: 0,
          tags: ['setup', 'devops']
        }
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      color: 'bg-yellow-500',
      items: [
        { 
          id: '4', 
          title: 'Develop API', 
          description: 'Backend development with RESTful endpoints', 
          priority: 'high',
          status: 'in-progress',
          assignee: 'Sarah Wilson',
          dueDate: '2024-01-25',
          progress: 65,
          tags: ['backend', 'api']
        },
        { 
          id: '5', 
          title: 'Design UI', 
          description: 'Frontend design with modern components', 
          priority: 'medium',
          status: 'in-progress',
          assignee: 'Alex Brown',
          dueDate: '2024-01-22',
          progress: 40,
          tags: ['frontend', 'ui']
        }
      ]
    },
    {
      id: 'review',
      title: 'Review',
      color: 'bg-blue-500',
      items: [
        { 
          id: '6', 
          title: 'Code review', 
          description: 'Review pull requests and ensure code quality', 
          priority: 'medium',
          status: 'in-progress',
          assignee: 'David Lee',
          dueDate: '2024-01-18',
          progress: 80,
          tags: ['review', 'quality']
        },
        { 
          id: '7', 
          title: 'Security audit', 
          description: 'Perform security assessment and vulnerability testing', 
          priority: 'high',
          status: 'in-progress',
          assignee: 'Emma Davis',
          dueDate: '2024-01-30',
          progress: 30,
          tags: ['security', 'audit']
        }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      color: 'bg-green-500',
      items: [
        { 
          id: '8', 
          title: 'Setup project', 
          description: 'Initial project setup and configuration', 
          priority: 'low',
          status: 'completed',
          assignee: 'Tom Wilson',
          dueDate: '2024-01-05',
          progress: 100,
          tags: ['setup', 'configuration']
        },
        { 
          id: '9', 
          title: 'Database design', 
          description: 'Design and implement database schema', 
          priority: 'medium',
          status: 'completed',
          assignee: 'Lisa Chen',
          dueDate: '2024-01-12',
          progress: 100,
          tags: ['database', 'schema']
        }
      ]
    }
  ]);

  const handleFilesAccepted = (acceptedFiles, rejectedFiles) => {
    console.log('Accepted files:', acceptedFiles);
    console.log('Rejected files:', rejectedFiles);
  };

  switch (componentId) {
    case 'sortable-list':
      return (
        <div className="space-y-8">
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-blue-100">
              Basic Sortable List
            </h4>
            <div className="p-6 bg-gray-50 dark:bg-slate-700 rounded-lg">
              <SortableList
                items={listItems}
                onReorder={setListItems}
                className="space-y-3"
                itemClassName="p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-blue-100">
              Task List with Status
            </h4>
            <div className="p-6 bg-gray-50 dark:bg-slate-700 rounded-lg">
              <SortableList
                items={taskItems}
                onReorder={setTaskItems}
                className="space-y-3"
                itemClassName="p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing"
                children={(item) => (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"></div>
                      <span className="text-gray-900 dark:text-blue-100 font-medium">
                        {item.content}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : item.status === 'in-progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      );

    case 'drag-drop-cards':
      return (
        <div className="space-y-8">
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-blue-100">
              Project Cards - Drag to Reorder
            </h4>
            <div className="p-6 bg-gray-50 dark:bg-slate-700 rounded-lg">
              <DragDropCard
                items={cardItems}
                onReorder={setCardItems}
                columns={3}
                className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                cardClassName="p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing"
              />
            </div>
          </div>
        </div>
      );

    case 'file-drop-zone':
      return (
        <div className="space-y-8">
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-blue-100">
              Image Upload Zone
            </h4>
            <div className="p-6 bg-gray-50 dark:bg-slate-700 rounded-lg">
              <FileDropZone
                accept={{
                  'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
                }}
                maxFiles={5}
                maxSize={5 * 1024 * 1024} // 5MB
                onFilesAccepted={handleFilesAccepted}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-blue-100">
              Document Upload Zone
            </h4>
            <div className="p-6 bg-gray-50 dark:bg-slate-700 rounded-lg">
              <FileDropZone
                accept={{
                  'application/pdf': ['.pdf'],
                  'text/*': ['.txt', '.md'],
                  'application/msword': ['.doc'],
                  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
                }}
                maxFiles={10}
                maxSize={10 * 1024 * 1024} // 10MB
                onFilesAccepted={handleFilesAccepted}
              />
            </div>
          </div>
        </div>
      );

    case 'kanban-board':
      return (
        <div className="w-full">
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-gray-800 dark:text-blue-100">
              Project Management Board
            </h4>
            <div className="w-full bg-gray-50 dark:bg-slate-700 rounded-xl p-4 overflow-x-auto">
              <KanbanBoard
                columns={kanbanColumns}
                onReorder={setKanbanColumns}
                className="flex gap-6 min-w-max"
                columnClassName="flex-1 min-w-0"
                itemClassName=""
                showStats={true}
                showProgress={true}
              />
            </div>
          </div>
        </div>
      );

    default:
      return <div>Component not found</div>;
  }
};

export default DragDropElementRenderer;
