import { MovieCardItem } from "../MovieCardItem/MovieCardItem"

// rlebhar : cardData ==> movieList
export const MovieCardList = ({onClick, cardData})=>{

	if(!cardData){
		return <p>Aucune recommandations</p>
	}

	// rlebhar : css plutot que jss
	return <div style={{display:'flex', flexWrap:'wrap'}}>
		{
		cardData.map( (card)=>{
			return <MovieCardItem onClick={onClick} cardData={card} key={card.id}/>
		})
		}
		</div>
}