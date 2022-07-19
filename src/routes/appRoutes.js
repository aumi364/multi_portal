import React, { lazy } from 'react';
import { appUrls } from '../utils/constraints/appUrls';
import { FileOutlined, UserOutlined } from '@ant-design/icons';

export const publicRoutes = {
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
      component: lazy(() => import('../features/dashboard')),
      sections: [
        {
          path: appUrls.home,
          component: lazy(() => import('../portals/admin/home')),
        },
        {
          path: appUrls.subOption1,
          component: lazy(() => import('../portals/admin/dummySubOption1')),
        },
        {
          path: appUrls.subOption2,
          component: lazy(() => import('../portals/admin/dummySubOption2')),
        },
      ],
    },
  },
};
