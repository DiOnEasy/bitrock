import s from "./helpItem.module.css";

export const HelpItem = ({ appNum, appDate, appStatus }) => {
  return (
    <div className={s.helpItem}>
      <div className={s.helpItemImg}>
        <img src="/img/help-item-icon.svg" alt="" />
      </div>
      <div className={s.helpItemData}>
        <p className={s.appNum}>Ap. number [{appNum}]</p>
        <p className={s.appDate}>{appDate}</p>
      </div>
      <div className={s.appStatus}>
        <p>Application status</p>
        <p>{appStatus}</p>
      </div>
    </div>
  );
};
