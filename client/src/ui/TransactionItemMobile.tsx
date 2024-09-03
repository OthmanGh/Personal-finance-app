import { formatDate } from '../constants';

interface Transaction {
  name: string;
  avatar: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
}

type TransactionItemMobileProps = {
  transaction: Transaction;
};

const TransactionItemMobile = ({ transaction }: TransactionItemMobileProps) => {
  return (
    <li className="flex items-center justify-between border-primary-grey-100 border-b-2 py-300">
      <div className="flex items-center gap-150">
        <img src={transaction.avatar} alt={`${transaction.name} profile picture`} className="rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" />

        <div className="flex flex-col gap-50">
          <h2 className="text-preset-4 font-bold">{transaction.name}</h2>
          <p className="text-preset-5 text-primary-grey-500">{transaction.category}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-50">
        <p className={`font-bold ${transaction.amount > 0 ? 'text-secondary-green' : ''}`}>${transaction.amount}</p>
        <p className="text-preset-5 text-primary-grey-500">{formatDate(transaction.date)}</p>
      </div>
    </li>
  );
};

export default TransactionItemMobile;
