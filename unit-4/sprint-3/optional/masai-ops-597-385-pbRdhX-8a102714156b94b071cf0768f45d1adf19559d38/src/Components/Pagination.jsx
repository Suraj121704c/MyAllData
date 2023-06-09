function Pagination({page,handlePage,totalPages}) {
  const prev = <button data-testid="prev-page" disabled={page === 1} onClick={() => handlePage(-1)}>PREV</button>;
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = <button data-testid="next-page" disabled={page===totalPages} onClick={() => handlePage(+1)}>NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{totalPages}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
