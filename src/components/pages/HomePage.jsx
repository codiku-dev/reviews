import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FilmApi } from "../../api/api-films"
import { ROUTES } from "../../routes/routes"
import { SearchBar } from "../Research/Research"


export function HomePage() {

    // rlebhar : Pas de pascale case 
    const [FilmList, setListFilms] = useState([])


    useEffect(() => {
        loadFilmList();

    }, [

    ]
    )



    async function loadFilmList() {
        const filmListResp = await FilmApi.fetchPopulartvShows();
        setListFilms(filmListResp);
    }

    async function searchFilms(query) {
        // rlebhar : searchResp => movieListResp
        const searchResp = await FilmApi.fecthAllFilmbytitle(query);
        setListFilms(searchResp);
    }
      // rlebhar :  externaliser https://image.tmdb.org/t/p/
    return (
        <div>
            <h1>Home Page</h1>
            <SearchBar onSearch={searchFilms} />
            {FilmList.map((film) => (
                <div key={film.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.name} />
                    <Link to={ROUTES.FilmDetail + "/" + film.id}>{film.name}</Link>
                </div>
            ))}
        </div>
    );

}