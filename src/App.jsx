import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import './App.css'
import { apiFetch } from "./api/ApiFetch"
import { Header } from './components/Header/Header'
import { MovieCardList } from "./components/MovieCardList/MovieCardList"
import { MovieDetails } from "./components/MovieDetails/MovieDetails"
import { IMAGEPREFIX } from "./constant/ImagePrefix"
import { ROUTES } from "./routes/routes.js"

function App() {
  	const [textInput, setTextInput] = useState("")
	const [movies, setMovies] = useState([])
	// rlebhar : Privilégier un state vide, sinon selectedMovie est toujours concidéré non vide
	const [selectedMovie, setSelectedMovie ] = useState({})

	let selectedMovieImg = ""
	let moviesArray = []

	useEffect( ()=>{

		const getData = async ()=>{
			// rlebhar : nommage => movies
			const value = await apiFetch.fetchAll()
			// rlebhar  :Si tu n'utiliss pas la previous value du state, tu peux directement l'envoyer sans callback
			setMovies( () => value)
		}
		getData()
		

	}, [textInput])

  	function searchInputChange(newText){
		setTextInput(newText)
  	}

	function onMovieClick(newMovie){
		setSelectedMovie(newMovie)
	}


	// à Déplacer après les déclarations de states vers le haut
	moviesArray = movies.filter( (movie)=>{
		return movie.original_title.toLowerCase().includes(textInput.toLowerCase())
	})


	// rlebhar ce code est recalculé à chaque render et donc à chaque lettre tappée par exemple dans l'input. Ce qui pourrai heurter les perfs
	// rlebhar : Techniquement on aura deux inputs, une input de recherche avec submit au moment du press ENTER qui applique un nouvelle liste de résultats
	// et une seconde qui sert juste de filtre dans les résultats existants
	// Selon les specs Le filtrage ne change pas le background, seule une recherche réussi changera le bg

	// L'idée c'est de mettre à jour le selectedMovieImg uniqument après avoir reçu une nouvelle liste de résultats
	// maybe useEffect en écoute sur la liste des résultats de recherche pourra faire le job

	if (moviesArray[0] && !selectedMovie){
		selectedMovieImg = IMAGEPREFIX()+moviesArray[0].poster_path
	}
	else if(selectedMovie){
		console.log(selectedMovie)
		selectedMovieImg = IMAGEPREFIX()+selectedMovie.poster_path
	}

	// rlebhar : utiliser le dossier pages ( qui sont en fait des composants) pour stocker le composant envoyés dans la props "element" des routes.
	// Cela permet de bien identifier chaque pages de l'app.

	// rlebhar : L'idée d'avoir la logique de la bg image autour ds routes est très bonne, ça evite la redondance dans chaque pages.
	// Par contre si on décide d'ajouter une autre page qui n'en a pas besoin,
	//  on pourrai être embêté, je suggère de créer un composant "<BgImageContainer> {children} </BgImageContainer>"
	//   qu'on appelerai comme top composant d'une page, comme ça on pourra l'utiliser, ou non par page

  	return (
		<div style={{backgroundImage:`url(${selectedMovieImg})`, heigth:'100vh'}}>
			<BrowserRouter>
    	    <Routes>
				<Route element={ <><Header onChange={searchInputChange} />  <MovieCardList cardData={moviesArray} onClick={onMovieClick}/> </>} path={ROUTES.index} />
    	      	<Route element={ <MovieDetails onClick={onMovieClick} />} path={ROUTES.movieData+`/:id`} />
    	    </Routes>
    	  </BrowserRouter>
		</div>
    
  	)
}

export default App
