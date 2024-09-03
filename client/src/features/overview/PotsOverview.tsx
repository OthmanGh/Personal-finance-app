import { iconPot } from '../../constants';
import { padding } from './styleVars';
import PotsBox from '../../ui/PotsBox';
import HeaderOverviewComp from './HeaderOverviewComp';

const PotsOverview = () => {
  return (
    <div className={`${padding} lg:h-[218px]`}>
      <HeaderOverviewComp title="Pots" to="pots" />

      <div className="grid grid-cols-1 gap-250 sm:grid-cols-2">
        <div className="flex flex-row items-center gap-200 bg-primary-beige-light rounded-xl p-200">
          <img src={iconPot} alt="pot icon" className="w-500 h-500" />
          <div className="flex flex-col gap-[11px]">
            <p className="text-preset-4 text-primary-grey-500 font-light">Total Saved</p>
            <p className="text-preset-1">$850</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-200 w-full">
          <PotsBox color="green" value="159" category="Savings" />
          <PotsBox color="cyan" value="40" category="Gift" />
          <PotsBox color="navy" value="110" category="Concert Ticket" />
          <PotsBox color="yellow" value="19" category="New Laptop" />
        </div>
      </div>
    </div>
  );
};

export default PotsOverview;
