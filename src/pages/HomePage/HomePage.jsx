import { FilmApi } from "../../api/film-api"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { Route, Routes, BrowserRouter } from "react-router-dom"

export function Homepage() {

    const [filmList, setFilmList] = useState([]);

    async function loadFilmList() {
        const filmListResp = await FilmApi.fetchAllFilmPopu();
        setFilmList(filmListResp);
    }

    useEffect(() => { loadFilmList() }, [])

    return filmList.map((film) => {
        return (
            <div key={film.id}>
                <Link to={ROUTES.FilmDetail + "/" + film.id}>{film.name}</Link>
            </div>
        )
    })
}