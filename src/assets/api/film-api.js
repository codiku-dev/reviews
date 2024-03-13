const key = "8900777c3e24b91251b82d265e010672"

//rlebhar : Clé d'api a sortir vers /config/config.js
// rlebhar : https://api.themoviedb.org/3/ a sortir vers config
export const FilmApi = {
    //rlebhar : Nommage: Ca fetch tous les films ? Ou juste une partie très spécifique , les populars?
    fetchAllFilms: async () => {
        const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + key);
        const film = await response.json();
        return film.results;
    },

    // rlebhar : On ne fetch pas un title, on fetch un tvShow by title
    fetchTitle: async (title) => {
        const response = await fetch("https://api.themoviedb.org/3/search/tv?api_key=" + key + "&query=" + title);
        const filmTitle = await response.json();
        return filmTitle.results;
    },

// rlebhar : fetchTvShowById
    fetchFilm: async (id) => {
        const response = await fetch("https://api.themoviedb.org/3/tv/" + id + "&?api_key=" + key + "&append_to_response=credits");
        const film = await response.json();
        return film;
    },

    // rlebhar : fetchRecommendationByTvShowId
    fetchReco: async (id) => {
        const response = await fetch("https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=" + key);
        const reco = await response.json();
        return reco.results;
    },
};