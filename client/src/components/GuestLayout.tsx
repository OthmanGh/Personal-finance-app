import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const GuestLayout = () => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/overview');
    }
  }, [navigate, token]);

  return (
    <div className="bg-primary-beige-light">
      <Outlet />
    </div>
  );
};

export default GuestLayout;
