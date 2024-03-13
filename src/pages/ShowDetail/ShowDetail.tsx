import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieAPI } from "../../api/movie-api";
import { CardList } from "../../components/CardList/CardList";
import { Header } from "../../components/Header/Header";
import { Stars } from "../../components/Stars/Stars";
import { SHOW_BG_PREFIX } from "../../constants/api";
import { Show, ShowDetails } from "../../types/show";
import s from './ShowDetail.module.css';

export const ShowDetail = () => {
    const [showDetail, setShowDetail] = useState<ShowDetails | undefined>();
    const [recommendedShows, setRecommendedShows] = useState<Show[] | undefined>([]);
    const { id } = useParams();

    useEffect(() => {
        loadShowDetails();
        loadRecommendedShows();
    }, [id]);

    const loadShowDetails = async () => {
        const details = await MovieAPI.fetchShowById(id!);
        setShowDetail(details);
    }

    const loadRecommendedShows = async () => {
        const shows = await MovieAPI.fetchRecommendationsByShowId(id!);
        setRecommendedShows(shows);
    }

    const loadShowImage = () => {
        if (!showDetail?.backdrop_path) return '';

        return SHOW_BG_PREFIX + showDetail.backdrop_path;
    }

    const renderShowDetails = () => {
        if (!showDetail) return 'No show details found!';
        
        return (
            <div className={s.details}>
                <div className={s.detailsTitle}>{showDetail.name}</div>
                {/* <Stars max={10} rating={10} /> */}
                <div className={s.detailsOverview}>{showDetail.overview}</div>
            </div>
        )
    }

    const getShowName = () => {
        if (showDetail?.name) return showDetail.name;
        return '';
    }

    const renderRecommendedShows = () => {
        if (!recommendedShows) return 'No recommendations found!';


        return (
            <div className={s.recommended}>
                <div className={s.recommendedTitle}>If you enjoyed {getShowName()} you'll probably love :</div>
                <CardList data={recommendedShows} horizontal={true} oneLine={true} filter=''></CardList>
            </div>
        )
    }

    return (
        <div className={s.detailWrapper}>
            <div className={s.detailBackground}>
                <img src={loadShowImage()}></img>
            </div>
            <Header onSearchAction={undefined} onChangeAction={undefined} onFilterAction={undefined} showSearchBar={false}></Header>
            { renderShowDetails() }
            { renderRecommendedShows() }
        </div>
    );
};