import { useState } from "react";
import s from "./knoweledge.module.css";
import React from "react";

export const KnoweledgeItem = ({ itemTitle, popupTitle, popupText }) => {
  const [popupShown, setPopupShown] = useState(false);
  return (
    <>
      <div onClick={() => setPopupShown(true)} className={s.item}>
        <div className={s.itemImg}>
          <img src="/img/question-mark.svg" alt="" />
        </div>
        <div className={s.itemTitle}>{itemTitle}</div>
      </div>

      {popupShown && (
        <KnoweledgePopup
          setPopupShown={setPopupShown}
          popupTitle={popupTitle}
          popupText={popupText}
        />
      )}
    </>
  );
};

const KnoweledgePopup = ({ popupTitle, popupText, setPopupShown }) => {
  return (
    <div className={s.overlay}>
      <div className={s.popup}>
        <div className={s.closeButton}>
          <img
            onClick={() => setPopupShown(false)}
            src="/img/close.svg"
            alt=""
          />
        </div>
        <div className={s.popupTitle}>
          <div className={s.popupImg}>
            <img src="/img/question-mark.svg" alt="" />
          </div>
          <span>{popupTitle}</span>
        </div>
        <div className={s.popupText}>{popupText.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== popupText.split('\n').length - 1 && <br />}
    </React.Fragment>
  ))}</div>
      </div>
    </div>
  );
};
