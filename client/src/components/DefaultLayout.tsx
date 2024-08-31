import { Outlet, Navigate } from 'react-router-dom';

const DefaultLayout = () => {
  const token = localStorage.getItem('ACCESS_TOKEN');

  if (!token) return <Navigate to="/login" />;

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
