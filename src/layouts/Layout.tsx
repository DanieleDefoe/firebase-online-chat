import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { Context } from '../context';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../components/Loader';

const Layout = () => {
  const { auth } = useContext(Context);
  const [, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
