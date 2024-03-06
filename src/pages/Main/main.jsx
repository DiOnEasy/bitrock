import { useState } from "react";
import { AuthForm } from "../../components/AuthForm/authForm";
import { Input } from "../../components/Input/input";
import s from "./main.module.css";
import { Link } from "react-router-dom";
export const Main = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [shown, setShown] = useState(true);
  return (
    <div className={s.main}>
      <div className={s.header}>
        <div className={s.logo}>
          <img src="/img/logo-main.svg" alt="" />
        </div>
        <div className={s.headerRight}>
          <div className={s.headerLanguage}>
            <img src="/img/russian-flag.svg" alt="" />
          </div>
          <div className={s.headerButtons}>
            <div className={s.buttonLogin}>
              <Link to="/login">
                <span>Log in</span>
              </Link>
            </div>
            <div className={s.buttonRegistration}>
              <Link to="/registration">
                <span>Registration</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={s.content}>
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
                type={shown ? "text" : "password"}
                placeholder="Password"
                isPassword
              />
              {passwordValue ? (
                <img
                  onClick={() => setShown(!shown)}
                  src={shown ? "/img/hide.svg" : "/img/show.svg"}
                  alt=""
                />
              ) : null}
            </p>
          </AuthForm>
        </div>
      </div>
    </div>
  );
};
