import { FilmCard } from "../FilmCard/FilmCard"
import s from "./FilmList.module.css"

// rlebhar : Ce composant n'a besoin que de recevoir une unique liste et de l'afficher, ça doit être un dumb component
// seconde props pas utile
export function FilmList({ listFilm, filteredFilmList }) {

    return (

        <>
            <div className={s.style}>
                {
                    listFilm.map(item => (
                        <>
                            <FilmCard key={item.id} item={item}></FilmCard>
                        </>
                    ))}
            </div>
        </>
    )
}