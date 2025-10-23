
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginPage } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { NewsPage } from './pages/News';
import { AttendancePage } from './pages/Attendance';
import { AdminPage } from './pages/Admin';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Role } from './types';

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  return (
     <Routes>
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/novedades" element={<Layout><NewsPage /></Layout>} />
        </Route>
        
        <Route element={<ProtectedRoute allowedRoles={[Role.Admin, Role.Preceptor]} />}>
            <Route path="/asistencia" element={<Layout><AttendancePage /></Layout>} />
        </Route>
        
        <Route element={<ProtectedRoute allowedRoles={[Role.Admin]} />}>
          <Route path="/admin" element={<Layout><AdminPage /></Layout>} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
     </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
