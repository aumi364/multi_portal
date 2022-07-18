import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigate, Routes } from 'react-router';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import { privateRoutes, publicRoutes } from './appRoutes';
import { authStore } from '../store/auth';
import { useGetCurrentUserRole } from '../hooks/useGetCurrentUserRole';
import { appUrls } from '../utils/constraints/appUrls';
import SplashScreen from '../features/splashScreen';

function PrivateRoute({ children }) {
  const currentUserRole = useGetCurrentUserRole();
  const isLoggedIn = authStore(state => state?.token);
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to={`/${currentUserRole}/${appUrls.signin}`} />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

function RoutesCollection() {
  const publicRoutesList = [publicRoutes.signin.admin];
  const privateRoutesList = [privateRoutes.dashboard.admin];
  const NotFound = publicRoutes.error.notFound.component;
  return (
    <div>
      <Suspense fallback={<SplashScreen />}>
        <Router>
          <Routes>
            <Route
              path={appUrls.landing}
              element={<Navigate replace to={publicRoutes.signin.admin.path} />}
            />
            {publicRoutesList.map(routeElement => {
              const RouteComponent = routeElement.component;
              return (
                <Route
                  key={routeElement.path}
                  path={routeElement.path}
                  element={<RouteComponent />}
                />
              );
            })}
            {privateRoutesList.map(routeElement => {
              const RouteComponent = routeElement.component;
              return (
                <Route
                  key={routeElement.path}
                  path={routeElement.path}
                  element={
                    <PrivateRoute>
                      <RouteComponent />
                    </PrivateRoute>
                  }
                />
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default RoutesCollection;
