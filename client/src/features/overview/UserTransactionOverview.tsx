import { formatDate } from '../../constants';

type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

type UserTransactionOverviewProps = {
  transaction: Transaction;
};

const UserTransactionOverview = ({ transaction }: UserTransactionOverviewProps) => {
  return (
    <li className="flex items-center justify-between border-b-2 border-primary-grey-200 py-250">
      <div className="flex items-center gap-200">
        <img src={transaction.avatar} alt={`${transaction.name} profile picture`} className="rounded-full w-500 h-500" />
        <p className="text-preset-4 text-primary-grey-900">{transaction.name}</p>
      </div>

      <div>
        <p className={`text-preset-4 ${transaction.amount > 0 ? 'text-secondary-green' : 'text-primary-grey-900'}`}>{transaction.amount}</p>
        <p className="text-preset-5 text-primary-grey-500 font-light">{formatDate(transaction.date)}</p>
      </div>
    </li>
  );
};

export default UserTransactionOverview;
