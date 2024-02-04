import { AuthForm } from "../../components/AuthForm/authForm";
import s from "./login.module.css";
import { Input } from "../../components/Input/input";
import { useState } from "react";

export const Login = () => {

  return (
    <div className={s.login}>
      <AuthForm type="login">
        <Input type={"text"} placeholder="Login" />
        <Input
      
          type={"password"}
          placeholder="Password"
          isPassword
        />
      </AuthForm>
    </div>
  );
};
