import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieApi } from "../../assets/API/movie-api";
import { ROUTES } from "../../routes/routes";

export function Home(){

    // rlebhar : Nommage setMovies
    const [movies, SetMovies] = useState([]);

    async function loadMovies(){
        const moviesResp = await MovieApi.fetchPopularMovies();
        SetMovies(moviesResp);
    }

    useEffect(() => {loadMovies()},[])

    // rlebhar : Découper, on veut un composant de liste réutilisable
    return movies.map((movie) => {
        return (
            
            <div key={movie.id}>
            <Link to={ROUTES.detail + "/" + movie.id}>{movie.name}</Link>
            </div>
        )
    }
    )
}