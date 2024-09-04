interface BillItemProps {
  label: string;
  value: string;
  isHighlighted?: boolean;
  isBordered?: boolean;
}

const BillItem = ({ label, value, isHighlighted = false, isBordered = true }: BillItemProps) => {
  return (
    <p
      className={`flex flex-row justify-between pb-200 ${isBordered ? 'border-b-2 border-[#696868] border-opacity-15' : ''} ${
        isHighlighted ? 'text-secondary-red font-semibold' : 'text-primary-grey-500'
      } text-preset-5`}
    >
      <span>{label}</span>
      <span className={`font-bold ${isHighlighted ? 'text-secondary-red' : 'text-primary-grey-900 text-preset-5'}`}>{value}</span>
    </p>
  );
};

export default BillItem;
