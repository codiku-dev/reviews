import { Link } from "react-router-dom"
import { ROUTES } from "../../../routes/routes.js"

// rlebhar : Pas besoin de la div 
export const TvShowListItemMolecules = ({ tvShow }) => {
    return <div >
        <Link to={ROUTES.detail + "/" + tvShow.id}>
            {tvShow.name}
        </Link>
    </div>

}