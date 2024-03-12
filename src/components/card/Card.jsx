import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import CardCSS from './Card.module.css';

// rlebhar : nommage, infos est un tvShow

// rlebhar : nommage des dossier commme pour le composant en pascale case
export function Card({ infos }){
  // rlebhar sortir : https://image.tmdb.org/t/p/w500 vers config/config.js
    return(
        <Link to={`${ROUTES.details}/${infos.id}`} className={CardCSS.card}>
            <img className={CardCSS.theImg} src={`https://image.tmdb.org/t/p/w500${infos.poster_path}`} alt={infos.name} />
            <p className={CardCSS.title}>{infos.name}</p>
        </Link>
    )
}