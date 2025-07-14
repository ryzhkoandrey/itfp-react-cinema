import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/slices/moviesSlice';
import MoviesCard from './MoviesCard';
import SkeletonFilm from '../skeletons/SkeletonFilm';

function MoviesList() {
   const dispatch = useDispatch();
   const { films, status } = useSelector((store) => store.movies);

   useEffect(() => {
      dispatch(fetchMovies());
   }, []);

   return (
      <div id="movies" className="movies anchor">
         {status === 'loading'
            ? [...new Array(19)].map((_, index) => <SkeletonFilm key={index} />)
            : films.map((value) => <MoviesCard key={value.id} {...value} />)}
      </div>
   );
}

export default MoviesList;
