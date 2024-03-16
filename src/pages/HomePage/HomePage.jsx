import { useEffect, useRef, useState } from "react"

import { TvShowApi } from "../../api/TvShow-api.js"

import { TvShowListOrganisms } from "../../components/Organisms/TvShowListOrganisms/TvShowListOrganisms.jsx"

export const HomePage = () => {

    const searchbar = useRef()

    const [tvShowList, setTvShowList] = useState([])
    const [filterQuery, setFilterQuery] = useState("")
    const filteredTvShowList = tvShowList.filter((tvShow) => tvShow.name.toLowerCase().includes(filterQuery.toLowerCase()))

    useEffect(() => {
        loadPopularTvShows()
    }, [])

    const loadPopularTvShows = async () => {
        const response = await TvShowApi.fetchPopularTvShows()
        setTvShowList(response.results)
    }
    const loadTvShowsByTitle = async (title) => {
        const response = await TvShowApi.fetchSearchTvShowsByTitle(title)
        setTvShowList(response.results)
    }

    const updateFilterQuery = (event) => {
        setFilterQuery(event.target.value)
    }
    // rlebhar : Cette fonction me semble mal nommé, ne fait elle qu'update la search query, submitSearch peut être ?
    // rlebhar : Si tu souhaites utiliser un formulaire, tu n'as pas besoin de ref, 
    // tu as la possbiblité de récupérer les data de toutes les inputs située ton formulaire via ton event.
    /*
    const form = new FormData(event.target);
    console.log(form.get('query')); // Attention il faut ajouterun name="query" sur ton input
    */
    const updateSearchQuery = (event) => {
        event.preventDefault()
        console.log(searchbar.current.value)
        let value = searchbar.current.value
        if (value) {
            loadTvShowsByTitle(searchbar.current.value)
            return
        }
        // rlebhar : pourquoi refetch les popular quand on fait une recherche ? En principe ce n'est que la premiere fois au chargement
        loadPopularTvShows()
    }

    return <div>
        <h1>
            HomePage
        </h1>
        <div>
            <form onSubmit={updateSearchQuery}>
                <input ref={searchbar} type="text" placeholder="Search..." />
            </form>
        </div>
        <div>
            <input type="text" onChange={updateFilterQuery} placeholder="Filter..." />
        </div>
        {/* rlebhar : list => tvShowList */}
        <TvShowListOrganisms list={filteredTvShowList} />
    </div>
}