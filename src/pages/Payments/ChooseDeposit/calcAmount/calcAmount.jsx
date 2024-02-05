import { useEffect, useState } from "react";
import s from "./calcAmount.module.css";

export const CalcAmount = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [term, setTerm] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const handleInputChange = (event, setter) => {
    const inputValue = event.target.value;
    setter(inputValue);
  };

  useEffect(() => {
    const deposit = parseFloat(depositAmount) || 0;
    const rate = parseFloat(interestRate) || 0;
    const termValue = parseFloat(term) || 1;
    const result = (deposit * (rate / 100)) / termValue;
    setTotalAmount(isNaN(result) ? "" : result.toFixed(2));
  }, [depositAmount, interestRate, term]);

  return (
    <div className={s.calc}>
      <div className={s.calcHeader}>
        Calculate the deposit amount before choosing a tariff
      </div>
      <div className={s.calcInputs}>
        <div className={s.calcInputWrapper}>
          <span>Deposit amount</span>
          <input
            type="text"
            value={depositAmount}
            onChange={(e) => handleInputChange(e, setDepositAmount)}
          />
        </div>
        <div className={s.calcSymbol}>
          <img src="/img/arihmetic/multiply.svg" alt="" />
        </div>
        <div className={s.calcInputWrapper}>
          <span>Interest on the tariff</span>
          <input
            type="text"
            value={interestRate}
            onChange={(e) => handleInputChange(e, setInterestRate)}
          />
        </div>
        <div className={s.calcSymbol}>
          <img src="/img/arihmetic/devide.svg" alt="" />
        </div>
        <div className={s.calcInputWrapper}>
          <span>Term</span>
          <input
            type="text"
            value={term}
            onChange={(e) => handleInputChange(e, setTerm)}
          />
        </div>
        <div className={s.calcSymbol}>
          <img src="/img/arihmetic/equal.svg" alt="" />
        </div>
        <div className={s.calcInputWrapper}>
          <span>The total amount</span>
          <input type="text" value={totalAmount} readOnly />
        </div>
      </div>
    </div>
  );
};
