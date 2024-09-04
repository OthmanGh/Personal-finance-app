import BillItem from './BillItem';

const BillsSummary = () => {
  return (
    <div className="flex flex-col w-full gap-250 bg-white p-250 rounded-xl">
      <h2 className="text-preset-3 font-bold">Summary</h2>

      <div className="text-primary-grey-500 flex flex-col gap-300 text-preset-5">
        <BillItem label="Paid Bills" value="2 ($320.00)" />
        <BillItem label="Total Upcoming" value="6 ($1,230.00)" />
        <BillItem label="Due Soon" value="2 ($40.00)" isHighlighted isBordered={false} />
      </div>
    </div>
  );
};

export default BillsSummary;
