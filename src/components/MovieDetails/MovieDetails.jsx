import { apiFetch } from "../../api/ApiFetch"
import { MovieCardList } from "../MovieCardList/MovieCardList"
import { MovieDescription } from "../MovieDescription/MovieDescription"

import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'


export const MovieDetails = ({onClick})=>{
	const [isLoading, setIsLoading] = useState(true)
	const [overview, setOverview] = useState(null)
	// rlebhar : recommendationList setRecommandationList
	const [recommendation, setRecommandation] = useState([])

	const {id} = useParams()

	
	useEffect( ()=>{
		// rlebhar : Loading est true par défaut, why not.
		// rlebhar par contre il passe à faux si et seulement si on à les recommendations et l'overview.

		// L'idée serai de lancer fetchById(id) et fetchRecommendationById via Promise.all, et quand les 2 sont ok
		// la on passe à false
		// Autre solution, sans state, c'est possible aussi.
		// On return un Spinner si on a pas recommandationList.length >0 et overview !==undefined avant le return du content de la page
		if (isLoading){
			setIsLoading(false)
		}



		// rlebhar : Nommage , une fonction est une action, loadMovie, fetchmovie (toujours un verbe dedans)
		const _movie = async () => {
			try{
				// rlebhar : mv => movie
				let mv = await apiFetch.fetchById(id)
				setOverview(mv.overview)
			}
			catch(e){
				console.log(e)
			}
		}
	
		const _recommendation = async () => {
			try{
				let mv = await apiFetch.fetchRecommendationById(id)
				setRecommandation(mv.results)
			}
			catch(e){
				console.log(e)
			}
		}

		_movie()
		_recommendation()
	}, [id])

	
	if(!id){
		return <p>Film introuvable</p>
	}

	if(isLoading){
		return <p>Loading</p>
	}

	console.log(overview, recommendation)

	
	
	return <>
		<MovieDescription text={overview}/>
		<MovieCardList onClick={onClick} cardData={ recommendation} />
	</>

}
