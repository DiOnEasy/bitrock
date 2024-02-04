import s from "./dropdown.module.css";
import { useState } from "react";

export const DropdownComponent = ({
  dropdownOptions,
  activeOption,
  setActiveOption,
  dropdownHeader,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={s.dropdown}>
      <div onClick={() => setIsOpened(!isOpened)} className={s.dropdownHeader}>
        {activeOption !== null ? (
          <>
            <img src={dropdownOptions[activeOption].image} alt="" />
            <span>{dropdownOptions[activeOption].text}</span>
          </>
        ) : (
          <span>{dropdownHeader}</span>
        )}
        <span className={s.dropdownArrow}><img src="/img/notification-arrow.svg" alt="" /></span>
      </div>
      {isOpened && (
        <div className={s.dropdownOptions}>
          {dropdownOptions.map((option, index) => {
            return (
              <div
                onClick={() => {
                  setIsOpened(false);
                  setActiveOption(index);
                }}
                className={
                  activeOption == index
                    ? `${s.dropdownOption} ${s.active}`
                    : s.dropdownOption
                }
              >
                <img src={dropdownOptions[index].image} alt="" />{" "}
                <span>{dropdownOptions[index].text}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
