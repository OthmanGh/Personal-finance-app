import HeaderOverviewComp from './HeaderOverviewComp';
import UsersTransactionsContainer from './UsersTransactionsContainer';
import { padding } from './styleVars';

const TransactionsOverview = () => {
  return (
    <div className={`${padding} lg:h-[519px]`}>
      <HeaderOverviewComp title="Transactions" to="transactions" />
      <UsersTransactionsContainer />
    </div>
  );
};

export default TransactionsOverview;
