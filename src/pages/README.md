# Pages Folder Structure

This folder contains all the main pages/routes of the application, organized by component categories.

## 📁 Folder Structure

```
src/pages/
├── Home.jsx              # Home page
├── Inputs.jsx            # Input components page (renamed from Components.jsx)
├── Notifications.jsx     # Notification components page
├── DataDisplay.jsx       # Data display components page
├── Forms.jsx             # Form components page
├── Navigation.jsx        # Navigation components page
├── Layout.jsx            # Layout components page
├── Feedback.jsx          # Feedback components page
├── index.js              # Pages export file
└── README.md             # This documentation
```

## 🚀 Usage

### Import Individual Pages

```javascript
import { Home, Inputs, Notifications } from '../pages';
```

### Import All Pages

```javascript
import {
  Home,
  Inputs,
  Notifications,
  DataDisplay,
  Forms,
  Navigation,
  Layout,
  Feedback,
} from '../pages';
```

## 📝 Page Descriptions

### **Home.jsx**

- Landing page with overview of the component library
- Introduction and getting started information

### **Inputs.jsx** (formerly Components.jsx)

- All input component demonstrations
- Text, Email, Password, Number, Textarea, Select, Checkbox, Radio, Range, Date, File, Rate, Switch, Tree Select
- Interactive previews and code examples

### **Notifications.jsx**

- Alert, Toast, Modal, Popover, Tooltip components
- Coming soon placeholder

### **DataDisplay.jsx**

- Table, Card, List, Badge, Progress, Avatar, Chart components
- Coming soon placeholder

### **Forms.jsx**

- Validation, Wizard, Multi-step, Search, Filter form components
- Coming soon placeholder

### **Navigation.jsx**

- Breadcrumb, Pagination, Tab, Menu, Stepper components
- Coming soon placeholder

### **Layout.jsx**

- Grid, Container, Header, Footer, Sidebar, Panel components
- Coming soon placeholder

### **Feedback.jsx**

- Loading, Empty State, Error State, Success State components
- Coming soon placeholder

## 🔗 Routes

- `/` - Home page
- `/inputs` - Input components (renamed from `/components`)
- `/notifications` - Notification components
- `/data-display` - Data display components
- `/forms` - Form components
- `/navigation` - Navigation components
- `/layout` - Layout components
- `/feedback` - Feedback components

## 📋 Naming Convention

- **Pages**: PascalCase (e.g., `Inputs.jsx`)
- **Routes**: kebab-case (e.g., `/data-display`)
- **Exports**: PascalCase (e.g., `export { default as Inputs }`)

## 🔍 Benefits

- **Clear Organization**: Each page represents a component category
- **Easy Navigation**: Direct mapping between sidebar and pages
- **Scalable**: Easy to add new pages for new categories
- **Maintainable**: Clear separation of concerns
- **Team Friendly**: Consistent structure for team collaboration
