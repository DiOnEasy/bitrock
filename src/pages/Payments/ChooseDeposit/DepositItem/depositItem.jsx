import s from "./depositItem.module.css";
import { Link } from "react-router-dom";

export const DepositItem = ({
  header,
  text,
  from,
  to,
  depositItemImgUrl,
  setSelectedDeposit,
  index,
  selectedDeposit,
}) => {
  return (
    <div
      onClick={() => setSelectedDeposit(index)}
      className={s.depositItemWrapper}
    >
      <div className={s.depositItem}>
        <div className={s.depositItemHeader}>
          <div className={s.depositItemImg}>
            <img src={depositItemImgUrl} alt="" />
          </div>
          <span>{header}</span>
        </div>
        <div className={s.depositItemRange}>
          From ${from} to ${to}
        </div>
        <div className={s.depositItemText}>{text}</div>
        {selectedDeposit == index ? (
          <Link to='activate-deposit' className={s.depositItemButton}>
            <button>Choose a deposit</button>
          </Link>
        ): null}
      </div>
    </div>
  );
};
