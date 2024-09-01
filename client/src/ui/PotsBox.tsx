import { secondaryColors } from '../constants';

type PotsBoxProps = {
  category: string;
  value: string;
  color: string;
};

const PotsBox = ({ category, value, color }: PotsBoxProps) => {
  const borderClass = secondaryColors[color];

  return (
    <div className={`pl-200 border-l-4 ${borderClass}`}>
      <p className="text-preset-5 mb-[4px] font-semibold text-primary-grey-500">{category}</p>
      <p className="text-preset-4">${value}</p>
    </div>
  );
};

export default PotsBox;
