import { api } from '../config/Api';

const apiKey = api.key;

//rlebhar : Pour le nom du fichier les composant seul sont en Pascale case, le reste en kebab case ( api-mobie-db.js)
export const ApiMovieDB = {
    // rlebhar les fonction en camel case
    GetPopularShows : async () => {
        // rlebhar si l'api est flinguée il faut sécuriser avec try catch et retourner un résultat cohérent quand ça ne fonctionne pas (par example [])
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`);
        const data = await response.json();
        // rlebhar: Puisqu'on utilise toujours le "".result" dans data , il serait intéressant de le retourner 
       // dans chaque fonction pour éviter un extra travail à chaque utilisation
        return data;
    },
    // rlebhar nom un peu confu, getShowByTitle ou getShowByQuery
    GetSearchShows : async (search) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${search}`);
        const data = await response.json();
        return data;
    },
    // rlebhar : GetShowById
    GetShowDetails : async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=credits`);
        const data = await response.json();
        return data;
    },
    // rlebhar : GetRecommendationByShowId
    GetRecommendations : async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${apiKey}`);
        const data = await response.json();
        return data;
    },
}
