import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/slices/moviesSlice';
import MoviesCard from './MoviesCard';
import SkeletonFilm from '../skeletons/SkeletonFilm';

function MoviesList() {
   const dispatch = useDispatch();
   const { films } = useSelector((store) => store.movies);

   useEffect(() => {
      dispatch(fetchMovies());
   }, []);

   return (
      <div id="movies" className="movies anchor">
         {films.map((value) => (
            // <MoviesCard key={value.id} {...value} />
            <SkeletonFilm key={value.id} />
         ))}
      </div>
   );
}

export default MoviesList;
