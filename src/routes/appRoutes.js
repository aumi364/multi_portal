import { lazy } from 'react';
import { appUrls } from '../utils/constraints/appUrls';

export const publicRoutes = {
  landing: '/',
  signin: {
    admin: {
      path: appUrls.adminSignin,
      component: lazy(() => import('../portals/admin/signin')),
    },
  },
  error: {
    notFound: {
      path: appUrls.notFound,
      component: lazy(() => import('../features/error/notFound')),
    },
  },
};

export const privateRoutes = {
  dashboard: {
    admin: {
      path: appUrls.adminDashboard,
      component: lazy(() => import('../portals/admin/dashboard')),
    },
  },
};
