import { useSelector } from 'react-redux';
import MoviesCard from './MoviesCard';
import SkeletonFilm from '../skeletons/SkeletonFilm';

function MoviesList() {
   const { films, status } = useSelector((store) => store.movies);

   return (
      <div id="movies" className="movies anchor">
         {status === 'loading'
            ? [...new Array(19)].map((_, index) => <SkeletonFilm key={index} />)
            : films.map((value) => <MoviesCard key={value.id} {...value} />)}
      </div>
   );
}

export default MoviesList;
