import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { theMovieDB } from '../Api/api';
import { ROUTES } from '../Routes/routes';

// rlebhar : Mettre les pages dans un dossier qui porte le même nom, car si plus tard on a un fichier de style il ne seront pas ensemble.
export function HomePage() {
    const [tvShowList, setTVShowList] = useState([]);

    useEffect(() => {
        loadTVShowList();
    }, [])

    async function loadTVShowList() {
        const tvShowListResp = await theMovieDB.fetchPopularShow();
        setTVShowList(tvShowListResp.results);
        console.log("***", tvShowList);
    }

    // rlebhar : https://image.tmdb.org/t/p/ a externaliser vers config/config.js

    return (
        <div>
            {
                tvShowList.map((show) => {
                    return (
                        <div key={show.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
                            {/* <Card key={show.id} show={show} /> */}
                            <Link to={ROUTES.showDetailgit  + "/" + show.id}>{show.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}