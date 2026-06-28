function Pagination({
  totalUsers,
  currentPage,
  rowsPerPage,
  setCurrentPage,
  setRowsPerPage,
}) {
  const totalPages = Math.ceil(totalUsers / rowsPerPage);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">

      <div className="rows-select">
        <label>Rows per page:</label>

        <select
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      <div className="page-controls">

        <button
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Pagination;