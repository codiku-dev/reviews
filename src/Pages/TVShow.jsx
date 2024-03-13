import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { theMovieDB } from '../Api/api';

// rlebhar : nommage TVShowPage
export function TVShow() {

    // rlebhar: Nommage  on a besoin que d'un tv show courant (ex currentTvShow ) 
    const [tvShowById, setTvShowById] = useState([]);
    // rlebhar : Nommage tvShowRecommendationList
    const [tvShowReco, setTvShowReco] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        loadTvShowById(id);
        loadTvShowReco(id)
    }, [id])

    // 
    async function loadTvShowById(id) {
        const tvShowByIdResp = await theMovieDB.fetchShowById(id);
        setTvShowById(tvShowByIdResp.results);
        console.log("***", tvShowById);
    }

    // Nommage : loadTvShowRecommendationList
    async function loadTvShowReco(id) {
        const tvShowRecoResp = await theMovieDB.fetchRecommendation(id);
        setTvShowReco(tvShowRecoResp.results);
        console.log("***", tvShowReco);
    }

    return (
        <div>
            {JSON.stringify(tvShowById)}{JSON.stringify(tvShowReco)}
        </div>
    );
}