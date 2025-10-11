# TailwindKit - Beautiful UI Components

A comprehensive collection of beautiful, responsive UI components built with React and Tailwind CSS. This project provides a complete component library with live previews, code generation, drag & drop functionality, and copy-paste ready components for modern web applications.

## ✨ Features

- 🎨 **60+ UI Components** - Comprehensive collection of reusable components
- 🌙 **Dark Mode Support** - Built-in dark/light theme toggle
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Live Preview** - Interactive component demos with real-time updates
- 📋 **Code Generation** - Copy-paste ready code snippets with syntax highlighting
- 🎯 **Multiple Categories** - Organized by component types
- 🚀 **Fast Development** - Built with Vite for lightning-fast HMR
- ♿ **Accessible** - WCAG compliant components
- 🎨 **Customizable** - Easy to modify and extend
- 🖱️ **Drag & Drop** - Interactive drag and drop components with @dnd-kit
- 📊 **Rich Kanban Board** - Full-featured project management board
- 📁 **File Upload** - Drag and drop file upload zones
- 🎛️ **Interactive Controls** - Clickable labels, form validation, and real-time feedback

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/tailwind-kit-github.git
   cd tailwind-kit-github
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
tailwind-kit-github/
├── public/                     # Static assets
│   └── vite.svg
├── src/
│   ├── components/            # Component library
│   │   ├── data-display/     # Data visualization components
│   │   │   ├── avatar/       # Avatar components
│   │   │   ├── card/         # Card components
│   │   │   ├── chart/        # Chart components
│   │   │   ├── grid/         # Grid layout components
│   │   │   ├── list/         # List components
│   │   │   ├── stat/         # Statistics components
│   │   │   ├── table/        # Table components
│   │   │   ├── timeline/     # Timeline components
│   │   │   └── rating/       # Star rating components
│   │   ├── feedback/         # User feedback components
│   │   │   ├── alert/        # Alert components
│   │   │   ├── badge/        # Badge components
│   │   │   ├── modal/        # Modal components
│   │   │   ├── popover/      # Popover components
│   │   │   ├── toast/        # Toast notifications
│   │   │   └── tooltip/      # Tooltip components
│   │   ├── forms/            # Form components
│   │   │   ├── filters/      # Filter forms
│   │   │   ├── multi-step/   # Multi-step forms
│   │   │   ├── search/       # Search forms
│   │   │   ├── validation/   # Form validation
│   │   │   └── wizards/      # Wizard components
│   │   ├── inputs/           # Input components
│   │   │   ├── checkbox/     # Checkbox components
│   │   │   ├── date/         # Date picker components
│   │   │   ├── radio/        # Radio button components
│   │   │   ├── rate/         # Star rating inputs
│   │   │   ├── switch/       # Switch components
│   │   │   └── tree-select/  # Tree select components
│   │   ├── layout/           # Layout components
│   │   │   ├── container/    # Container components
│   │   │   ├── footer/       # Footer components
│   │   │   ├── grid/         # Grid components
│   │   │   ├── header/       # Header components
│   │   │   └── sidebar/      # Sidebar components
│   │   ├── navigation/       # Navigation components
│   │   │   ├── breadcrumb/   # Breadcrumb components
│   │   │   ├── menu/         # Menu components
│   │   │   ├── navbar/       # Navbar components
│   │   │   ├── pagination/   # Pagination components
│   │   │   └── tabs/         # Tab components
│   │   ├── dragdrop/         # Drag & Drop components
│   │   │   ├── SortableList.jsx      # Sortable list component
│   │   │   ├── DragDropCard.jsx      # Drag & drop cards
│   │   │   ├── FileDropZone.jsx      # File upload zone
│   │   │   ├── KanbanBoard.jsx       # Kanban board component
│   │   │   ├── DragDropElementRenderer.jsx
│   │   │   ├── DragDropCodeGenerator.jsx
│   │   │   └── dragdropComponentsData.js
│   │   └── notifications/    # Notification components
│   │       ├── alerts/       # Alert notifications
│   │       ├── loading/      # Loading indicators
│   │       ├── modals/       # Modal notifications
│   │       ├── popovers/     # Popover notifications
│   │       ├── progress/     # Progress indicators
│   │       ├── toasts/       # Toast notifications
│   │       └── tooltips/     # Tooltip notifications
│   ├── contexts/             # React contexts
│   │   ├── SidebarContext.jsx
│   │   └── ThemeContext.jsx
│   ├── pages/                # Application pages
│   │   ├── DataDisplay.jsx
│   │   ├── DragDrop.jsx      # Drag & Drop components page
│   │   ├── Feedback.jsx
│   │   ├── Forms.jsx
│   │   ├── Home.jsx
│   │   ├── Inputs.jsx
│   │   ├── Layout.jsx
│   │   ├── Navigation.jsx
│   │   └── Notifications.jsx
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── dist/                     # Build output
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Project dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

