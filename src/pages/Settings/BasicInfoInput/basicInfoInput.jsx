import { useState } from "react";
import s from "./basicInfoInput.module.css";

export const BasicInfoInput = ({ value, icon, removeDisablingAbility }) => {
  const [inputValue, setInputValue] = useState(value);
  const [disabledInput, setDisabledInput] = useState(true)

  return (
    <div className={s.inputWrapper}>
      <input
        disabled={disabledInput}
        onChange={(e) => setInputValue(e.target.value)}
        defaultValue={value}
        type="text"
      />
      <span className={removeDisablingAbility && s.pointer} onClick={() =>{
        if(removeDisablingAbility){
            setDisabledInput(!disabledInput)
        }
      }}>
        <img src={icon} alt="" />
      </span>
    </div>
  );
};
