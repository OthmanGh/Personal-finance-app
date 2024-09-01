import { transactions } from './dummy';
import UserTransactionOverview from './UserTransactionOverview';

const UsersTransactionsContainer = () => {
  return (
    <ul className="h-[519px] overflow-y-scroll">
      {transactions.map((transaction) => (
        <UserTransactionOverview transaction={transaction} />
      ))}
    </ul>
  );
};

export default UsersTransactionsContainer;
