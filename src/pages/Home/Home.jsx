import { useState } from 'react';
import { useEffect } from 'react';

import { fetchShows } from '../../api/show-api';
import { Header } from '../../components/Header/Header';
import { ShowList } from '../../components/ShowList/ShowList';


export function Home() {

    /**/
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetchShowsList();
    }, []);

    async function fetchShowsList() {
        const showsList = await fetchShows();
        setShows(showsList);
    }
    /**/

    return (
        <div>
            <Header/>
            <ShowList
                shows={shows}
            />
        </div>
    )

}
