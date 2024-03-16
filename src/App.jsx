import { useEffect, useState } from 'react';
import { fetchAllMovies } from './api/movies-api';
import { CardList } from './components/CardList/CardList';
import { Header } from './components/Header/Header';

export function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    loadMovieList();
  }, []);

  async function loadMovieList() {
    const movies = await fetchAllMovies();
    setMovieList(movies);
  }

  // rlebhar : CardList est un composant qui affiche une liste de Card mais spécifique à des tv show, 
  // elle ne s'adapte pas à n'importe quoi ( liste de iser)
  // Donc on va la nommer plutot TvShowList ou MovieList et du coup la props dataList serai plutôt tvShowList ou movieList
  return (
    <>
      <Header />
      <CardList dataList={movieList} />
    </>
  )
}
