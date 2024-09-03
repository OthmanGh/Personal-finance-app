import { iconFilter, iconSort } from '../../constants';

const MobileFilterSortComp = () => {
  return (
    <div className="flex gap-200 sm:hidden">
      <img src={iconSort} alt="sort icon" className="cursor-pointer w-[20px]" />
      <img src={iconFilter} alt="filter icon" className="cursor-pointer w-[20px]" />
    </div>
  );
};

export default MobileFilterSortComp;
