import s from './Card.module.css';

// rlebhar : Style a sortir en css
// rlebhar : https://image.tmdb.org/t/p/original/ a sortir vers config/config.js
export function Card({ content }) {
    return (
        <div style={{width: '16rem'}}>
            <img src={`https://image.tmdb.org/t/p/original/${content.poster_path}`} alt="Card image cap" className={s.imageStyle} />
            <div>
                <h5>{content.title}</h5>
            </div>
        </div>
    )
}