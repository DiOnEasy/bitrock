import { useState } from "react";
import { AuthForm } from "../../components/AuthForm/authForm";
import { Input } from "../../components/Input/input";
import s from "./registration.module.css";

export const Registration = () => {
    const [passwordValue, setPasswordValue] = useState("");
    const [shown, setShown] = useState(true)
  return (
    <div className={s.registration}>
      <AuthForm type="registration">
        <p>
          <Input type="text" placeholder="Login" />
        </p>
        <p>
          <Input type="email" placeholder="Email" />
        </p>
        <p className={s.password__input}>
        <Input
            setPasswordValue={setPasswordValue}
            type={shown ? 'text' : 'password'}
            placeholder="Password"
          />
          {passwordValue ? <img onClick={() => setShown(!shown)} src={shown ?  '/img/hide.svg' : "/img/show.svg"} alt="" /> : null}

        </p>
        <p>
          <Input type="number" placeholder="Confirmation code" />
        </p>
      </AuthForm>
    </div>
  );
};
