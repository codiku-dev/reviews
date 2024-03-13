// rlebhar : Les dossier devraient tous être en kebab-case , les fichiers aussi sauf pour les components

// rlebhar: theMovieDB n'est pas un bon nom. MovieApi, ou TvShowApi seraient plus logique.
// rlebhar : Il serait bien de retourner le .results dans chaque fonctions, pour ne pas avoir besoin de le faire à l'exterieur.
// rlebhar : Externaliser : https://api.themoviedb.org/3/ vers /config/config.js
// rlebhar : Externaliser la clé d'api aussi et l'utiliser

export const theMovieDB = {
    // rlebhar param manquant
    // rlebhar : 
    fetchShowByTitle: async () => {
        const response = await fetch("https://api.themoviedb.org/3/search/tv$?api_key=${api_key}&query=" + title);
        const showByTitle = await response.json();
        return showByTitle;
    },

    fetchShowById: async () => {
        const response = await fetch("https://api.themoviedb.org/3/tv/${id}&?api_key=d679048cf7d01ff8fc0ea2ee8647a4ef&append_to_response=" + id);
        const showById = await response.json();
        return showById;
    },

        // rlebhar : fetchTvShowRecommendationList
    fetchRecommendation: async () => {
        const response = await fetch("https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=d679048cf7d01ff8fc0ea2ee8647a4ef");
        const recommendation = await response.json();
        return recommendation;
    },

    // rlebhar : fetchPopularShowList , il s'agit d'un tableau
    fetchPopularShow: async () => {
        const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=d679048cf7d01ff8fc0ea2ee8647a4ef");
        const popularShow = await response.json();
        return popularShow;
    }
};