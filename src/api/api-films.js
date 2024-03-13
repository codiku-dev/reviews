// rlebhar: Sortir la base url vers config/config.js , same pour la clé d'api
export const FilmApi = {
  fecthAllFilmbytitle: async (query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=af7b7e0bef676fa1986ee4a3d5420ed5&query=${query}`);
  const films = await response.json();
  return films.results; 
},

    // rlebhar : Ca ne fetch pas all, on cherche un seul fim ici (attention a la case byid => byId)
  fetchAllbyid: async (id) => {

    const response = await fetch("https://api.themoviedb.org/3/tv/" + id + "&?api_key=af7b7e0bef676fa1986ee4a3d5420ed5&append_to_response=credits");
    const films = await response.json();
    return films;
  },

    // rlebhar : Nommage propre please
  fetchRecobyID: async (id) => {
    const response = await fetch("https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=af7b7e0bef676fa1986ee4a3d5420ed5");
    const films = await response.json();
    return films.results;
  },

 // rlebhar : Nommage propre please  "populartv" => "popularTv" 
  fetchPopulartvShows: async () => {
    const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=af7b7e0bef676fa1986ee4a3d5420ed5");
    const json = await response.json();
    return json.results; 
  },

};