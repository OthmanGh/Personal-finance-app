import { BillsSummary, TotalBillsCard } from '../../constants';

const BillsStats = () => {
  return (
    <div className="flex flex-col gap-150 sm:flex-row w-full">
      <TotalBillsCard />
      <BillsSummary />
    </div>
  );
};

export default BillsStats;
