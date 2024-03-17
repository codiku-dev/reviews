import { Link } from "react-router-dom"
import { IMAGEPREFIX } from "../../constant/ImagePrefix"
import { ROUTES } from "../../routes/routes"

// rlebhar : nommage cardData => movie
export const MovieCardItem = ({onClick, cardData})=>{

	function handleClick(e){
		onClick(cardData)
		console.log(cardData)
	}

	// rlebhar : Style fixe dans un module.css
	// rlebhar : <br></br> => css
	return <div onClick={handleClick} style={{border:"solid 1px black",backgroundColor:"white"}}>
		<img src={IMAGEPREFIX()+cardData.backdrop_path} alt={cardData.original_title}/>
		<br></br>
		<Link to={ROUTES.movieData+"/"+cardData.id} >{cardData.original_title}</Link>
	</div>
}