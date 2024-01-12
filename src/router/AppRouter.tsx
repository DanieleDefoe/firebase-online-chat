import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { privateRoutes, publicRoutes } from './routes';
import { useContext } from 'react';
import { Context } from '../context';

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <RouterProvider
      router={createBrowserRouter(user ? privateRoutes : publicRoutes)}
    />
  );
};

export default AppRouter;
