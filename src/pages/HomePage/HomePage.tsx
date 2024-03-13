import { useEffect, useState } from 'react';
import { MovieAPI } from '../../api/movie-api';
import { CardList } from '../../components/CardList/CardList';
import { Header } from '../../components/Header/Header';
import { Show } from '../../types/show';
import s from './HomePage.module.css';

export const HomePage = () => {
    const [shows, setShows] = useState<Show[]>([]);
    // rlebhar : Comme expliqué lors du cours, on aura pas besoin d'un state car on utilisera le onKeyDown sur l'input ( et on appelera un callback uniquement s'il s'agit
    // de la touche Enter)
    // On aura donc accès a la valeur de l'input et on pourrait tout de suite soumettre la recherche sans passer par un state
    const [searchString, setSearchString] = useState<string>('');
    const [filterString, setFilterString] = useState<string>('');

    useEffect(() => {
        loadPopularShows();
    }, []);

    const loadPopularShows = async () => {
        const shows = (await MovieAPI.fetchPopularShows()) as Show[];
        setShows(shows);
    }

    const loadShowsByTitle = async () => {
        const showsByTitle = (await MovieAPI.fetchShowByTitle(searchString));
        setShows(showsByTitle);
    }

    const updateShows = () => {
        if (searchString.length < 1) {
            setShows([]); // Virer quand loader
            loadPopularShows();
            return;
        }

        setShows([]);
        loadShowsByTitle();
    }

    const updateQuery = (value: string) => {
        setSearchString(value.toLowerCase());
    }

    const updateFilter = (value: string) => {
        setFilterString(value.toLowerCase());
    }


    // rlebhar : Les props callback onSubmitSearch ,on onChangeSearch
    // onFilterAction est plutot on onChangeFilter
    // showSearchBar={true} peut être shortcuté par showSearchBar , de plus les boolean sont par convention préfix par is,has,are,should ...
    // hasSearchBar maybe.
    // <Header/> peut être auto closed, same pour CardList 
    // Et très bien d'avoir rendu générique la CardList
    return (
        <div className={s.homeWrapper}>
            <Header onSearchAction={updateShows} onChangeAction={updateQuery} onFilterAction={updateFilter} showSearchBar={true}></Header>
            <CardList data={shows} horizontal={false} oneLine={false} filter={filterString}></CardList>
        </div>
    );
}