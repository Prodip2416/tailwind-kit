import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { SidebarProvider, useSidebar } from './contexts/SidebarContext';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import {
  Home,
  Inputs,
  Notifications,
  DataDisplay,
  Forms,
  Navigation,
  Layout,
  Feedback,
  DragDrop,
} from './pages';

const AppContent = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      {/* Sidebar - Fixed position */}
      <div className="fixed left-0 top-0 z-30">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div
        className={`flex flex-col min-h-screen transition-all duration-300 ${
          isCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        <TopNav />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tailwind-kit/" element={<Navigate to="/" replace />} />
            <Route path="/tailwind-kit" element={<Navigate to="/" replace />} />
            <Route path="/inputs" element={<Inputs />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/data-display" element={<DataDisplay />} />
            <Route path="/forms" element={<Forms />} />
            <Route
              path="/forms/validation"
              element={<Forms formType="validation" />}
            />
            <Route path="/forms/wizard" element={<Forms formType="wizard" />} />
            <Route
              path="/forms/multistep"
              element={<Forms formType="multistep" />}
            />
            <Route path="/forms/search" element={<Forms formType="search" />} />
            <Route path="/forms/filter" element={<Forms formType="filter" />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route
              path="/navigation/navbar"
              element={<Navigation navigationType="navbar" />}
            />
            <Route
              path="/navigation/breadcrumb"
              element={<Navigation navigationType="breadcrumb" />}
            />
            <Route
              path="/navigation/pagination"
              element={<Navigation navigationType="pagination" />}
            />
            <Route
              path="/navigation/tabs"
              element={<Navigation navigationType="tabs" />}
            />
            <Route
              path="/navigation/menu"
              element={<Navigation navigationType="menu" />}
            />
            <Route path="/layout" element={<Layout />} />
            <Route
              path="/layout/header"
              element={<Layout layoutType="header" />}
            />
            <Route
              path="/layout/footer"
              element={<Layout layoutType="footer" />}
            />
            <Route
              path="/layout/sidebar"
              element={<Layout layoutType="sidebar" />}
            />
            <Route path="/layout/grid" element={<Layout layoutType="grid" />} />
            <Route
              path="/layout/container"
              element={<Layout layoutType="container" />}
            />
            <Route path="/layout/card" element={<Layout layoutType="card" />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route
              path="/feedback/alert"
              element={<Feedback feedbackType="alert" />}
            />
            <Route
              path="/feedback/toast"
              element={<Feedback feedbackType="toast" />}
            />
            <Route
              path="/feedback/modal"
              element={<Feedback feedbackType="modal" />}
            />
            <Route
              path="/feedback/popover"
              element={<Feedback feedbackType="popover" />}
            />
            <Route
              path="/feedback/tooltip"
              element={<Feedback feedbackType="tooltip" />}
            />
            <Route
              path="/feedback/badge"
              element={<Feedback feedbackType="badge" />}
            />
            <Route path="/dragdrop" element={<DragDrop />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Router>
          <AppContent />
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
