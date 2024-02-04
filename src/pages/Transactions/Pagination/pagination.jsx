import s from "./pagination.module.css";

export const Pagination = ({
  currentPage,
  setCurrentPage,
  transactionsData,
  transactionsPerPage,
}) => {
  return (
    <div className={s.pagination}>
      <button
      className={s.prevButton}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src="/img/notification-arrow.svg" alt="" />
      </button>
      {Array.from(
        { length: Math.ceil(transactionsData.length / transactionsPerPage) },
        (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? s.activePage : s.page}
          >
            {i + 1}
          </button>
        )
      )}
      <button
      className={s.nextButton}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={
          currentPage ===
          Math.ceil(transactionsData.length / transactionsPerPage)
        }
      >
        <img src="/img/notification-arrow.svg" alt="" />
      </button>
    </div>
  );
};
