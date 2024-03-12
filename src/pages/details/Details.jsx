import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiMovieDB } from "../../api/ApiMovieDB";
import { Loader } from "../../components/loader/Loader";
import { Navbar } from "../../components/navbar/Navbar";
import { RecommendationCard } from "../../components/recommendationCard/RecommendationCard";
import DetailsCSS from './Details.module.css';

export function Details(){
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    // rlebhar : intialiser le type a undefined est plus sûr, sinon details est actuellement toujours concidéré défini
    const [details, setDetails] = useState({});
    // rlebhar : same
    const [bgImage, setBgImage] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    function fetchDetails(){
        // rlebhar : On utilisera uniquement async / await
        ApiMovieDB.GetShowDetails(id).then((data) => {
            setDetails(data);
            setBgImage(data.backdrop_path);
            setIsLoading(false);
        });
    }

    async function fetchRecommendations(){
        const data = await ApiMovieDB.GetRecommendations(id);
        setRecommendations(data.results);
    }

    useEffect(() => {
        // rlebhar : loading false et loading false, et ce ne marchera de toute facon par car les fetch ne sont pas await ,
        // ça passera de false a true instanéùment 
        setIsLoading(false)
        fetchDetails();
        fetchRecommendations()
        setIsLoading(false);
    }, [id]);

// rlebhar : ca serait cool d'avoir un composant générique de liste qu'on reutilise.
// rlebhar : https://image.tmdb.org/t/p/original a sortir
    return (
        <div className={DetailsCSS.details} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${bgImage})` }}>
            <Navbar />
            {isLoading && <Loader />}
            <div className={DetailsCSS.container}>
                <h2>{details.name}</h2>
                <p>Note : {details.vote_average/2}</p>
                <p>{details.overview}</p>
                <h3 className={DetailsCSS.recTitle}>If you enjoyed {details.name}, you will probabilly love :</h3>
                <div className={DetailsCSS.recommendationsListe}>
                    {recommendations.map((recommendation) => {
                        return <RecommendationCard key={recommendation.id} infos={recommendation} />
                    })}
                </div>
            </div>
        </div>
    )
}