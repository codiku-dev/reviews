import { KEY } from "../constant/ApiKeyTMDB"

// rlebhar : Nommage du fichier, tous les fichiers sont en kebab-case excepté ce qui est composants React 
// rlebhar : Nommage  apiMovie
// rlebhar : Extraire https://api.themoviedb.org/3/ vers constantes  ou .env
export const apiFetch = {
	fetchAll : async ()=>{
		const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY()}`)
		const data = await response.json()
		return data.results
	},
	fetchById: async (id)=>{
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY()}`)
		const data = await response.json()
		return data
	},
	fetchRecommendationById: async(id) =>{
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1&api_key=${KEY()}`)
		const data = await response.json()
		// rlebhar: Retournons .results aussi pour éviter les multiple .results plus tard
		return data
	},

}
