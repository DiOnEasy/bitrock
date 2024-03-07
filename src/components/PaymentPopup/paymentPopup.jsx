import { useState } from "react";
import { DropdownComponent } from "../Dropdown/dropdown";
import s from "./paymentPopup.module.css";
import { Link } from "react-router-dom";

export const PaymentPopup = ({setPopupOpened, popupData}) => {
  const [activeOption, setActiveOption] = useState(0);

  return (
    <div className={s.popupWrapper}>
      <div className={s.popup}>
        <div onClick={() => setPopupOpened(false)} className={s.close}>
          <img src="/img/close.svg" alt="" />
        </div>
        <div className={s.header}>{popupData.header}</div>
        <div className={s.inputs}>
          <div className={s.dropdown}>
            <DropdownComponent
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              activeOption={activeOption}
              setActiveOption={setActiveOption}
              dropdownOptions={dropdownOptions}
            />
          </div>
          <p className={s.label}>{popupData.inputLabel}</p>
          <input className={s.amountInput} type="number" />
          <Link className={s.link}>Submit</Link>
        </div>
      </div>
    </div>
  );
};

const dropdownOptions = [
  {
    text: "WebMoney",
    value: "WebMoney",
    image: "/img/dropdown/webmoney.png",
  },
  {
    text: "Scrill",
    value: "Scrill",
    image: "/img/dropdown/scrill.png",
  },
  {
    text: "Visa",
    value: "Visa",
    image: "/img/dropdown/visa.png",
  },
];
