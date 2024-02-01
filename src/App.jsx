import { Routes, Route, Router } from "react-router-dom";
import {
  Academy,
  Help,
  Login,
  Notifications,
  Payments,
  Registration,
  Statistics,
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
            <Route path="/" element={<Payments />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/help/:id?" element={<Help />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
