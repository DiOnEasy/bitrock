import s from "./pagination.module.css";
export const Pagination = ({
  numberOfPages,
  currentPage,
  setCurrentPage,
  transactionsData,
  transactionsPerPage,
}) => {
  console.log(transactionsData);
  const pagesToShow = 3; // Определяем количество кнопок страниц для отображения

  const renderPageButtons = () => {
    const buttons = [];
    // Первая страница
    buttons.push(
      <button
        key={1}
        onClick={() => setCurrentPage(1)}
        className={currentPage === 1 ? s.activePage : s.page}
      >
        1
      </button>
    );

    // Добавляем 3 точки, если текущая страница больше чем третья
    if (currentPage > pagesToShow + 1) {
      buttons.push(<span key="dots1">...</span>);
    }

    // Кнопки со второй до предпоследней страницы
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(numberOfPages - 1, currentPage + 1); i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? s.activePage : s.page}
        >
          {i}
        </button>
      );
    }

    // Добавляем 3 точки, если текущая страница меньше чем предпоследняя
    if (currentPage < numberOfPages - pagesToShow) {
      buttons.push(<span key="dots2">...</span>);
    }

    // Последняя страница
    buttons.push(
      <button
        key={numberOfPages}
        onClick={() => setCurrentPage(numberOfPages)}
        className={currentPage === numberOfPages ? s.activePage : s.page}
      >
        {numberOfPages}
      </button>
    );

    return buttons;
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
        disabled={currentPage === Math.ceil(transactionsData.length / transactionsPerPage)}
      >
        <img src="/img/notification-arrow.svg" alt="" />
      </button>
    </div>
  );
};
