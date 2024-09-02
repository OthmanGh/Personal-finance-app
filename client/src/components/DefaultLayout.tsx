import { Outlet, Navigate } from 'react-router-dom';
import { MinimizeSidebar, Sidebar } from '../constants';
import { useState, useEffect } from 'react';

const DefaultLayout = () => {
  const [isMinimize, setIsMinimize] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const token = localStorage.getItem('ACCESS_TOKEN');
  if (!token) return <Navigate to="/login" />;

  const handleToggleSidebar = () => {
    setIsMinimize((prev) => !prev);
  };

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMinimize(false);
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen bg-primary-beige-light transition-all duration-400">
      {!isMinimize ? <Sidebar onToggle={handleToggleSidebar} /> : <MinimizeSidebar onToggle={handleToggleSidebar} />}

      <div className="px-200 py-300 sm:px-400 sm:py-500 w-full flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
