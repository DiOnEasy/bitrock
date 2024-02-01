import { HelpItem } from "./HelpItem/helpItem";
import { helpData } from "./help.data";
import s from "./help.module.css";

export const Help = () => {
  return (
    <div className={s.help}>
      <div className={s.helpHeader}>Help</div>
      <div className={s.helpText}>
        You can find answers to any questions or request help from a consultant.
      </div>
      <div className={s.helpItems}>
        <div className={s.newChat}>
          <div className={s.newChatImg}>
            <img src="/img/help-item-icon.svg" alt="" />
          </div>
          <div className={s.newChatText}>Create a new chat</div>
        </div>
        {helpData.map((item, index) => {
          return (
            <HelpItem
              appNum={item.appNum}
              appDate={item.appDate}
              appStatus={item.appStatus}
            />
          );
        })}
      </div>
    </div>
  );
};
