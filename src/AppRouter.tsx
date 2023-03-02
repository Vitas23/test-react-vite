import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';

const DashboardLayout = lazy(() => import('./layouts/dashboard/DashboardLayout'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));

export const AppRouter = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/permission-denied" />
        <Route path="/not-found" element={<PageNotFound />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              isAuthRequired={false}
              redirectToIfLogged="/dashboard/app"
              outlet={<LoginPage />}
            />
          }
        />
        <Route
          path="/dashboard"
          element={<RestrictedRoute isAuthRequired outlet={<DashboardLayout />} />}
        >
          <Route path="/dashboard/app" element={<div>This is app dashboard</div>} />
          <Route path="/dashboard/user" element={<div>This is user dashboard</div>} />
          <Route path="/dashboard/products" element={<div>This is product dashboard</div>} />
          <Route path="/dashboard" element={<Navigate to="/dashboard/app" replace />} />
        </Route>
        <Route
          path="/admin"
          element={
            <RestrictedRoute isAuthRequired requiredRole={'ADMIN'} outlet={<div>admin app</div>} />
          }
        />
        <Route path="/" element={<Navigate to="/dashboard/app" replace />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </ErrorBoundary>
  );
};
