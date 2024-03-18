import { TvShowApiKey } from "../../config.js";
// rlebhar : Nomagge du fichier en kebab-case.js
// rlebhar : Externaliser https://api.themoviedb.org/3/tv/
// rlebhar : Retourner partout ou c'est possible le .result de data pour pas avoir à le récupérer depuis l'exterieur.  
// rlebhar : Ajouter des try catch et retourner un résultat cohérent en cas d'erreur
export const TvShowApi = {
    fetchPopularTvShows: async () => {
        let response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${TvShowApiKey}`)
        let data = await response.json()
        return data;
    },
    fetchTvShowDetailById: async (id) => {
        let response = await fetch(`https://api.themoviedb.org/3/tv/${id}&?api_key=${TvShowApiKey}&append_to_response=credits`)
        let data = await response.json()
        return data;
    },
    fetchSearchTvShowsByTitle: async (title) => {
        let response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${TvShowApiKey}&query=${title}`)
        let data = await response.json()
        return data;
    },
    fetchTvShowRecommendationsById: async (id) => {
        let response = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${TvShowApiKey}`)
        let data = await response.json()
        return data;
    },
}

/*
EndPoints :

Find a tv show by title
https://api.themoviedb.org/3/search/tv$?api_key=X&query=<Y>

Find a tv show by id
https://api.themoviedb.org/3/tv/${id}&?api_key=<Y>&append_to_response=credits

Find the recommendations for a specific tv show id
https://api.themoviedb.org/3/tv/<X>/recommendations?api_key=<Y>

Find the popular tv shows
https://api.themoviedb.org/3/tv/popular?api_key=<Y>


DOC 
https://developer.themoviedb.org/reference/intro/getting-started
*/
