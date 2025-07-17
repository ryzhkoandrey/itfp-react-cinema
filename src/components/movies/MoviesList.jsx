import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MoviesCard from './MoviesCard';
import SkeletonFilm from '../skeletons/SkeletonFilm';

function MoviesList() {
   const path = useLocation();
   const { films, status } = useSelector((store) => store.movies);
   const { favoritesMovies } = useSelector((store) => store.favorites);

   return (
      <div id="movies" className="movies anchor">
         {path.pathname === '/favorites' ? (
            favoritesMovies.length > 0 ? (
               favoritesMovies.map((value) => (
                  <MoviesCard key={value.id} {...value} />
               ))
            ) : (
               <p className="movies__text">У вас нет избранных фильмов</p>
            )
         ) : status === 'loading' ? (
            [...new Array(19)].map((_, index) => <SkeletonFilm key={index} />)
         ) : (
            films.map((value) => <MoviesCard key={value.id} {...value} />)
         )}
      </div>
   );
}

export default MoviesList;
