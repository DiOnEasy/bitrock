import { useState } from "react";
import s from "./notificationsItem.module.css";

export const NotificationsItem = ({ date, title, text }) => {
  const [textShown, setTextShown] = useState(false);

  return (
    <div className={s.item}>
      <div onClick={() => setTextShown(!textShown)} className={s.itemTop}>
        <div className={s.itemHeader}>
          <p className={s.itemDate}>{date}</p>
          <p className={s.itemHeaderText}>{title}</p>
        </div>
        <div className={s.itemArrow}>
          <img
            className={textShown ? `${s.itemArrowActive}` : ""}
            src="img/notification-arrow.svg"
            alt=""
          />
        </div>
      </div>
      {textShown && <div className={s.itemText}>{text}</div>}
    </div>
  );
};
