import { iconSearch } from '../../constants';

const SearchBill = () => {
  return (
    <fieldset className="flex py-150 px-300 rounded-lg border-2 border-primary-grey-500 border-opacity-50 w-full bg-white focus-within:border-opacity-100 transition-all duration-500">
      <input type="text" placeholder="Search bills" className="w-full outline-none px-100 placeholder:font-light" />
      <img src={iconSearch} alt="Search Icons" className="w-[16px]" />
    </fieldset>
  );
};

export default SearchBill;
