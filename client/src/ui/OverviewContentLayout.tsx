import { TransactionsOverview, PotsOverview, RecurringBillsOverview, BudgetsOverview } from '../constants';

const OverviewContentLayout = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
      <div className="flex flex-col gap-6 sm:gap-8">
        <PotsOverview />
        <TransactionsOverview />
      </div>

      <div className="flex flex-col gap-6 sm:gap-8">
        <BudgetsOverview />
        <RecurringBillsOverview />
      </div>
    </div>
  );
};

export default OverviewContentLayout;
