import Icon from "../../assets/icons8-television-64.png";
import s from "./Header.module.css";

export function Header() {
    return (
        <div className={s.headerStyle}>
            <div className={s.logoStyle}>
                <img src={Icon} alt="Icon" className={s.iconStyle} />
                <p>Watowatch</p>
            </div>
            <form className={s.formStyle}>
                <input type="text" name="searchBar" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}