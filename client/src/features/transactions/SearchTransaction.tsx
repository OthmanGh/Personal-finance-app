import { iconSearch } from '../../constants';

const SearchTransaction = () => {
  return (
    <fieldset className="flex justify-between items-center gap-300 border-2 border-opacity-50 border-primary-grey-500 focus-within:border-opacity-100 rounded-lg py-[11px] px-250 min-w-[50px] transition-all duration-300">
      <input placeholder="Search transaction" type="text" className="w-full placeholder:text-preset-4 outline-none " />
      <img src={iconSearch} alt="Search icon" />
    </fieldset>
  );
};

export default SearchTransaction;
