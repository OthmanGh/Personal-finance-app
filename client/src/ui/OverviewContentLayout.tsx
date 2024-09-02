import { TransactionsOverview, PotsOverview, RecurringBillsOverview } from '../constants';

const OverviewContentLayout = () => {
  return (
    <div className="flex flex-col gap-200">
      <PotsOverview />
      <TransactionsOverview />
      <RecurringBillsOverview />
    </div>
  );
};

export default OverviewContentLayout;
