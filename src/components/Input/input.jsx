import { useState } from "react";
import s from "./input.module.css";

export const Input = ({
  inputStyle,
  placeholder,
  isPassword,

  type,
}) => {
  const [passwordValue, setPasswordValue] = useState("");
  const [inputType, setInputType] = useState(type);

  return (
    <div className={s.input}>
      <input
        style={inputStyle}
        type={inputType}
        className={s.input}
        onChange={(e) => {
          if (setPasswordValue) {
            setPasswordValue(e.target.value);
          }
        }}
        placeholder={placeholder}
      />
      {isPassword && passwordValue ? (
        <img
          onClick={() => {
            if (inputType == "text") {
              setInputType("password");
            } else if (inputType == "password") {
              setInputType("text");
            }
          }}
          src={inputType == "text" ? "/img/hide.svg" : "/img/show.svg"}
          alt=""
        />
      ) : null}
    </div>
  );
};
