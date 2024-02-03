import { useState } from "react";
import { DepositItem } from "./DepositItem/depositItem";
import { CalcAmount } from "./calcAmount/calcAmount";
import { depositData } from "./chooseDeposit.data";
import s from "./chooseDeposit.module.css";

export const ChooseDeposit = () => {
  const [selectedDeposit, setSelectedDeposit] = useState(null);

  return (
    <div className={s.deposit}>
      <div className={s.depositHeader}>
        What kind of deposits do you want to open?
      </div>
      <CalcAmount />
      <div className={s.depositItems}>
        {depositData.map((item, index) => {
          return (
            <DepositItem
              index={index}
              header={item.depositItemHeader}
              text={item.depositItemText}
              from={item.depositItemFrom}
              to={item.depositItemTo}
              depositItemImgUrl={item.depositItemImgUrl}
              selectedDeposit={selectedDeposit}
              setSelectedDeposit={setSelectedDeposit}
            />
          );
        })}
      </div>
    </div>
  );
};
