import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import RecommendationCardCSS from './RecommendationCard.module.css';

// rlebhar props naming et https://image.tmdb.org/t/p/w500 a sortir
export function RecommendationCard({infos}){
    return (
        <Link className={RecommendationCardCSS.card}  to={`${ROUTES.details}/${infos.id}`} >
            <img className={RecommendationCardCSS.theImg} src={`https://image.tmdb.org/t/p/w500${infos.poster_path}`} alt={infos.name} />
            <h2 className={RecommendationCardCSS.titre}>{infos.name}</h2>
        </Link>
    )
}