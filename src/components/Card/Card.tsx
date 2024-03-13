import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { Show } from '../../types/show';
import s from './Card.module.css';

// rlebhar : naming data en tvShow ou show
export const Card = ({data}: {data: Show}) => {
    // rlebhar : Ce composant est dumb, il recoit un show , il l'affiche
    // Pas besoin de state ou de useEffect
    const [show, setShow] = useState<Show>();

    // rlebhar: Pas utile et surtout gros risque de boucle infini 
    useEffect(() => {
        setShow(data);
    }, [data]);

    // const getPicture = () => {
    //     return `${}`
    // }

    // rlebhar : https://image.tmdb.org/t/p/original/ à externaliser 
    const getBackgroundPicture = (show: Show) => {
        if (!show.backdrop_path) return '';
        return `https://image.tmdb.org/t/p/original/${show.backdrop_path}`;
    }

    const renderCard = () => {
        if (!show) return (
            <div className={s.card}>No card content!</div>
        );

        return (
            <div className={s.card}>
                <Link to={`/${ROUTES.showDetail}/${show.id}`} className={s.cardLink}>
                    <div className={s.cardPicture}>
                        <img src={getBackgroundPicture(show)}></img>
                    </div>
                    <div className={s.cardContent}>
                        { show?.name }
                    </div>
                </Link>
            </div>
        );
    }

    return (
        <>
            { renderCard() }
        </>
    );
}