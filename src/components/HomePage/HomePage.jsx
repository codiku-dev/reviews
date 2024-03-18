import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FilmApi } from "../../assets/api/film-api";
import { ROUTES } from "../../routes/routes";

export function HomePage() {
    
    const [filmsList, setFilmsList] = useState([]);
    //rlebhar : Nommage : "rechercher" n'est vraiment pas un bon nom pour une liste de film. Et pas de francais.
    //rlebhar : Il n'a s'agit pas d'un tableau mais d'une string, il s'agit surement de "searchQuery" ou "searchText" ou “searchTerm"
    const [rechercher, setRechercher] = useState([])
    
    useEffect(() => {
        loadFilmsList();
    }, []);

    // useEffect(() => {
    //     loadRechercher();
    // }, [rechercher]);

    // rlebhar : loadPopularTvShowList
    async function loadFilmsList() {
        const filmListResp = await FilmApi.fetchAllFilms();
        setFilmsList(filmListResp);
    }

    async function loadRechercher() {
        const rechercherResp = await FilmApi.fetchTitle();
        setFilmsList(rechercherResp);
    }

    // rlebhar : https://image.tmdb.org/t/p/ à sortir
    return (
        <div>
            <h1>HomePage</h1>
            <input type="text" placeholder="Rechercher un film..." value={rechercher} onChange={(e) => setRechercher(e.target.value)} />

            {/* rlebhar : composant FilmList  */}
            {filmsList.map((film) => (
                <div key={film.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} />
                    <Link to={ROUTES.filmsDetail + "/" + film.id}>{film.name}</Link>
                </div>
            ))}
        </div>
    );
}
