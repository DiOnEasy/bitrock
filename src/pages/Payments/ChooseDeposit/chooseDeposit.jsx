import { CalcAmount } from "./calcAmount/calcAmount";
import s from "./chooseDeposit.module.css";

export const ChooseDeposit = () => {
  return (
    <div className={s.deposit}>
      <div className={s.depositHeader}>
        What kind of deposits do you want to open?
      </div>
      <CalcAmount />
    </div>
  );
};
