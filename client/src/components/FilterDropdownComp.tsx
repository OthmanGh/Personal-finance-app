import React from 'react';
import { iconCaretDown } from '../constants/index';

interface Option {
  value: string;
  label: string;
}

interface FilterDropdownCompProps {
  label?: string;
  options: Option[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const FilterDropdownComp = ({ label = 'Sort By', options, selectedValue, onChange, className = '' }: FilterDropdownCompProps) => {
  return (
    <div className={`hidden sm:flex sm:items-center sm:gap-50 ${className}`}>
      {label && <p className="text-sm text-primary-grey-500 font-light mr-2">{label}</p>}
      <div className="relative flex items-center cursor-pointer border-2 border-primary-grey-500 border-opacity-50 rounded-lg bg-white transition-all duration-300 focus-within:border-opacity-100">
        <select
          className="outline-none cursor-pointer pr-10 pl-3 py-150 appearance-none bg-transparent text-primary-grey-900 text-preset-4"
          value={selectedValue}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="absolute right-0 flex items-center pr-3 pointer-events-none">
          <img src={iconCaretDown} alt="caret down arrow" className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
};

export default FilterDropdownComp;
