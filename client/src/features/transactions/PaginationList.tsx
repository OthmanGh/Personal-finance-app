type PaginationListProps = {
  numbers: number[];
  currentPage: number;
  onPageChange: (page: number) => void;
};

const PaginationList = ({ numbers, currentPage, onPageChange }: PaginationListProps) => {
  return (
    <ul className="flex items-center gap-100">
      {numbers.map((number) => (
        <li
          value={number}
          className={`${
            currentPage === number ? 'bg-primary-grey-900 text-white' : ''
          } px-200 py-100 border-primary-grey-500 border-2 border-opacity-50 rounded-lg text-preset-4 cursor-pointer hover:border-opacity-100 transition-colors duration-500`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </li>
      ))}
    </ul>
  );
};

export default PaginationList;
