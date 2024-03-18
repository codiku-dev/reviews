import { api } from '../config/Api';

const apiKey = api.key;

//rlebhar : Pour le nom du fichier les composant seul sont en Pascale case, le reste en kebab case ( api-mobie-db.js)
// rlebhar : Ne pas oublier de try catch les call et de retourner un résultat cohérent en cas d'erreur.
export const ApiMovieDB = {
    // rlebhar les fonction en camel case
    GetPopularShows : async () => {
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
