export const dragdropComponents = [
  {
    id: 'sortable-list',
    name: 'Sortable List',
    description: 'Drag and drop list items to reorder them',
    category: 'dragdrop',
    href: '/dragdrop#sortable-list',
    icon: '📋',
    complexity: 'intermediate',
    features: [
      'Vertical reordering',
      'Keyboard navigation',
      'Touch support',
      'Smooth animations',
      'Accessibility compliant'
    ],
    examples: [
      {
        name: 'Basic Sortable List',
        component: 'SortableList',
        props: {
          items: [
            { id: '1', content: 'First item' },
            { id: '2', content: 'Second item' },
            { id: '3', content: 'Third item' },
            { id: '4', content: 'Fourth item' },
            { id: '5', content: 'Fifth item' }
          ]
        }
      },
      {
        name: 'Task List',
        component: 'SortableList',
        props: {
          items: [
            { id: '1', content: 'Design user interface', status: 'completed' },
            { id: '2', content: 'Implement authentication', status: 'in-progress' },
            { id: '3', content: 'Write unit tests', status: 'pending' },
            { id: '4', content: 'Deploy to production', status: 'pending' }
          ]
        }
      }
    ]
  },
  {
    id: 'drag-drop-cards',
    name: 'Drag & Drop Cards',
    description: 'Drag and drop cards in a grid layout',
    category: 'dragdrop',
    href: '/dragdrop#drag-drop-cards',
    icon: '🃏',
    complexity: 'intermediate',
    features: [
      'Grid layout support',
      'Drag overlay',
      'Responsive design',
      'Custom card content',
      'Smooth animations'
    ],
    examples: [
      {
        name: 'Project Cards',
        component: 'DragDropCard',
        props: {
          items: [
            { id: '1', title: 'Website Redesign', description: 'Complete UI overhaul', status: 'in-progress' },
            { id: '2', title: 'Mobile App', description: 'iOS and Android development', status: 'pending' },
            { id: '3', title: 'API Integration', description: 'Third-party service integration', status: 'completed' },
            { id: '4', title: 'Database Migration', description: 'Move to new database system', status: 'in-progress' },
            { id: '5', title: 'Performance Optimization', description: 'Improve loading times', status: 'pending' },
            { id: '6', title: 'Security Audit', description: 'Review and fix security issues', status: 'pending' }
          ],
          columns: 3
        }
      }
    ]
  },
  {
    id: 'file-drop-zone',
    name: 'File Drop Zone',
    description: 'Drag and drop files with preview and validation',
    category: 'dragdrop',
    href: '/dragdrop#file-drop-zone',
    icon: '📁',
    complexity: 'advanced',
    features: [
      'File type validation',
      'Size limits',
      'Multiple file support',
      'Preview functionality',
      'Error handling'
    ],
    examples: [
      {
        name: 'Image Upload',
        component: 'FileDropZone',
        props: {
          accept: {
            'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
          },
          maxFiles: 5,
          maxSize: 5 * 1024 * 1024 // 5MB
        }
      },
      {
        name: 'Document Upload',
        component: 'FileDropZone',
        props: {
          accept: {
            'application/pdf': ['.pdf'],
            'text/*': ['.txt', '.md'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
          },
          maxFiles: 10,
          maxSize: 10 * 1024 * 1024 // 10MB
        }
      }
    ]
  },
  {
    id: 'kanban-board',
    name: 'Kanban Board',
    description: 'Drag and drop items between columns',
    category: 'dragdrop',
    href: '/dragdrop#kanban-board',
    icon: '📊',
    complexity: 'advanced',
    features: [
      'Multi-column support',
      'Cross-column dragging',
      'Column reordering',
      'Item status tracking',
      'Priority indicators'
    ],
    examples: [
      {
        name: 'Project Management',
        component: 'KanbanBoard',
        props: {
          columns: [
            {
              id: 'todo',
              title: 'To Do',
              items: [
                { id: '1', title: 'Research competitors', description: 'Analyze market landscape', priority: 'high' },
                { id: '2', title: 'Create wireframes', description: 'Design user flow', priority: 'medium' }
              ]
            },
            {
              id: 'in-progress',
              title: 'In Progress',
              items: [
                { id: '3', title: 'Develop API', description: 'Backend development', priority: 'high' },
                { id: '4', title: 'Design UI', description: 'Frontend design', priority: 'medium' }
              ]
            },
            {
              id: 'review',
              title: 'Review',
              items: [
                { id: '5', title: 'Code review', description: 'Review pull requests', priority: 'low' }
              ]
            },
            {
              id: 'done',
              title: 'Done',
              items: [
                { id: '6', title: 'Setup project', description: 'Initial project setup', priority: 'low' }
              ]
            }
          ]
        }
      }
    ]
  }
];
