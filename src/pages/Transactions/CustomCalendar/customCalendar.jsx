import { useEffect, useState } from "react";
import "./calendar.css";
import s from "./customCalendar.module.css";
import Calendar from "react-calendar";

export const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [calendarShown, setCalendarShown] = useState(true);

  useEffect( () =>{
    setCalendarShown(!calendarShown)
  }, [date])
  return (
    <div className={s.customCalendarWrapper}>
      <div
        onClick={() => setCalendarShown(!calendarShown)}
        className={s.customCalendar}
      >
        <span>from</span>
        <span>{date.toLocaleDateString("ru-Ru")}</span>
        <span>
          <img src="/img/dropdown/calendar.svg" alt="" />
        </span>
      </div>

      <Calendar
        className={!calendarShown ? s.calendarHidden : ""}
        nextLabel={<img src="/img/dropdown/next.svg" />}
        prevLabel={<img src="/img/dropdown/prev.svg" />}
        locale="en-US"
        onChange={setDate}
        value={date}
      />
    </div>
  );
};
