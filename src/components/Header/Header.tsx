import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { SearchBar } from '../SearchBar/SearchBar';
import s from './Header.module.css';

export const Header = (
    {showSearchBar, onSearchAction, onChangeAction, onFilterAction}: {
        showSearchBar: boolean | undefined
        // onSubmitSearch
        onSearchAction: (() => void) | undefined
        // onChangeSearch
        onChangeAction: ((value: string) => void) | undefined
        // onChangeFilter
        onFilterAction: ((value: string) => void) | undefined
    }
) => {
    // rlebhar : Pas besoin d'envoyer undefined a icon, simplement ne pas l'envoyer
    // rlebhar Auto closing tag pour la premiere SearchBar
    return (
        <header className={s.header}>
            <Link to={ROUTES.index}>
                <div className={s.logo}>
                    Show Advisor
                </div>
            </Link>
            { showSearchBar && (
                <div className={s.right}>
                    <SearchBar onSubmit={onSearchAction} onChange={onChangeAction} placeholder='Search a TV show you may like' icon={undefined}></SearchBar>
                    <SearchBar onSubmit={undefined} onChange={onFilterAction} placeholder='Filter the results' icon={undefined}/>
                </div>
            ) }
        </header>
    )
};