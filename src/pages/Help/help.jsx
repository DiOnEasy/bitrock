import { CreateChat } from "./CreateChat/createChat";
import { HelpItem } from "./HelpItem/helpItem";
import { helpData } from "./help.data";
import { useEffect, useState } from "react";
import s from "./help.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { Chat } from "./Chat/chat";
import { AppNum } from "./AppNum/appNum";

export const Help = () => {
  const location = useLocation();
  const [newChat, setNewChat] = useState(false);

  useEffect(() => {
    setNewChat("/help/new-chat" == location.pathname);
  }, [location.pathname]);
  const { id } = useParams();

  return (
    <>
      {(newChat || id) && <AppNum />}
      <div className={s.help}>
        {!newChat && !id && (
          <>
            <div className={s.helpHeader}>Help</div>
            <div className={s.helpText}>
              You can find answers to any questions or request help from a
              consultant.
            </div>
            <div className={s.helpItems}>
              <Link to="new-chat" className={s.newChat}>
                <div className={s.newChatImg}>
                  <img src="/img/help-item-icon.svg" alt="" />
                </div>
                <div className={s.newChatText}>Create a new chat</div>
              </Link>
              {helpData.map((item, index) => {
                return (
                  <Link to={"123"}>
                    <HelpItem
                      appNum={item.appNum}
                      appDate={item.appDate}
                      appStatus={item.appStatus}
                    />
                  </Link>
                );
              })}
            </div>
          </>
        )}
        {newChat && <CreateChat />}
        {!newChat && id && <Chat />}
      </div>
    </>
  );
};
