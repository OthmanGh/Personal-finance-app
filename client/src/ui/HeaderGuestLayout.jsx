import { logo } from '../constants';

const HeaderGuestLayout = () => {
  return (
    <div className="bg-primary-grey-900 text-white h-[69.76px] p-600 px-[40px] py-[24px] rounded-b-[8px] lg:hidden">
      <img className="mx-auto h-[21.76px] w-[121.45px]" src={logo} alt="Finance logo" />
    </div>
  );
};

export default HeaderGuestLayout;
