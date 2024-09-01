import { TransactionsOverview, PotsOverview } from '../constants';

const OverviewContentLayout = () => {
  return (
    <div className="flex flex-col gap-200">
      <PotsOverview />
      <TransactionsOverview />
    </div>
  );
};

export default OverviewContentLayout;
