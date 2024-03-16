import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FilmApi } from "../../api/film-api";

export function FilmDetail() {

    //Recuperer l'id
    const { id } = useParams();
    console.log(useParams())

    //Pour le detail du film
    // rlebhar : Pas besoin d'un tableau on ne veut qu'un seul show pour le détail
    const [filmDetail, setFilmDetail] = useState([]);

    async function loadFilmDetail() {
        const filmDetailResp = await FilmApi.fetchFilmDetailById(id);
        setFilmDetail(filmDetailResp);
    }

    useEffect(() => { loadFilmDetail() }, [])



    //Pour les recommandation du film
    // rlebhar : La déclaration des states tous en haut au début
    // rlebhar : Nommage éviter les raccourcis, on veut être le plus clair possible : setShowRecommendationList
    const [filmReco, setFilmReco] = useState([]);

    async function loadFilmReco() {
        const filmRecoResp = await FilmApi.fetchRecoById(id);
        setFilmReco(filmRecoResp);
    }

    useEffect(() => { loadFilmReco() }, [])



    return (
        <div>
            <h1>filmDetail page</h1>
        </div>
    )
}