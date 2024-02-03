import { useEffect, useState } from "react";
import { ChooseDeposit } from "./ChooseDeposit/chooseDeposit";
import { PaymentsAmount } from "./PaymentsAmount/paymentsAmount";

import s from "./payments.module.css";
import { useLocation } from "react-router-dom";
import { ActivateDeposit } from "./ActivateDeposit/activateDeposit";
import { ConfirmPaymentPage } from "./ConfirmPayment/confirmPayment";

export const Payments = () => {
  const location = useLocation();
  const [activateDepositPage, setActivateDepositPage] = useState(false);
  const [isConfirmPayment, setIsConfirmPayment] = useState(false);

  const [activeOption, setActiveOption] = useState(0);

  const [amountOfDeposit, setAmounOfDeposit] = useState(0)

  useEffect(() => {
    setActivateDepositPage("/payments/activate-deposit" == location.pathname);
    setIsConfirmPayment("/payments/confirm-payment" == location.pathname);
  }, [location.pathname]);

  return (
    <div className={s.payments}>
      <PaymentsAmount />
      {!activateDepositPage && !isConfirmPayment && <ChooseDeposit />}
      {activateDepositPage && !isConfirmPayment && (
        <ActivateDeposit
        setAmounOfDeposit={setAmounOfDeposit}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
          dropdownOptions={dropdownOptions}
        />
      )}
      {!activateDepositPage && isConfirmPayment && (
        <ConfirmPaymentPage
          currencyImg={dropdownOptions[activeOption].image}
          currencyValue={dropdownOptions[activeOption].value}
          currencyText={dropdownOptions[activeOption].text}
          amountOfDeposit={amountOfDeposit}
        />
      )}
    </div>
  );
};

const dropdownOptions = [
  {
    text: "Bitcoin - BTC",
    value: "BTC",
    image: "/img/dropdown/BTC.svg",
  },
  {
    text: "Ethereum - ETH",
    value: "ETH",
    image: "/img/dropdown/ETH.svg",
  },
  {
    text: "Ripple - XRP",
    value: "XRP",
    image: "/img/dropdown/XRP.svg",
  },
  {
    text: "Tether (TRC20) - USDT",
    value: "USDT",
    image: "/img/dropdown/USDT.svg",
  },
];
