 //rlebhar Nommage du fichier, uniquement les composants en pascale case, le reste en kebab case (nom-de-fichier.js)
 
 //rlebhar Archi, externaliser la clé d'api vers un dossier config/config.js et la réutiliser
export const APIFilm = {
    //rlebhar Nommage, cette fonction ne fetch pas tous les films, seulement les populaires (d'ailleurs ici on fetch des séries d'ailleurs)
    fetchAllFilm: async () => {
        const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=c08cc09a89952f4c18695becf98f2323")
        const films = await response.json()
        return films.results
    },
    fetchFilmByID: async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}&?api_key=c08cc09a89952f4c18695becf98f2323&append_to_response=credits`)
        const film = await response.json()
        return film
    },
    fetchFilmRecommendationsByID: async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=c08cc09a89952f4c18695becf98f2323`)
        const recommendation = await response.json()
        return recommendation.results
    },
    fetchFilmByTitle: async (title) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=c08cc09a89952f4c18695becf98f2323&query=${title}`)
        const filmsByTitle = await response.json()
        return filmsByTitle.results
    }
}