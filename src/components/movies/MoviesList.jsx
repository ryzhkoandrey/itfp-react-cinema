import MoviesCard from './MoviesCard';

function MoviesList() {
   fetch('https://686fd2504838f58d1123034b.mockapi.io/movies')
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

   return <div id="movies" className="movies anchor"></div>;
}

export default MoviesList;
