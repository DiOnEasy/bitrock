import s from "./greenButton.module.css";

export const GreenButton = ({ text, hanleClick }) => {
  return (
    <button
      onClick={() => {
        if (hanleClick) {
          hanleClick();
        }
      }}
      className={s.greenButton}
    >
      {text}
    </button>
  );
};
