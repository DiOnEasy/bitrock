import { Link } from "react-router-dom";
import s from "./header.module.css";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.statistics}>
        <span className={s.statisticsIcon}>
          <img src="/img/finance-icons/invested.svg" alt="" />
        </span>
        <span className={s.statisticsInfo}>
          <p>Invested</p>
          <p>$100</p>
        </span>
        <span className={s.statisticsArrow}>
          <img src="/img/finance-icons/arrow-right.svg" alt="" />
        </span>
        <span className={s.statisticsIcon}>
          <img src="/img/finance-icons/refinancing.svg" alt="" />
        </span>
        <span className={s.statisticsInfo}>
          <p>Refinancing</p>
          <p>$0</p>
        </span>
        <span className={s.statisticsArrow}>
          <img src="/img/finance-icons/arrow-right.svg" alt="" />
        </span>
        <span className={s.statisticsIcon}>
          <img src="/img/finance-icons/paid-out.svg" alt="" />
        </span>
        <span className={s.statisticsInfo}>
          <p>Paid out</p>
          <p>$0</p>
        </span>
      </div>
      <div className={s.headerButtons}>
        <div className={s.headerLanguage}>
          <img src="/img/russian-flag.svg" alt="" />
        </div>
        <div className={s.button}>
          <Link to="">
            <img src="/img/sidebar-icons/exit.svg" alt="" />
            <span>Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
