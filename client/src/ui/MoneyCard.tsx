type MoneyCardProps = {
  value: string;
  type: 'balance' | 'income' | 'expense';
};

const MoneyCard = ({ type, value }: MoneyCardProps) => {
  return (
    <div
      className={`flex flex-col gap-150 flex-grow lg:min-w-[250px] ${
        type === 'balance' ? 'bg-primary-grey-900 text-white' : 'bg-white'
      } rounded-[12px] p-250 sm:p-300`}
    >
      <p className="text-preset-4 font-light">{type === 'balance' ? 'Current Balance' : type === 'income' ? 'Income' : 'Expense'}</p>
      <p className="text-preset-1">${value}</p>
    </div>
  );
};

export default MoneyCard;
