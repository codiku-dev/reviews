import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import AccueilCSS from './Accueil.module.css';

import { ApiMovieDB } from '../../api/ApiMovieDB';
import { Card } from '../../components/card/Card';
import { Loader } from '../../components/loader/Loader';
import { Navbar } from '../../components/navbar/Navbar';
import { Search } from '../../components/search/Search';
//rlebhar : Attention tout en anglais, les dossier (accueil et les composant aussi)
export function Accueil() {
    const [search, setSearch] = useState('');
    // rlebhar camel case et nommage vraiment pas ok
    const [LesItems, setLesItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [bgImage, setBgImage] = useState('');

    async function fetchPopularShows() {
        //rlebhar : Si let , c'est pour modifier ensuite ce qui n'est pas le cas, donc const
        let items = await ApiMovieDB.GetPopularShows();
        setLesItems(items.results);
        setBgImage(items.results[0].backdrop_path);
        setIsLoading(false);
    }
    async function fetchSearch() {
        let items = await ApiMovieDB.GetSearchShows(search);
        setLesItems(items.results);
        setBgImage(items.results[0].backdrop_path);
        setIsLoading(false);
    }

    // rlebhar: Attention au spec, on veut une recherche seulement quand on press enter par à chaque lettre tappés,
    //  pour ne pas saturer le back
   
    const debouncedSearch = useDebounce(() => {
        setIsLoading(true);
         // rlebhar : le loading va passer de true a false sans attndre tes fetch car ils ne sont pas "await"
        if (search === '') {
            fetchPopularShows();
        } else {
            fetchSearch();
        }

        setIsLoading(false);
    }, 500);


    useEffect(() => {
        setIsLoading(true);
        fetchPopularShows();
    }, [])

    useEffect(() => {
        debouncedSearch();
    }, [search])

    // rlebhar : https://image.tmdb.org/t/p/original à externaliser
    // rlebhar import de style à rendre atomique
    // rlebhar : {isLoading && <Loader />} c'est bien mais dans la spec on ne veut rien afficher du tout dans la page tant qu'on a pas loadé les data
    // rlebhar : Un composant CardList pourrait être sympa
    return (
        <div className={AccueilCSS.accueil} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${bgImage})` }}>
            <Navbar />
            <Search setSearch={setSearch} />
            <div className={AccueilCSS.liste}>
                {isLoading && <Loader />}
                {LesItems.map((item, index) => (
                    <Card key={index} infos={item} />
                ))}
            </div>
        </div>
    )
}