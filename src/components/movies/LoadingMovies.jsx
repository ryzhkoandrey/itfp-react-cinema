import SkeletonFilm from '../skeletons/SkeletonFilm';

function LoadingMovies() {
   return [...new Array(19)].map((_, index) => <SkeletonFilm key={index} />);
}

export default LoadingMovies;