## 🛠️ Technologies Used

### Core Technologies
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Custom CSS** - Component-specific styles
- **Responsive Design** - Mobile-first approach

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite HMR** - Hot Module Replacement
- **React Router DOM** - Client-side routing
- **Context API** - State management

### Drag & Drop Libraries
- **@dnd-kit/core** - Core drag and drop functionality
- **@dnd-kit/sortable** - Sortable list components
- **@dnd-kit/utilities** - Utility functions for drag and drop
- **react-dropzone** - File drop zone functionality

### Component Features
- **Accessibility** - WCAG compliant components
- **Dark Mode** - Built-in theme switching
- **Responsive** - Mobile-first design
- **Interactive** - Hover, focus, and active states
- **Customizable** - Easy to modify and extend

## 🎨 Component Categories

### 📊 Data Display
- **Tables** - Sortable, filterable data tables
- **Cards** - Content cards with headers and actions
- **Lists** - Vertical and horizontal lists
- **Grids** - Responsive grid layouts
- **Charts** - Data visualization components
- **Stats** - Statistics and metrics display
- **Timelines** - Event timelines and progress indicators
- **Avatars** - User avatars with various sizes
- **Star Ratings** - Interactive rating components

### 💬 Feedback
- **Alerts** - Success, error, warning, and info alerts
- **Badges** - Status indicators and labels
- **Modals** - Dialog boxes and overlays
- **Popovers** - Contextual information displays
- **Toasts** - Notification messages
- **Tooltips** - Hover information displays

### 📝 Forms
- **Filter Forms** - Advanced filtering interfaces
- **Multi-step Forms** - Complex form workflows
- **Search Forms** - Search and filter interfaces
- **Validation Forms** - Form validation examples
- **Wizards** - Step-by-step form wizards

### ⌨️ Inputs
- **Text Inputs** - Text, email, password fields
- **Checkboxes** - Single and group checkboxes
- **Radio Buttons** - Radio button groups
- **Date Pickers** - Date and time selection
- **Selects** - Dropdown selection components
- **Switches** - Toggle switches
- **Sliders** - Range input components
- **File Uploads** - File selection components
- **Star Ratings** - Interactive rating inputs

### 🏗️ Layout
- **Containers** - Content containers
- **Headers** - Navigation headers
- **Footers** - Page footers
- **Sidebars** - Navigation sidebars
- **Grids** - Layout grid systems
- **Cards** - Content card layouts

### 🧭 Navigation
- **Breadcrumbs** - Navigation breadcrumbs
- **Menus** - Navigation menus
- **Navbars** - Top navigation bars
- **Pagination** - Page navigation
- **Tabs** - Tabbed interfaces

### 🔔 Notifications
- **Alerts** - System alerts
- **Loading** - Loading indicators
- **Progress** - Progress bars
- **Toasts** - Toast notifications
- **Tooltips** - Contextual tooltips

