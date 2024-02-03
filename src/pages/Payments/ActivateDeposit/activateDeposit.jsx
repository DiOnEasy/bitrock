import { Link } from "react-router-dom";
import { DropdownComponent } from "../../../components/Dropdown/dropdown";
import s from "./activateDeposit.module.css";

export const ActivateDeposit = ({
  dropdownOptions,
  setActiveOption,
  activeOption,
  setAmounOfDeposit
}) => {
  return (
    <div className={s.activateDeposit}>
      <div className={s.activateDepositHeader}>
        <p className={s.activateDepositHeaderLeft}>
          <img src="/img/info.svg" alt="" />
          <p>
            Minimum <span>$10</span> - Maximum <span>$100</span>
          </p>
        </p>
        <p className={s.activateDepositHeaderRight}>
          <img src="/img/info.svg" alt="" />
          <p>
            Refinancing is <span>available</span>
          </p>
        </p>
      </div>
      <div className={s.activateDepositContent}>
        <div className={s.activateDepositForm}>
          <div>
            <p className={s.activateDepositLabel}>Currency</p>
            <p className={s.activateDepositSelect}>
              <DropdownComponent
                activeOption={activeOption}
                setActiveOption={setActiveOption}
                dropdownOptions={dropdownOptions}
              />
            </p>
          </div>
          <div>
            <p className={s.activateDepositLabel}>The amount of the deposit</p>
            <p className={s.activateDepositInput}>
              <input onChange={(e) => setAmounOfDeposit(e.target.value)} placeholder="0.0000000" type="number" />
              <span className={s.activateDepositInputCurrency}>{dropdownOptions[activeOption].value}</span>
            </p>
          </div>
          <Link to={'/payments/confirm-payment'} className={s.activateDepositButton}>
            <button>Open a deposit</button>
          </Link>
        </div>
        <div className={s.activateDepositText}>
          <div className={s.activateDepositPercentage}>
            <span>Annual income</span>
            <span>1.44% - 2.95%</span>
          </div>
          <div className={s.activateDepositItems}>
            <div className={s.activateDepositItem}>
              <p>Income per month</p>
              <p>$1000.00</p>
            </div>
            <div className={s.activateDepositItem}>
              <p>Income per year</p>
              <p>$1000.00</p>
            </div>
            <div className={s.activateDepositItem}>
              <p>Deposit period</p>
              <p>111 дней</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomOption = ({ option }) => {
  return (
    <div>
      <img src={option.icon} alt={option.label} />
      {option.label}
    </div>
  );
};
