import { Link } from "react-router-dom"
import { ROUTES } from "../../routes/routes"
import s from "./FilmCard.module.css"

export function FilmCard({ item }) {
    //rlebhar : url a déplacer dans un fichier de config/config.js par exemple
   
    const imagePath = "https://image.tmdb.org/t/p/original/" + item.poster_path

    return (
        
        
        <div className={s.style}>
            <div className="card" >
                <img src={imagePath} alt="" />
                <div className="card-body">
                    <Link to={ROUTES.detail + "/" + item.id}><h4 className="card-title">{item.original_name}</h4></Link>
                </div>
            </div>
        </div>

    )
}