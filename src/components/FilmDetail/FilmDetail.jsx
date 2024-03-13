import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FilmApi } from "../../assets/api/film-api";
import { ROUTES } from "../../routes/routes";

export function FilmDetail() {
    // rlebhar: Pourquoi un tableau ? On a besoin que du tv show courant
    const [film, setfilm] = useState([]);
    // rlebhar: Nommage, recommendationList setRecommendationList
    const [reco, setReco] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        loadFilm(id);
        loadReco(id);
    }, [id]);



    // rlebhar : loadCurrentTvShow
    async function loadFilm(id) {
        const filmResp = await FilmApi.fetchFilm(id);
        setfilm(filmResp);
    }

    // rlebhar : loadRecommendationList
    async function loadReco(id) {
        const recoResp = await FilmApi.fetchReco(id);
        setReco(recoResp);
    }

    // rlebhar: https://image.tmdb.org/t/p/ a externaliser vers /config/config.js
    return (
        <>
            <div>
                <h1>{film.name}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} />
                <text>{film.overview}</text>
            </div>
            {reco.map((recomodation) => (
                <div key={recomodation.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${recomodation.backdrop_path}`} />
                    <Link to={ROUTES.filmsDetail + "/" + recomodation.id}>{recomodation.name}</Link>
                </div>

            ))}
        </>
    );
}