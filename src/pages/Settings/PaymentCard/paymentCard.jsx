import s from "./paymentCard.module.css";

export const PaymentCard = ({
  lastFourDigits,
  expirationDate,
  index,
  onDelete ,
}) => {
  return (
    <div className={s.paymentCard}>
      <div className={s.paymentCardTop}>
        <div className={s.paymentCardNum}>*{lastFourDigits}</div>
        <div
          onClick={onDelete}
          className={s.paymentCardDelete}
        >
          <img src="/img/settings/trash.svg" alt="" />
        </div>
      </div>
      <div className={s.paymentCardBottom}>
        <div className={s.paymentCardExpiration}>{expirationDate}</div>
        <div className={s.paymentCardCvc}>***</div>
      </div>
    </div>
  );
};
