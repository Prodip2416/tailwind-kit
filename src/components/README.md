# Components Folder Structure

This folder is organized by menu categories and sub-menus for easy component management and fast access.

## 📁 Folder Structure

```
src/components/
├── inputs/                    # Input Components
│   ├── text/                  # Text Input Components
│   ├── email/                 # Email Input Components
│   ├── password/              # Password Input Components
│   ├── number/                # Number Input Components
│   ├── textarea/              # Textarea Input Components
│   ├── select/                # Select Input Components
│   ├── checkbox/              # Checkbox Input Components
│   ├── radio/                 # Radio Input Components
│   ├── switch/                # Switch Input Components
│   ├── range/                 # Range Slider Components
│   ├── date/                  # Date Picker Components
│   │   ├── DateInput.jsx
│   │   └── DateRangeInput.jsx
│   ├── file/                  # File Upload Components
│   ├── rate/                  # Rating Components
│   │   └── RateInput.jsx
│   ├── tree-select/           # Tree Select Components
│   │   └── TreeSelect.jsx
│   └── index.js               # Input Components Export
│
├── notifications/             # Notification Components
│   ├── alerts/                # Alert Components
│   ├── toasts/                # Toast Components
│   ├── modals/                # Modal Components
│   ├── popovers/              # Popover Components
│   ├── tooltips/              # Tooltip Components
│   └── index.js               # Notification Components Export
│
├── data-display/              # Data Display Components
│   ├── tables/                # Table Components
│   ├── cards/                 # Card Components
│   ├── lists/                 # List Components
│   ├── badges/                # Badge Components
│   ├── progress/              # Progress Components
│   ├── avatars/               # Avatar Components
│   ├── charts/                # Chart Components
│   └── index.js               # Data Display Components Export
│
├── forms/                     # Form Components
│   ├── validation/            # Form Validation Components
│   ├── wizards/               # Wizard Components
│   ├── multi-step/            # Multi-step Form Components
│   ├── search/                # Search Form Components
│   ├── filters/               # Filter Form Components
│   └── index.js               # Form Components Export
│
├── navigation/                # Navigation Components
│   ├── breadcrumbs/           # Breadcrumb Components
│   ├── pagination/            # Pagination Components
│   ├── tabs/                  # Tab Components
│   ├── menus/                 # Menu Components
│   ├── steppers/              # Stepper Components
│   └── index.js               # Navigation Components Export
│
├── layout/                    # Layout Components
│   ├── grids/                 # Grid Components
│   ├── containers/            # Container Components
│   ├── headers/               # Header Components
│   ├── footers/               # Footer Components
│   ├── sidebars/              # Sidebar Components
│   ├── panels/                # Panel Components
│   └── index.js               # Layout Components Export
│
├── feedback/                  # Feedback Components
│   ├── loading/               # Loading Components
│   ├── empty-states/          # Empty State Components
│   ├── error-states/          # Error State Components
│   ├── success-states/        # Success State Components
│   └── index.js               # Feedback Components Export
│
├── TopNav.jsx                 # Top Navigation Component
├── Sidebar.jsx                # Sidebar Component
├── CodeBlock.jsx              # Code Block Component
├── ComponentCard.jsx          # Component Card Component
├── ComponentDetails.jsx       # Component Details Component
├── ComponentList.jsx          # Component List Component
├── index.js                   # Main Components Export
└── README.md                  # This Documentation
```

## 🚀 Usage

### Import Individual Components

```javascript
import { TextInput, DateInput, RateInput } from '../components/inputs';
import { Alert, Toast } from '../components/notifications';
import { Table, Card } from '../components/data-display';
```

### Import All Components

```javascript
import { TextInput, Alert, Table, Breadcrumbs } from '../components';
```

## 📝 Naming Convention

- **Folders**: lowercase with hyphens (kebab-case)
- **Components**: PascalCase (e.g., `TextInput.jsx`)
- **Index files**: `index.js` for easy imports

## 🔍 Finding Components

1. **By Category**: Navigate to the main category folder (e.g., `inputs/`)
2. **By Sub-category**: Go to specific sub-folder (e.g., `inputs/date/`)
3. **By Name**: Use the index files for quick imports
4. **By Search**: Use IDE search to find components by name

## 📋 Benefits

- **Organized Structure**: Easy to find components by category
- **Scalable**: Easy to add new components in the right place
- **Maintainable**: Clear separation of concerns
- **Fast Access**: Index files for quick imports
- **Team Friendly**: Consistent structure for team collaboration
