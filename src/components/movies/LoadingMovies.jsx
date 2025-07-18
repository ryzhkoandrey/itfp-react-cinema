import MoviesCard from './MoviesCard';
import SkeletonFilm from '../skeletons/SkeletonFilm';

function LoadingMovies({ films, status }) {
   if (status === 'loading') {
      return [...new Array(19)].map((_, index) => <SkeletonFilm key={index} />);
   }

   return films.map((value) => <MoviesCard key={value.id} {...value} />);
}

export default LoadingMovies;
