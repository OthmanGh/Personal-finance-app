import { secondaryColors } from '../../constants';

type RecurringBillProps = {
  title: string;
  amount: number;
  color: string;
};

const RecurringBill = ({ title, amount, color }: RecurringBillProps) => {
  const borderColor = secondaryColors[color];

  return (
    <div className={`flex items-center justify-between bg-primary-beige-light px-200 py-250 rounded-[8px] border-l-4 ${borderColor} `}>
      <p className="text-preset-4 text-primary-grey-500 font-light">{title}</p>
      <p className="text-preset-4">${amount}</p>
    </div>
  );
};

export default RecurringBill;
