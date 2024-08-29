import { authIllustration, HeaderGuestLayout } from '../constants';

const GuestImage = () => {
  return (
    <div className="hidden lg:block lg:p-250 lg:h-[100vh] lg:col-span-1">
      <HeaderGuestLayout />
      <img src={authIllustration} className="lg:block h-full rounded-[12px]" alt="illustration image" />
    </div>
  );
};

export default GuestImage;
