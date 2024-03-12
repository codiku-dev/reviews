// rlebhar : Pour les imports de style, garder la même convention partout si possible, genre style, ou s , ou classes
import LoaderCSS from './Loader.module.css';

export function Loader(){
    return (
        <div className={LoaderCSS.container}>
            <span className={LoaderCSS.loader}></span>
        </div>
    )
}