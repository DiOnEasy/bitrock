import s from "./paymentsAmount.module.css";

export const PaymentsAmount = () => {
  return (
    <>
      <div className={s.header}>
        Welcome <span>[Name]</span>
      </div>
      <div className={s.amountItems}>
        <div className={s.amountItem}>
          <p className={s.amountItemTop}>
            <span className={s.amountText}>The amount of your account</span>
            <span className={s.amountNumber}>$1000.00</span>
          </p>
          <p className={s.amountButtons}>
            <button>
              <span>Replenish</span>
              <img src="/img/finance-icons/arrow.svg" alt="" />
            </button>
            <button>
              <span>Bring out</span>
              <img src="/img/finance-icons/arrow.svg" alt="" />
            </button>
          </p>
        </div>
        <div className={s.amountItem}>
          <p className={s.amountItemTop}>
            <span className={s.bonusText}>SUPER BONUS</span>
            <span className={s.bonusPercentage}>
             +1%  <span>to the deposit</span>
            </span>
          </p>
          <p className={s.bonusTextBottom}>Make your first deposit to activate the bonus</p>
        </div>
      </div>
    </>
  );
};
