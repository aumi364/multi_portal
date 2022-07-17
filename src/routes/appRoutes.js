import { lazy } from 'react';

export const publicRoutes = {
  landing: '/',
  signin: {
    admin: {
      path: 'admin/signin',
      component: lazy(() => import('../portals/admin/signin')),
    },
  },
  error: {
    notFound: {
      path: 'not-found',
      component: lazy(() => import('../features/error/notFound')),
    },
  },
};

export const privateRoutes = {
  dashboard: {
    admin: {
      path: 'admin/dashboard',
      component: lazy(() => import('../portals/admin/dashboard')),
    },
  },
};
