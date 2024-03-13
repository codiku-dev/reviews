import { API_KEY } from "../constants/config";
import { Show, ShowDetails } from "../types/show";

// rlebhar : https://api.themoviedb.org/3/ a externalisr
export class MovieAPI {
    static fetchPopularShows = async (): Promise<Show[]> => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results;
    }

    static fetchRecommendationsByShowId = async (id: string): Promise<Show[]> => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results;
    }

    static fetchShowById = async (id: string): Promise<ShowDetails> => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}&?api_key=${API_KEY}&append_to_response=credits`);
        const data = await response.json();
        return data;
    }

    static fetchShowByTitle = async (title: string): Promise<Show[]> => {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${title}`);
        const data = await response.json();
        return data.results;
    }
};