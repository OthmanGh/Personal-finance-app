import HeaderOverviewComp from './HeaderOverviewComp';
import DoughnutChart from './DoughnutChart';

const BudgetsOverview = () => {
  return (
    <div className="flex flex-col gap-250 rounded-xl bg-white px-250 py-300 sm:p-400 lg:h-[410px]">
      <HeaderOverviewComp title="Budgets" to="budgets" />
      <DoughnutChart />
    </div>
  );
};

export default BudgetsOverview;
