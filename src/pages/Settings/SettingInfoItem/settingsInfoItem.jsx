import { useState } from "react";
import s from "./settingsInfoItem.module.css";

export const SettingsInfoItem = ({ title, children }) => {
  const [contentShown, setContentShown] = useState(false);
  return (
    <div className={s.settingsInfoItem}>
      <div
        onClick={() => setContentShown(!contentShown)}
        className={s.settingsInfoItemHeader}
      >
        <span>{title}</span>
        <span className={s.settingsInfoItemArrow}>
          <img className={contentShown ? s.arrowRotated : ''} src="/img/notification-arrow.svg" alt="" />
        </span>
      </div>
      {contentShown && (
        <div className={s.settingsInfoItemContent}>{children}</div>
      )}
    </div>
  );
};
