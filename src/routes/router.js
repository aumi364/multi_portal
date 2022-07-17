import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes, Navigate } from 'react-router';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import { privateRoutes, publicRoutes } from './appRoutes';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  // const isLoggedIn = useSelector(state => state.Auth.token);
  // return isLoggedIn ? children : <Navigate to={PUBLIC_ROUTE.SIGN_IN} />;
  return children;
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
      <Suspense fallback={<Spin size="large" />}>
        <Router>
          <Routes>
            <Route
              path={publicRoutes.landing}
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
                  element={<RouteComponent />}
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
