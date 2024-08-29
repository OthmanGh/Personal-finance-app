import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <div className="bg-primary-beige-light">
      <Outlet />
    </div>
  );
};

export default GuestLayout;
