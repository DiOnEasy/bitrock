import s from "./statistics.module.css";

export const Statistics = () => {
  return (
    <div className={s.statistics}>
      <div className={s.statisticsHeader}>
        Welcome <span>[Name]</span>
      </div>
      <div className={s.statisticsAmount}>
        <div className={s.statisticsAmountText}>The amount of your account</div>
        <div className={s.statisticsAmountNum}>$1000.00</div>
      </div>
      <div className={s.statisticsItems}>
        <div className={s.item}>
          <div className={s.statisticsImg}>
            <img src="/img/finance-icons/deposit.svg" alt="" />
          </div>
          <div className={s.statisticsText}>
            <p>Deposit</p>
            <p>$100</p>
          </div>
        </div>
        <div className={s.statisticsArrow}>
          <img src="/img/finance-icons/arrow-right.svg" alt="" />
        </div>
        <div className={s.item}>
          <div className={s.statisticsImg}>
            <img src="/img/finance-icons/percentage.svg" alt="" />
          </div>
          <div className={s.statisticsText}>
            <p>Current percentage</p>
            <p>$0</p>
          </div>
        </div>
        <div className={s.statisticsArrow}>
          <img src="/img/finance-icons/arrow-right.svg" alt="" />
        </div>
        <div className={s.item}>
          <div className={s.statisticsImg}>
            <img src="/img/finance-icons/earned.svg" alt="" />
          </div>
          <div className={s.statisticsText}>
            <p>Earned</p>
            <p>$0</p>
          </div>
        </div>
        <div className={s.statisticsArrow}>
          <img src="/img/finance-icons/arrow-right.svg" alt="" />
        </div>
        <div className={s.item}>
          <div className={s.statisticsImg}>
            <img src="/img/finance-icons/withdrawal.svg" alt="" />
          </div>
          <div className={s.statisticsText}>
            <p>Withdrawal of funds</p>
            <p>$0</p>
          </div>
        </div>
      </div>
      <div className={s.action}>
        <div className={s.actionHeader}>
          What action do you want to perform?
        </div>
        <div className={s.actionButtons}>
          <div>
            <button className={s.topUp}>
              <span>Top up your deposit</span>
              <img src="/img/finance-icons/arrow.svg" alt="" />
            </button>
          </div>
          <div>
            <button className={s.withdraw}>
              <span>Withdraw funds</span>
              <img src="/img/finance-icons/arrow.svg" alt="" />
            </button>
          </div>
          <div>
            <button className={s.refinancing}>
              <span>Refinancing</span>
              <img
                src="/img/finance-icons/refinancing-button-icon.svg"
                alt=""
              />
            </button>
          </div>
          <div>
            <button className={s.closeDeposit}>
              <span>Close the deposit</span>
              <img src="/img/close.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className={s.statisticsInfo}>
        <div className={s.statisticsInfoItem}>
          <p>Login</p>
          <p>$100</p>
        </div>
        <div className={s.statisticsInfoItem}>
          <p>Email</p>
          <p>$0</p>
        </div>
        <div className={s.statisticsInfoItem}>
          <p>IP address</p>
          <p>$0</p>
        </div>
        <div className={s.statisticsInfoItem}>
          <p>Country</p>
          <p>$0</p>
        </div>
      </div>
    </div>
  );
};
