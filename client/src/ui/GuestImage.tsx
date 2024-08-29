import { authIllustration, HeaderGuestLayout, logo } from '../constants';

const GuestImage = () => {
  return (
    <div
      className="hidden lg:p-500 lg:col-span-1 lg:flex lg:flex-col lg:justify-between text-white bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${authIllustration})` }}
    >
      <HeaderGuestLayout />

      <img src={logo} className="w-32" alt="finance logo" />

      <div className="flex flex-col gap-300">
        <p className="text-preset-1 font-bold">Keep track of your money and save for your future</p>
        <p className="text-preset-4">
          Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.
        </p>
      </div>
    </div>
  );
};

export default GuestImage;
