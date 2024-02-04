import { Routes, Route, Router, Navigate } from "react-router-dom";

import {
  Academy,
  Help,
  Login,
  Notifications,
  Payments,
  Registration,
  Settings,
  Statistics,
  Transactions,
} from "./pages/index";
import { SideBar } from "./components/SideBar/sideBar";
import s from "./App.module.css";
import { Header } from "./components/Header/header";
function App() {
  return (
    <>
      <div className={s.app}>
        {window.location.pathname !== ("/login" || "/registration") ? (
          <SideBar />
        ) : null}
        <div className={s.appContent}>
          {window.location.pathname !== ("/login" || "/registration") ? (
            <Header />
          ) : null}
          <Routes>
            <Route path="/" element={<Navigate to="/payments" />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/payments/activate-deposit" element={<Payments />} />
            <Route path="/payments/confirm-payment" element={<Payments />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/help/:id?" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/transactions" element={<Transactions/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
