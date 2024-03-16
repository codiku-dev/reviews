import { TvShowListItemMolecules } from "../../Molecules/TvShowListItemMolecules/TvShowListItemMolecules.jsx"


// rlebhar : il manque surement restProps un spread operator sur restProps sinon il faut envoyer une props qui porte ce nom.
// rlebhar : De facon général on évite tout de même car c'est extrêment permissif et permet n'importe quoi.
// à la limite ...containerProps permet de savoir à qui sera envoyé la props et sur qui elle va agir
export const TvShowListOrganisms = ({ list, restProps }) => {
    const renderList = (list) => {
        return list.map((tvShow) => {
            return <li key={tvShow.id}>
                <TvShowListItemMolecules tvShow={tvShow} />
            </li>
        })
    }

    return <ul {...restProps}>
        {renderList(list)}
    </ul>
}