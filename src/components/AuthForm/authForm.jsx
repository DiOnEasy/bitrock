import { Input } from "../Input/input";
import s from "./authForm.module.css";
import { Link } from "react-router-dom";
import { Children } from "react";

export const AuthForm = ({ type, children }) => {
  return (
    <div className={s.form}>
      <div className={s.logo}>
        <img src="/img/logo.svg" alt="" />
      </div>
      <div className={s.header}>
        {type === "login" ? "Log In" : "Registration"}
      </div>
      <form className={s.form__wrapper} action="">
        <div className={s.inputs}>{children}</div>
        <div className={s.button}>
          <button> {type === "login" ? "Log In" : "Registration"}</button>
        </div>
      </form>
      <div className={s.switch}>
        {type === "login" ? (
          <p>
            Don't you have an account yet? Go to <Link to="/registration">Register</Link>
          </p>
        ) : (
          <p>
            Do you already have an account? Go to <Link to="/login">Log In</Link>
          </p>
        )}
      </div>
    </div>
  );
};
