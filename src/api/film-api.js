// rlebhar : Sortir la base url, et la clé d'api vers  config/config.js ou un fichier .env
export const FilmApi = {
    // rlebhar : fetchPopularShowList
    fetchAllFilmPopu: async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=c55cfadbe88e9473da7dad921703780b`)
        const responseJson = await response.json()
        return responseJson.results
    },

    fetchFilmDetailById: async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}&?api_key=c55cfadbe88e9473da7dad921703780b&append_to_response=credits`)
        const responseJson = await response.json()
        return responseJson.results
    },

    // rlebhar : fetchRecommendationsByShowId
    fetchRecoById: async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=c55cfadbe88e9473da7dad921703780b`)
        const responseJson = await response.json()
        return responseJson.results
    }



}