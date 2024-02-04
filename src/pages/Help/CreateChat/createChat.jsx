import { GreenButton } from "../../../components/GreenButton/greenButton";
import s from "./createChat.module.css";

export const CreateChat = () => {
  return (
    <div className={s.createChat}>
      <div className={s.createChatHeader}>
        Write down the details of the application
      </div>
      <div className={s.appDetails}>
        <div className={s.appSubject}>
          <p className={s.appSubjectHeader}>Application subject</p>
          <input className={s.appSubjectInput} type="text" />
        </div>
        <div className={s.appDesc}>
          <p className={s.appDescHeader}>Application subject</p>
          <textarea className={s.appDescInput}  type="text" />
        </div>
        <div className={s.appSubjectButton}>
          <GreenButton text={'Send'} />
        </div>
      </div>
    </div>
  );
};
