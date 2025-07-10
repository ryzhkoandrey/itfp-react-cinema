import { useContext } from 'react';
import MoviesCard from './MoviesCard';
import { Films } from '../../App';

function MoviesList() {
   const films = useContext(Films);
   console.log(films);

   return (
      <div id="movies" className="movies anchor">
         {films.map((value) => (
            <MoviesCard key={value.id} {...value} />
         ))}
      </div>
   );
}

export default MoviesList;
