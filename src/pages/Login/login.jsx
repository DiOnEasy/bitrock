import { AuthForm } from "../../components/AuthForm/authForm";
import s from "./login.module.css";
import { Input } from "../../components/Input/input";
import { useState } from "react";

export const Login = () => {
  const [passwordValue, setPasswordValue] = useState("");
    const [shown, setShown] = useState(true)

  return (
    <div className={s.login}>
      <AuthForm type="login">
        <p>
          <Input type="text" placeholder="Login" />
        </p>
        <p className={s.password__input}>
          <Input
            setPasswordValue={setPasswordValue}
            type={shown ? 'text' : 'password'}
            placeholder="Password"
          />
          {passwordValue ? <img onClick={() => setShown(!shown)} src={shown ?  '/img/hide.svg' : "/img/show.svg"} alt="" /> : null}
        </p>
      </AuthForm>
    </div>
  );
};
