import HeaderOverviewComp from './HeaderOverviewComp';
import RecurringBill from './RecurringBill';

const RecurringBillsOverview = () => {
  return (
    <div className="flex flex-col gap-400 rounded-[12px] px-250 py-300 sm:p-400 bg-white">
      <HeaderOverviewComp title="Recurring Bills" to="recurring-bills" />

      <div className="flex flex-col gap-150">
        <RecurringBill title="Paid Bills" color="green" amount={190.0} />
        <RecurringBill title="Total Upcoming" color="yellow" amount={194.98} />
        <RecurringBill title="Due Soon" color="cyan" amount={59.98} />
      </div>
    </div>
  );
};

export default RecurringBillsOverview;
