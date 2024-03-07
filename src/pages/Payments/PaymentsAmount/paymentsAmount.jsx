import { useState } from "react";
import s from "./paymentsAmount.module.css";
import { PaymentPopup } from "../../../components/PaymentPopup/paymentPopup";

export const PaymentsAmount = () => {
  const [popupOpened, setPopupOpened] = useState(false);
  const [popupData, setPopupData] = useState({});

  const topUpData = {
    header: "Replenish the amount of your account",
    inputLabel: "Enter the replenishment amount in US dollars:",
  };
  const withdrawData = {
    header: "Withdraw funds from your account wallet",
    inputLabel: "Enter the withdrawal amount in US dollars:",
  };

  const handlePupupOpen = (data) => {
    setPopupData(data);
    setPopupOpened(true);
  };
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
            <button onClick={() => handlePupupOpen(topUpData)}>
              <span>Replenish</span>
              <img src="/img/finance-icons/arrow.svg" alt="" />
            </button>
            <button onClick={() => handlePupupOpen(withdrawData)}>
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
      {popupOpened && <PaymentPopup popupData={popupData} setPopupOpened={setPopupOpened}/>}

    </>
  );
};
