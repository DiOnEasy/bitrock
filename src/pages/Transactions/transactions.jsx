import { useEffect, useState } from "react";
import { DropdownComponent } from "../../components/Dropdown/dropdown";
import { TransactionsItem } from "./TransactionsItem/transactionsItem";
import { transactionsData } from "./transactions.data";
import s from "./transactions.module.css";
import { Pagination } from "./Pagination/pagination";
import { CustomCalendar } from "./CustomCalendar/customCalendar";

export const Transactions = () => {
  const [activeCurrency, setActiveCurrency] = useState(null);
  const [activeOperation, setActiveOperation] = useState(null);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const [transactionsDataComponent, setTransactionsDataComponent] =
    useState(transactionsData);

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage, setTransactionsPerPage] = useState(12);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactionsDataComponent.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const [sortingCurrency, setSortingCurrency] = useState(null);
  const [sortingOperation, setSortingOperation] = useState(null);
  const [sortingFromDate, setSortingFromDate] = useState(null);
  const [sortingToDate, setSortingToDate] = useState(null);

  useEffect(() => {
    filter();
  }, [sortingCurrency, sortingOperation, sortingFromDate, sortingToDate]);

  const filter = async () => {
    let filteredData = transactionsData;
    if (sortingCurrency != null) {
      filteredData = filteredData.filter(
        (transaction) => transaction.currency === sortingCurrency
      );
    }
    if (sortingOperation != null) {
      filteredData = filteredData.filter(
        (transaction) => transaction.operation === sortingOperation
      );
    }

    if (sortingFromDate != 0 && sortingToDate != null) {
      console.log(
        new Date(filteredData[0].date) >= new Date(sortingFromDate),
        new Date(sortingFromDate),
        new Date(filteredData[0].date)
      );
      filteredData = filteredData.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return (
          transactionDate >= new Date(sortingFromDate) &&
          transactionDate <= new Date(sortingToDate)
        );
      });
    }

    setTransactionsDataComponent(filteredData);

    setCurrentPage(1); // Сбрасываем текущую страницу на первую при изменении фильтров
    setNumberOfPages(Math.ceil(filteredData.length / transactionsPerPage));
  };

  return (
    <>
      <div className={s.transactions}>
        <div className={s.transactionsHeader}> Transaction history</div>
        <div className={s.transactionsSort}>
          <div className={s.transactionsSortItem}>
            <p>Currency</p>
            <DropdownComponent
              setSorting={setSortingCurrency}
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              activeOption={activeCurrency}
              setActiveOption={setActiveCurrency}
              dropdownOptions={dropdownCurrencies}
              dropdownHeader={"All currencies"}
            />
          </div>
          <div className={s.transactionsSortItem}>
            <p>Operations</p>
            <DropdownComponent
              setSorting={setSortingOperation}
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "4px",
              }}
              activeOption={activeOperation}
              setActiveOption={setActiveOperation}
              dropdownOptions={dropdownOperations}
              dropdownHeader={"All operations"}
            />
          </div>
          <div className={s.transactionsSortItem}>
            <p>Period</p>

            <CustomCalendar setSorting={setSortingFromDate} />
          </div>
          <div className={s.transactionsSortItem}>
            <CustomCalendar setSorting={setSortingToDate} />
          </div>
        </div>
        <div className={s.transactionsHistory}>
          <div className={s.transactionsHistoryHeader}>
            <p>Date</p>
            <p>Operation</p>
            <p>Currency</p>
            <p>Amount</p>
          </div>
          <div className={s.transactionsHistoryItems}>
            {currentTransactions.map((transaction, index) => {
              return (
                <div className={s.transactionsHistoryItem}>
                  <TransactionsItem
                    date={transaction.date}
                    amount={transaction.amount}
                    img={transaction.img}
                    currency={transaction.currency}
                    operation={transaction.operation}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        transactionsData={transactionsData}
        transactionsPerPage={transactionsPerPage}
      />
    </>
  );
};

const dropdownCurrencies = [
  {
    text: "Bitcoin - BTC",
    value: "BTC",
    image: "/img/dropdown/BTC.svg",
  },
  {
    text: "Ethereum - ETH",
    value: "ETH",
    image: "/img/dropdown/ETH.svg",
  },
  {
    text: "Ripple - XRP",
    value: "XRP",
    image: "/img/dropdown/XRP.svg",
  },
  {
    text: "Tether (TRC20) - USDT",
    value: "USDT",
    image: "/img/dropdown/USDT.svg",
  },
];

const dropdownOperations = [
  {
    text: "Replenishment",
    value: "Accrual",
    image: "/img/dropdown/replenishment.svg",
  },
  {
    text: "Withdrawal of funds",
    value: "Withdrawal of funds",
    image: "/img/dropdown/withdrawal.svg",
  },
  {
    text: "Refinancing",
    value: "Refinanced",
    image: "/img/dropdown/refinancing.svg",
  },
  {
    text: "Operation failed",
    value: "Operation failed",
    image: "/img/dropdown/operation-failed.svg",
  },
];
