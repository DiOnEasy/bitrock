import { Link } from "react-router-dom";
import s from "./creditCardPopup.module.css";
import InputMask from "react-input-mask";
import { useState } from "react";

export const CreditCardPopup = ({setPopupOpened}) => {

  return (
    <div className={s.popupWrapper}>
      <div className={s.popup}>
        <div onClick={() => setPopupOpened(false)} className={s.close}>
          <img src="/img/close.svg" alt="" />
        </div>
        <div className={s.header}>
          Enter the details of the card you want to add
        </div>
        <div className={s.inputs}>
          <InputMask
            placeholder="Card number"
            mask="9999 9999 9999 9999"
            className={s.cardNumber}
          ></InputMask>
          <InputMask
            placeholder="Expiration Date"
            mask="99/99"
            className={s.expirationDate}
          ></InputMask>
          <InputMask
            placeholder="CVV/CVC"
            mask="999"
            className={s.cvv}
          ></InputMask>
        </div>
        <Link className={s.link}>Submit</Link>
      </div>
    </div>
  );
};
