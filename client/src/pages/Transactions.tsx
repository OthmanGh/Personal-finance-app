import { TransactionsTable } from '../constants';

const Transactions = () => {
  return (
    <div className="flex flex-col gap-400">
      <h2 className="text-preset-1 font-bold">Transactions</h2>
      <TransactionsTable />
    </div>
  );
};

export default Transactions;
