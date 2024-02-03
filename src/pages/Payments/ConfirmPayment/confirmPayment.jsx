import s from "./confimrPayment.module.css";

export const ConfirmPaymentPage = ({
  currencyImg,
  currencyText,
  currencyValue,
  amountOfDeposit,
}) => {
  return (
    <div className={s.confirmPayment}>
      <div className={s.confirmPaymentHeader}>
        <div className={s.confirmPaymentText}>
          <p className={s.confirmPaymentTitle}>Currency</p>
          <p className={s.confirmPaymentStatus}>
            <span className={s.confirmPaymentStatusImg}>
              <img src={currencyImg} alt="" />
            </span>

            <span>{currencyText}</span>
          </p>
          <p className={s.confirmPaymentWarning}>
            The currency you have chosen cannot be edited in the future
          </p>
        </div>
        <div className={s.confirmPaymentText}>
          <p className={s.confirmPaymentTitle}>Status</p>
          <p className={s.confirmPaymentStatus}>
            <span className={s.confirmPaymentStatusImg}>
              {" "}
              <img src="/img/payments/clock.svg" alt="" />
            </span>

            <span>Waiting for payment</span>
          </p>
          <p className={s.confirmPaymentWarning}>
            The status will change after confirmation
          </p>
        </div>
      </div>
      <div className={s.confirmPaymentContent}>
        <div className={s.confirmPaymentInfo}>
          <div className={s.confirmPaymentInfoItem}>
            <p>Replenishment address</p>
            <p className={s.confirmPaymentData}>
              <span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>{" "}
              <div onClick={() => {
                navigator.clipboard.writeText('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
              }} className={s.confirmPaymentCopyItem}>
                <img src="/img/payments/copy.svg" alt="" />
              </div>
            </p>
          </div>
          <div className={s.confirmPaymentInfoItem}>
            <p>The amount of the deposit</p>
            <p className={s.confirmPaymentData}>
              <span>
                <span>{amountOfDeposit}</span> <span>{currencyValue}</span>
              </span>

              <div onClick={() => {
                navigator.clipboard.writeText(amountOfDeposit);
              }} className={s.confirmPaymentCopyItem}>
                <img src="/img/payments/copy.svg" alt="" />
              </div>
            </p>
          </div>
          <div className={s.confirmPaymentButton}>
            <button>Confirm the payment</button>
          </div>
        </div>
        <div className={s.confirmPaymentQr}>
          <div className={s.confirmPaymentQrImg}>
            <img src="" alt="" />
          </div>
          <div className={s.confirmPaymentQrText}>
            Scan the QR code for a quick deposit to your deposit
          </div>
        </div>
      </div>
    </div>
  );
};
