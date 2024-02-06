import s from "./dropdown.module.css";
import { useState } from "react";

export const DropdownComponent = ({
  dropdownOptions,
  activeOption,
  setActiveOption,
  dropdownHeader,
  style,
  setSorting,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={s.dropdown}>
      <div onClick={() => setIsOpened(!isOpened)} className={s.dropdownHeader}>
        {activeOption !== null ? (
          <>
            <div style={style}>
              <img src={dropdownOptions[activeOption].image} alt="" />
            </div>
            <span>{dropdownOptions[activeOption].text}</span>
          </>
        ) : (
          <span>{dropdownHeader}</span>
        )}
        <span className={s.dropdownArrow}>
          <img src="/img/notification-arrow.svg" alt="" />
        </span>
      </div>
      {isOpened && (
        <div className={s.dropdownOptions}>
          {dropdownOptions.map((option, index) => {
            return (
              <div
                onClick={() => {
                  setIsOpened(false);
                  setActiveOption(index);
                  setSorting(dropdownOptions[index].value)
                }}
                className={
                  activeOption == index
                    ? `${s.dropdownOption} ${s.active}`
                    : s.dropdownOption
                }
              >
                <div  style={style}>
                  <img src={dropdownOptions[index].image} alt="" />{" "}
                </div>
                <span>{dropdownOptions[index].text}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
