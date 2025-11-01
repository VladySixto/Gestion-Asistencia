import React from "react";
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { Role } from './types';

// Import Pages
import { LoginPage } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { AttendancePage } from './pages/Attendance';
import { NewsPage } from './pages/News';
import { AdminPage } from './pages/Admin';

// Import Components
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';

/**
 * A layout component that wraps all protected routes.
 * It checks for authentication and redirects to the login page if the user is not logged in.
 * If authenticated, it renders the main application layout with the nested routes.
 */
const ProtectedLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const App: React.FC = () => (
  <NotificationProvider>
    <AuthProvider>
      <HashRouter>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes wrapped in the main layout */}
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/novedades" element={<NewsPage />} />

            {/* Routes with specific role-based protection */}
            <Route element={<ProtectedRoute allowedRoles={[Role.Admin, Role.Preceptor]} />}>
              <Route path="/asistencia" element={<AttendancePage />} />
            </Route>
            
            <Route element={<ProtectedRoute allowedRoles={[Role.Admin]} />}>
              <Route path="/admin" element={<AdminPage />} />
            </Route>
            
            {/* A catch-all route for authenticated users to redirect to dashboard */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </AuthProvider>
  </NotificationProvider>
);

export default App;