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

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage, setTransactionsPerPage] = useState(12);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactionsData.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  return (
    <>
      <div className={s.transactions}>
        <div className={s.transactionsHeader}> Transaction history</div>
        <div className={s.transactionsSort}>
          <div className={s.transactionsSortItem}>
            <p>Currency</p>
            <DropdownComponent
              activeOption={activeCurrency}
              setActiveOption={setActiveCurrency}
              dropdownOptions={dropdownCurrencies}
              dropdownHeader={"All currencies"}
            />
          </div>
          <div className={s.transactionsSortItem}>
            <p>Operations</p>
            <DropdownComponent
              activeOption={activeOperation}
              setActiveOption={setActiveOperation}
              dropdownOptions={dropdownOperations}
              dropdownHeader={"All operations"}
            />
          </div>
          <div className={s.transactionsSortItem}>
            <p>Period</p>

            <CustomCalendar />
          </div>
          <div className={s.transactionsSortItem}>
            <CustomCalendar />
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
    value: "Replenishment",
    image: "/img/dropdown/replenishment.svg",
  },
  {
    text: "Withdrawal of funds",
    value: "Withdrawal of funds",
    image: "/img/dropdown/withdrawal.svg",
  },
  {
    text: "Refinancing",
    value: "Refinancing",
    image: "/img/dropdown/refinancing.svg",
  },
  {
    text: "Operation failed",
    value: "Operation failed",
    image: "/img/dropdown/operation-failed.svg",
  },
];
