import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TvShowApi } from "../../api/TvShow-api.js";

import { TvShowListOrganisms } from "../../components/Organisms/TvShowListOrganisms/TvShowListOrganisms.jsx";

export const DetailsTvShowPage = () => {

    // rlebhar : Si le tvShow est vide par defaut, ne pas mettre un objet vide dedans, sinon en cas de check, il sera évalué comme non null et non undefined.
    const [tvShow, setTvShow] = useState({})
    const [recommandedTvShowList, setRecommandedTvShowList] = useState([])
    const { id } = useParams();

    useEffect(() => {
        loadTvShowDetailById(id)
        loadTvShowRecommendationsById(id)
    }, [id])

    const loadTvShowDetailById = async (id) => {
        const response = await TvShowApi.fetchTvShowDetailById(id);
        setTvShow(response);
    }
    const loadTvShowRecommendationsById = async (id) => {
        const response = await TvShowApi.fetchTvShowRecommendationsById(id)
        setRecommandedTvShowList(response.results)
    }

    return <div style={{ backgroundImage: tvShow.poster_path }}>
        <h1>
            Detail
        </h1>
        {tvShow.name}
        <h1>
            Recommanded
        </h1>
        {/* rlebhar : list => tvShowList */ }
        <TvShowListOrganisms list={recommandedTvShowList} />
    </div>
}