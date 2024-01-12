import { Navigate, type RouteObject } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/constants';
import Login from '../components/Login';
import Chat from '../components/Chat';
import Layout from '../layouts/Layout';

export const layoutRoute: RouteObject = {
  path: '/',
  element: <Layout />,
};

export const publicRoutes: Array<RouteObject> = [
  {
    ...layoutRoute,
    children: [
      {
        path: LOGIN_ROUTE,
        element: <Login />,
      },
      {
        path: '*',
        element: <Navigate to={LOGIN_ROUTE} />,
      },
    ],
  },
];

export const privateRoutes: Array<RouteObject> = [
  {
    ...layoutRoute,
    children: [
      {
        path: CHAT_ROUTE,
        element: <Chat />,
      },
      {
        path: '*',
        element: <Navigate to={CHAT_ROUTE} />,
      },
    ],
  },
];
