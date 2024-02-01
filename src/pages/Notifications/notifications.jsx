import { NotificationsItem } from "./NotificationsItem/notificationsItem";
import { notificationsData } from "./notifications.data";
import s from "./notifications.module.css";

export const Notifications = () => {
  return (
    <div className={s.notifications}>
      <div className={s.notificationsHeader}>Notifications</div>
      <div className={s.notificationsItems}>
        {notificationsData.map((notification, index) => {
          return (
            <NotificationsItem
              key={index}
              date={notification.notificationDate}
              title={notification.notificationTitle}
              text={notification.notificationText}
            />
          );
        })}
      </div>
    </div>
  );
};
