import s from "./greenButton.module.css";

export const GreenButton = ({text}) =>{
    return(
        <button className={s.greenButton}>{text}</button>
    )

}