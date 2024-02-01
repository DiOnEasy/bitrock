import { About } from "./About/about";
import { KnoweledgeItem } from "./KnoweledgeItem/knoweledgeItem";
import s from "./academy.module.css";
import { FAQ } from "./faq.data";

export const Academy = () => {
  return (
    <div className={s.academy}>
      <div className={s.knoweledge}>
        <p className={s.header}>Academy of Knoweledge</p>
        <div className={s.knoweledgeItems}>
          {FAQ.map((item, index) => {
            return (
              <KnoweledgeItem
                itemTitle={item.itemTitle}
                popupTitle={item.popupTitle}
                popupText={item.popupText}
              />
            );
          })}
        </div>
      </div>
      <div className={s.about}>
        <About />
      </div>
    </div>
  );
};
