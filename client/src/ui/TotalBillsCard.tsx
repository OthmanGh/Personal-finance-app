import { iconBills } from '../constants';

const TotalBillsCard = () => {
  return (
    <div className="flex flex-row w-full gap-250 sm:justify-center bg-primary-grey-900 text-white rounded-xl px-300 py-400 sm:flex-col sm:gap-400">
      <img src={iconBills} alt="recurring bills" className="w-[30px]" />

      <div className="flex flex-col gap-[11px] font-light">
        <p>Total bills</p>
        <p className="text-preset-1 font-bold">$384.98</p>
      </div>
    </div>
  );
};

export default TotalBillsCard;
