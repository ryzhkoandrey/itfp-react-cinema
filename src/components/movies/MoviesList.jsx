import { useEffect, useState } from 'react';
import MoviesCard from './MoviesCard';

function MoviesList() {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      fetch('https://686fd2504838f58d1123034b.mockapi.io/movies')
         .then((data) => data.json())
         .then((data) => setMovies(data))
         .catch((error) => console.error(error));
   }, []);

   return (
      <div id="movies" className="movies anchor">
         {movies.map((movie) => (
            <MoviesCard key={movie.id} />
         ))}
      </div>
   );
}

export default MoviesList;
