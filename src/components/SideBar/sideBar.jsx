import { Link, useLocation } from "react-router-dom";
import s from "./sideBar.module.css";
import { useEffect, useState } from "react";

export const SideBar = () => {
  const links = [
    { text: "Statistics", link: "statistics" },
    { text: "Payments", link: "payments" },
    { text: "Transactions", link: "transactions" },
    { text: "Settings", link: "settings" },
    { text: "Аcademy", link: "academy" },
    { text: "Help", link: "help" },
    { text: "Notifications", link: "notifications" },
  ];

  const location = useLocation();

  const [sidebarOpened, setSidebarOpened] = useState(false);

  const [isTablet, setIsTablet] = useState(null);
  const handleResize = () => {
    setIsTablet(window.innerWidth <= 1280);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={s.sidebarWrapper}>
      {isTablet && (
        <div
          onClick={() => setSidebarOpened(!sidebarOpened)}
          className={sidebarOpened ? `${s.burger} ${s.burgerActive}` : s.burger}
        >
          {sidebarOpened ? (
            <img src="/img/close.svg" alt="" />
          ) : (
            <img src="/img/burger.svg" alt="" />
          )}
        </div>
      )}

      <div
        className={
          !sidebarOpened ? ` ${s.sidebarClosed} ${s.sidebar}` : s.sidebar
        }
      >
        <div className={s.logo}>
          <img src="/img/logo-white.svg" alt="" />
        </div>
        <div className={s.links}>
          {links.map((link, index) => {
            const isActive = `${link.link}` == location.pathname.split("/")[1];
            return (
              <Link
                onClick={() => setSidebarOpened(!sidebarOpened)}
                className={isActive ? s.activeLink : ""}
                key={index}
                to={`/${link.link}`}
              >
                <img src={`/img/sidebar-icons/link-${index + 1}.svg`} alt="" />
                {link.text}
              </Link>
            );
          })}
        </div>
        <div className={s.profile}>
          <div className={s.profile__img}>
            <img src="" alt="" />
          </div>
          <p className={s.profile__email}>mail@mail.com</p>
          <button className={s.profile__button}>
            <img src="/img/sidebar-icons/exit.svg" alt="" />
            <span>Exit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
