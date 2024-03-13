import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FilmApi } from "../../api/api-films";
import { ROUTES } from "../../routes/routes";


// rlebhar : Le dossier Page doit être en dessous de src/ au meme niveau que components
// Chaque Page doit être dans son dossier, car elle peut avoir du css accroché
// Le nom de cette page devrait plutot être FilmDetail car on pense a un élément de liste.
export function FilmItem() {
    // rlebhar : Pas besoin d'une liste on a un seul tv show ici
    const [film, setFilm] = useState([]);
    // rlebhar: Des efforts sur les nommages : tvShowRecommendationList ou filmRecommendationList
    const [filmReco, setFilmReco] = useState([]);
    const { id } = useParams();



    useEffect(() => {
        loadFilm(id);
        loadFilmReco(id);
    }, [id]);



     async function loadFilm(id) {
        const filmResp = await FilmApi.fetchAllbyid(id);

      setFilm(filmResp)
     }




    async function loadFilmReco(id) {
        const filmRecoResp = await FilmApi.fetchRecobyID(id);

        setFilmReco(filmRecoResp)
    }

// rlebhar : https://image.tmdb.org/t/p/ à extraire
// rlebhar : Faire un composant réutilisable pour la liste
     return (
        <div>
            

            <h1>{film.name}</h1>
             <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}/>
            <h3>{film.overview}</h3>
           

            <br />
            {filmReco.map((reco) => (
                <div key={reco.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${reco.poster_path}`} alt={reco.name} />
                    <Link to={ROUTES.FilmDetail + "/" + reco.id}>{reco.name}</Link>
                </div>
            ))}
        </div>
    );





}