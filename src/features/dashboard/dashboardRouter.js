import React, { lazy, Suspense } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Routes } from 'react-router';
import { useGetCurrentUserRole } from '../../hooks/useGetCurrentUserRole';
import { privateRoutes } from '../../routes/appRoutes';
import SplashScreen from '../splashScreen';

const NotFound = lazy(() => import('../../features/error/notFound'));

const DashboardRouter = () => {
  const { pathname } = useLocation();
  const currentRole = useGetCurrentUserRole();
  const routes = privateRoutes.dashboard[currentRole].sections;

  return (
    <Suspense fallback={<SplashScreen />}>
      <Routes>
        {routes?.map((route, i) => {
          const RouteComponent = route.component;
          return (
            <Route
              exact={route.exact}
              key={i}
              path={`${route.path}`}
              element={<RouteComponent />}
            />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
export default DashboardRouter;
