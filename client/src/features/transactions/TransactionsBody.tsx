import { useState } from 'react';
import { PaginationButton, PaginationList, TransactionItem, iconCaretLeft, iconCaretRight } from '../../constants';
import { transactions } from './dummy';

const TransactionsBody = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const starterIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = starterIndex + itemsPerPage;
  const paginatedTransactions = transactions.slice(starterIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < transactions.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageChange = (number: number) => {
    setCurrentPage(number);
  };

  const numbers = Array.from({ length: transactions.length / itemsPerPage }, (_, i) => i + 1);
  console.log(numbers);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full mb-400">
        <thead>
          <tr>
            <th className="text-preset-5 text-left px-300 py-200 font-light tracking-wider">Recipient / Sender</th>
            <th className="text-preset-5 text-left px-300 py-200 font-light tracking-wider">Category</th>
            <th className="text-preset-5 text-left px-300 py-200 font-light tracking-wider">Transaction Date</th>
            <th className="text-preset-5 text-left px-300 py-200 font-light tracking-wider">Amount</th>
          </tr>
        </thead>

        <tbody>
          {paginatedTransactions.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.name} />
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between ">
        <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1} icon={iconCaretLeft} label="Prev" />

        <PaginationList numbers={numbers} currentPage={currentPage} onPageChange={handlePageChange} />

        <PaginationButton onClick={handleNextPage} disabled={currentPage * itemsPerPage === transactions.length} icon={iconCaretRight} label="Next" />
      </div>
    </div>
  );
};

export default TransactionsBody;
