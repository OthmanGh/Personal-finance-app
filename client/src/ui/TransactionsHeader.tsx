import { MobileFilterSortComp, SearchTransaction } from '../constants';
import FilterByCategoryComp from '../features/transactions/FilterByCategoryComp';
import SortByComp from '../features/transactions/SortByComp';

const TransactionsHeader = () => {
  return (
    <header className="flex flex-row items-center justify-between gap-250">
      <SearchTransaction />
      <MobileFilterSortComp />
      <div className="hidden sm:flex items-center gap-300">
        <SortByComp />
        <FilterByCategoryComp />
      </div>
    </header>
  );
};

export default TransactionsHeader;
