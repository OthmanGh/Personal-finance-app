import { CardsOverviewContainer, HeaderDefaultLayout, OverviewContentLayout } from '../constants';

const Overview = () => {
  return (
    <div className="flex flex-col gap-400 text-preset-1 font-bold">
      <HeaderDefaultLayout>Overview</HeaderDefaultLayout>

      <CardsOverviewContainer />

      <OverviewContentLayout />
    </div>
  );
};

export default Overview;
