import { iconSort } from '../../constants';
import SearchBill from './SearchBill';

const BillsTableHeader = () => {
  return (
    <header className="flex items-center justify-center gap-300">
      <SearchBill />
      <img src={iconSort} className="w-[30px] self-center" />
    </header>
  );
};

export default BillsTableHeader;
