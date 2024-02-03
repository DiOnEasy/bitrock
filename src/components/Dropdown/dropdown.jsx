import s from "./dropdown.module.css";
import { useState } from "react";

export const DropdownComponent = ({
  dropdownOptions,
  activeOption,
  setActiveOption,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  console.log(dropdownOptions);
  return (
    <div className={s.dropdown}>
      <div onClick={() => setIsOpened(true)} className={s.dropdownHeader}>
        <img src={dropdownOptions[activeOption].image} alt="" />{" "}
        <span>{dropdownOptions[activeOption].text}</span>
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
