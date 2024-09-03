import { useState } from 'react';
import { FilterDropdownComp } from '../../constants';

const FilterByCategoryComp = () => {
  const [filter, setFilter] = useState<string>('All Transactions');

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filterOptions = [
    { label: 'All Transactions', value: 'all' },
    { label: 'Entertainment', value: 'entertainment' },
    { label: 'Bills', value: 'bills' },
    { label: 'Groceries', value: 'groceries' },
    { label: 'Dining Out', value: 'dining-out' },
    { label: 'Transportation', value: 'transportation' },
    { label: 'Personal Care', value: 'personal-care' },
    { label: 'Education', value: 'education' },
    { label: 'Lifestyle', value: 'lifestyle' },
    { label: 'Shopping', value: 'shopping' },
    { label: 'General', value: 'general' },
  ];

  return <FilterDropdownComp options={filterOptions} label="Category" onChange={handleFilterChange} selectedValue={filter} />;
};

export default FilterByCategoryComp;
