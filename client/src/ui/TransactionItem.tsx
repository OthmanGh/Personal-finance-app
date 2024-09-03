import { formatDate } from '../constants';

interface Transaction {
  name: string;
  avatar: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
}

type TransactionItemProps = {
  transaction: Transaction;
};

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  return (
    <tr className="border-b border-primary-grey-100 hover:bg-primary-beige-light transition-colors">
      <td className="py-200 px-300 flex items-center gap-4">
        <img src={transaction.avatar} alt={`${transaction.name} profile picture`} className="rounded-full w-8 h-8 sm:w-10 sm:h-10" />
        <h2 className="text-sm font-semibold text-gray-900">{transaction.name}</h2>
      </td>

      <td className="py-200 px-300">
        <p className="text-preset-5 text-gray-500">{transaction.category}</p>
      </td>

      <td className="py-200 px-300">
        <p className="text-preset-5 text-gray-500">{formatDate(transaction.date)}</p>
      </td>

      <td className={`py-200 px-300 text-preset-4 font-bold ${transaction.amount > 0 ? 'text-secondary-green' : 'text-primary-grey-900'}`}>
        ${transaction.amount.toFixed(2)}
      </td>
    </tr>
  );
};

export default TransactionItem;
