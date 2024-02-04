import s from "./transactionsItem.module.css";

export const TransactionsItem = ({
  date,
  operation,
  amount,
  img,
  currency,
}) => {
  return (
    <>
      <p className={s.date}>{date}</p>
      <p className={s.operation}>
        <div className={s.operationImg}>
          <img src="/img/transaction-operation.svg" alt="" />
        </div>
        <span>{operation}</span>
      </p>
      <p className={s.currency}>
        <div className={s.currencyImg}>
          <img src={img} alt="" />
        </div>
        <span>{currency}</span>
      </p>
      <p className={s.amount}>{amount}</p>
    </>
  );
};
