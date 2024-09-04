import { HeaderDefaultLayout, BillsStats, BillsTable } from '../constants';

const RecurringBills = () => {
  return (
    <div className="flex flex-col gap-300">
      <div>
        <HeaderDefaultLayout>Recurring Bills</HeaderDefaultLayout>
        <BillsStats />
      </div>
      <BillsTable />
    </div>
  );
};

export default RecurringBills;
