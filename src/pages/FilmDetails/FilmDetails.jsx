import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { APIFilm } from "../../api/APIFilm"
import { FilmList } from "../../components/FilmList/FilmList"
import { Header } from "../../components/Header/Header"
import { SpinLoading } from "../../components/SpinLoading/SpinLoading"
import s from "./FilmDetails.module.css"

export function FilmDetails() {

    const [filmDetails, setFilmDetails] = useState([])
    const [relatedFilms, setRelatedFilms] = useState([])
    const { id } = useParams()
    // rlebhar : à mettre dans un fichier de config
    const poster = "https://image.tmdb.org/t/p/w300/" + filmDetails.poster_path

    useEffect(() => {
        fetchFilmDetails(id)
        // rlebhar, choisir un terme, related or recommendations
        fetchRelatedFilms(id)
    }, [id])

    async function fetchFilmDetails(id) {
        const details = await APIFilm.fetchFilmByID(id)
        setFilmDetails(details)
    }

    async function fetchRelatedFilms(id) {
        // rlebhar : Nommage , relatedFilms
        const related = await APIFilm.fetchFilmRecommendationsByID(id)
        // rlebhar, pas indiqué dans les specs, on veut tout
        const compressedRelated = related.slice(0, 6)
        setRelatedFilms(compressedRelated)
    }

    // rlebhar: supprimer les logs
    console.log(filmDetails)
    console.log(relatedFilms)

    if (!filmDetails) {
        // rlebhar : pas besoin de fragments 
        return (
            <>
                <SpinLoading />
            </>
        )
    } else {
        return (
            <>
                <Header />
                <div className={s.presentation}>
                    <img src={poster} alt="poster" />
                    <div>
                        <h1>{filmDetails.original_name}</h1>
                        <h3 style={{ color: Math.round(filmDetails.vote_average) < 3 ? "red" : Math.round(filmDetails.vote_average) < 6 ? "orange" : "green" }}>Vote rate {Math.round(filmDetails.vote_average)} </h3>
                        <p>{filmDetails.first_air_date}</p>
                        <p>{filmDetails.overview}</p>
                    </div>
                </div >
                <FilmList listFilm={relatedFilms} />
            </>
        )
    }

}
