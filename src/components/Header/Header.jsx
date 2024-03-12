import { PiTelevisionThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export function Header() {
    return (
        // rlebhar : fragment inutile
        <>
            <Link to={ROUTES.homePage}> <PiTelevisionThin /> <h2>CinéFan</h2></Link>
        </>
    )
}