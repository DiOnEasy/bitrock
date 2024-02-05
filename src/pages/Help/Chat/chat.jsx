import { GreenButton } from "../../../components/GreenButton/greenButton";
import s from "./chat.module.css";
import { useRef, useEffect, useState } from "react";

export const Chat = () => {
  const scrollRef = useRef(null);

  const [fileName, setFileName] = useState(null);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, []);

  return (
    <div className={s.chat}>
      <div ref={scrollRef} className={s.chatMessages}>
        <div className={s.message}>
          <div className={s.messageImg}>
            <img src="" alt="" />
          </div>
          <div className={s.messageText}>Сообщение автора или 2 человека</div>
        </div>
        <div className={s.ownerMessage}>
          <div className={s.ownerMessageImg}>
            <img src="" alt="" />
          </div>
          <div className={s.ownerMessageText}>
            Сообщение автора или 2 человека
          </div>
        </div>
      </div>
      
       
     
      <div className={s.inputs}>
        <input
          className={s.messagesInput}
          placeholder="Write a message"
          type="text"
        />
        <div className={s.fileInputWrapper}>
          {fileName ? (
            <p className={s.fileInputText}>
              <span>{fileName}</span>
            </p>
          ) : (
            <p className={s.fileInputText}>
              <span>Attach a file</span>
              <img src="/img/attach-file-icon.svg" alt="" />
            </p>
          )}
          <p className={s.fileInputTextMobile}>
            <img src="/img/attach-file-icon.svg" alt="" />
          </p>
          <input
            onChange={(e) => {
              const file = e.target.files[0];
              setFileName(file.name);
            }}
            className={s.fileInput}
            type="file"
          />
        </div>
      </div>
      {fileName ? (
          <p className={s.fileNameMobile}>
            {fileName}
          </p>
        ) : null}
      <div>
        <div className={s.messagesButton}>
          <GreenButton text={"Send"} />
        </div>
      </div>
    </div>
  );
};
