import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

// rlebhar : Utiliser un nom atomique partout pour l'import de style ( court si possible pour ne pas surcharger le composant)
import NavbarCSS from './Navbar.module.css';

export function Navbar(){
    return (
        <div className={NavbarCSS.navbar}>
            <Link to={ROUTES.index} className={NavbarCSS.titre}>TMDB</Link>
            {/* <p>Test</p> */}
        </div>
    )
}