import { Outlet, Navigate } from 'react-router-dom';
import { Sidebar } from '../constants';

const DefaultLayout = () => {
  const token = localStorage.getItem('ACCESS_TOKEN');

  if (!token) return <Navigate to="/login" />;

  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen bg-primary-beige-light">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
