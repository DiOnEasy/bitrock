import s from "./pagination.module.css";

export const Pagination = ({
  numberOfPages,
  currentPage,
  setCurrentPage,
  transactionsData,
  transactionsPerPage,
}) => {
  console.log(transactionsData);

  const renderPageButtons = () => {
    const pagesToShow = 3; // Количество кнопок страницы, которые нужно отображать

    let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let endPage = Math.min(numberOfPages, startPage + pagesToShow - 1);

    // Корректируем startPage, чтобы показать pagesToShow кнопок, если currentPage близка к концам
    if (endPage - startPage + 1 < pagesToShow) {
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    let pageButtons = [];

    if (startPage > 1) {
      pageButtons.push(
        <button key="page-start" onClick={() => setCurrentPage(1)} className={s.page}>
          1
        </button>
      );
      if (startPage > 2) {
        pageButtons.push(<span key="dots-start">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? s.activePage : s.page}
        >
          {i}
        </button>
      );
    }

    if (endPage < numberOfPages) {
      if (endPage < numberOfPages - 1) {
        pageButtons.push(<span key="dots-end">...</span>);
      }
      pageButtons.push(
        <button
          key="page-end"
          onClick={() => setCurrentPage(numberOfPages)}
          className={s.page}
        >
          {numberOfPages}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div className={s.pagination}>
      <button
        className={s.prevButton}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src="/img/notification-arrow.svg" alt="" />
      </button>
      {renderPageButtons()}
      <button
        className={s.nextButton}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === numberOfPages}
      >
        <img src="/img/notification-arrow.svg" alt="" />
      </button>
    </div>
  );
};
