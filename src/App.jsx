import { Routes, Route, Router } from "react-router-dom";
import { Login, Payments, Registration } from "./pages/index";
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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
