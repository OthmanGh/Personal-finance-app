import { TransactionsHeader, TransactionsBody } from '../../constants';

const TransactionsTable = () => {
  return (
    <div className="flex flex-col gap-300 bg-white py-300 px-250 rounded-xl sm:p-400 w-full">
      <TransactionsHeader />
      <TransactionsBody />
    </div>
  );
};

export default TransactionsTable;
