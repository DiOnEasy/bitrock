import s from "./input.module.css";

export const Input = ({ placeholder, type, setPasswordValue }) => {
  return (
    <input
      onChange={(e) => {
        if (setPasswordValue) {
          setPasswordValue(e.target.value);
        }
      }}
      type={type}
      placeholder={placeholder}
    />
  );
};
