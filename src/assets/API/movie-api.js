// rlebhar : extraire clé d'api et base url dans un /config/config.js
// rlebhar : Ne pas oublier de try catch les call et de retourner un résultat cohérent en cas d'erreur.
export const MovieApi = {
        fetchPopularMovies: async () => {
                const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=6f06b3d4a05561645d9473bb77e9b4bc')
                const popularMovies = await response.json()
                console.log(popularMovies.results)
                return popularMovies.results
        }
}
