import { ChooseDeposit } from "./ChooseDeposit/chooseDeposit";
import { PaymentsAmount } from "./PaymentsAmount/paymentsAmount";
import s from "./payments.module.css";

export const Payments = () => {
  return (
    <div className={s.payments}>
      <PaymentsAmount />
      <ChooseDeposit />
    </div>
  );
};
