import { useState } from 'react';
import { FilterDropdownComp } from '../../constants';

const SortByComp = () => {
  const [sortValue, setSortValue] = useState<string>('latest');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(e.target.value);
  };

  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'atoz', label: 'A to Z' },
    { value: 'ztoa', label: 'Z to A' },
    { value: 'highest', label: 'Highest' },
    { value: 'lowest', label: 'Lowest' },
  ];

  return <FilterDropdownComp label="Sort By" options={sortOptions} selectedValue={sortValue} onChange={handleSortChange} />;
};

export default SortByComp;
