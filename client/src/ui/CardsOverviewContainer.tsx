import MoneyCard from './MoneyCard';

const CardsOverviewContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-150 sm:gap-300">
      <MoneyCard type="balance" value="4,836.00" />
      <MoneyCard type="income" value="3,814.25" />
      <MoneyCard type="expense" value="1,700.50" />
    </div>
  );
};

export default CardsOverviewContainer;
