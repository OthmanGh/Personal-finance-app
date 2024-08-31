import { Outlet, Navigate } from 'react-router-dom';
import { MinimizeSidebar, Sidebar } from '../constants';
import { useState } from 'react';

const DefaultLayout = () => {
  const [isMinimize, setIsMinimize] = useState(false);

  const token = localStorage.getItem('ACCESS_TOKEN');
  if (!token) return <Navigate to="/login" />;

  const toggleSidebar = () => {
    setIsMinimize((prev) => !prev);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row h-screen bg-primary-beige-light transition-all duration-400">
      {!isMinimize ? <Sidebar onToggle={toggleSidebar} /> : <MinimizeSidebar onToggle={toggleSidebar} />}

      <div className="px-200 py-300 sm:px-400 sm:py-500">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
