import { Link, useLocation } from "react-router-dom";
import s from "./sideBar.module.css";

export const SideBar = () => {
  const links = [
    { text: "Statistics", link: "statistics" },
    { text: "Payments", link: "" },
    { text: "Transactions", link: "transactions" },
    { text: "Settings", link: "settings" },
    { text: "Аcademy", link: "academy" },
    { text: "Help", link: "help" },
    { text: "Notifications", link: "notifications" },
  ];

  const location = useLocation()

  return (
    <div className={s.sidebar}>
      <div className={s.logo}>
        <img src="/img/logo-white.svg" alt="" />
      </div>
      <div className={s.links}>
        {links.map((link, index) => {
         const isActive = `/${link.link}` == location.pathname;
          return (
            <Link className={isActive ? s.activeLink : ''} key={index} to={`/${link.link}`}>
              <img src={`/img/sidebar-icons/link-${index + 1}.svg`} alt="" />
              {link.text}
            </Link>
          );
        })}
      </div>
      <div className={s.profile}>
        <div className={s.profile__img}><img src="" alt="" /></div>
        <p className={s.profile__email}>mail@mail.com</p>
        <button className={s.profile__button}><img src="/img/sidebar-icons/exit.svg" alt="" /><span>Exit</span></button>
      </div>
    </div>
  );
};
