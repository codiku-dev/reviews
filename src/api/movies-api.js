// rlebhar : On pourra créer une classe ou un objet pour contenir l'ensemble de nos fonctions
// rlebhar : Url a sortir vers config/config.js et idem pour la clé d'api
export const fetchAllMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=c1f404988b16d409ed97179550350359`);
    const data = await response.json();
    return data.results;
}