### 🖱️ Drag & Drop
- **Sortable Lists** - Reorderable list items with keyboard support
- **Drag & Drop Cards** - Interactive card grids with drag overlay
- **File Drop Zones** - File upload with drag and drop support
- **Kanban Board** - Full-featured project management board with:
  - Multi-column support
  - Cross-column dragging
  - Rich card content (priority, assignee, due date, progress, tags)
  - Item reordering within columns
  - Responsive design

## 🎯 Usage Examples

### Basic Component Usage

```jsx
import { Button } from './components/feedback/button/Button';
import { Card } from './components/data-display/card/Card';
import { StarRating } from './components/inputs/rate/RateInput';
import { KanbanBoard } from './components/dragdrop/KanbanBoard';

function App() {
  const columns = [
    {
      id: 'todo',
      title: 'To Do',
      color: 'bg-red-500',
      items: [
        { id: '1', title: 'Task 1', description: 'Description here' }
      ]
    }
  ];

  return (
    <div>
      <Card title="Welcome" subtitle="Get started with TailwindKit">
        <p>This is a beautiful card component!</p>
        <Button variant="primary">Click me</Button>
      </Card>
      
      <StarRating 
        value={4} 
        onChange={(rating) => console.log(rating)}
        size="lg"
      />

      <KanbanBoard 
        columns={columns}
        onReorder={(newColumns) => console.log(newColumns)}
        showStats={true}
        showProgress={true}
      />
    </div>
  );
}
```

### Dark Mode Support

```jsx
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Drag & Drop Components

```jsx
import { SortableList } from './components/dragdrop/SortableList';
import { FileDropZone } from './components/dragdrop/FileDropZone';

function App() {
  const [items, setItems] = useState([
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' }
  ]);

  const handleFilesAccepted = (acceptedFiles) => {
    console.log('Files uploaded:', acceptedFiles);
  };

  return (
    <div>
      <SortableList 
        items={items}
        onReorder={setItems}
        itemClassName="p-4 bg-white border rounded-lg"
      />
      
      <FileDropZone
        onFilesAccepted={handleFilesAccepted}
        maxFiles={5}
        maxSize={5 * 1024 * 1024} // 5MB
        accept={{
          'image/*': ['.jpeg', '.png', '.gif'],
          'application/pdf': ['.pdf']
        }}
      />
    </div>
  );
}
```

## 🎨 Customization

### Tailwind Configuration

The project uses a custom Tailwind configuration that can be modified in `tailwind.config.js`:

```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  plugins: [],
}
```

### Component Styling

All components use Tailwind utility classes and can be easily customized:

```jsx
<Button 
  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
  variant="custom"
>
  Custom Button
</Button>
```

## 🚀 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Components

1. Create component directory in appropriate category
2. Add component files (Component.jsx, index.js)
3. Update category index.js
4. Add to main components index.js
5. Create component data file
6. Add to page renderer

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use Tailwind utility classes
- Include TypeScript-style prop documentation
- Write accessible components

## 📱 Responsive Design

All components are built with a mobile-first approach:

- **Mobile** - Base styles (default)
- **Tablet** - `sm:` and `md:` breakpoints
- **Desktop** - `lg:` and `xl:` breakpoints

## ♿ Accessibility

Components are built with accessibility in mind:

- **Keyboard Navigation** - Full keyboard support
- **Screen Readers** - Proper ARIA labels
- **Color Contrast** - WCAG compliant colors
- **Focus Management** - Visible focus indicators
- **Semantic HTML** - Proper HTML structure

## 🌙 Dark Mode

Built-in dark mode support:

- **Theme Toggle** - Switch between light/dark
- **Context Provider** - Global theme state
- **CSS Variables** - Dynamic color switching
- **Component Support** - All components support dark mode

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help:

- Open an issue on GitHub
- Check the documentation
- Review the component examples

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework used
- [Vite](https://vitejs.dev/) - The build tool used
- [Heroicons](https://heroicons.com/) - The icon library used
- [@dnd-kit](https://dndkit.com/) - Drag and drop functionality
- [react-dropzone](https://react-dropzone.js.org/) - File upload components

---

**Made with ❤️ using React and Tailwind CSS**