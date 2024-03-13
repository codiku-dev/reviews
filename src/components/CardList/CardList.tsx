import { Show } from '../../types/show';
import { Card } from '../Card/Card';
import s from './CardList.module.css';

export const CardList = ({data, horizontal, oneLine, filter}: {
    data: Show[], // rlebhar : showList
    horizontal: boolean, // rlebhar : isHorizontal
    oneLine: boolean, // isSingleLine
    filter: string // rlebhar : Rendre la CardList plus dumb, elle recoit une liste , et des props qui permettent de modifier le styling, 
    // mais le moins de logique possible, sinon tu as 2 tours de loop (filter + map ) , même si je n'ai pas envoyé filter.
    // La personne qui utilisera le composant enverra juste sa list, à elle de la filtrer avant ou non
}) => {
    // rlebhar : utiliser des template litteral pour concat les style ou bien tu peux regarder du coté de la lib (cx)
    return (
        <div className={s.cardList + ' ' + ((horizontal) ? s.horizontal : s.vertical) + ' ' + ((oneLine) ? s.oneLine : '')}>
            { data.filter( show => show.name.toLowerCase().includes(filter) ).map(show => <Card data={show}></Card>) }
        </div>
    );
};