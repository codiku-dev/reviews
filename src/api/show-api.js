const API_KEY = 'e8794088592c89d66928f6c4c14e71a2'; // todo: add in .env file

// rlebhar : Ajouter try catch pour sécuriser si l'api casse
// rlebhar : Externaliser aussi https://api.themoviedb.org
export async function fetchShows() {
    const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}
