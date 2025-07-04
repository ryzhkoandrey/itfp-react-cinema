import MoviesCard from './MoviesCard';

function MoviesList() {
   const arrayFilms = ['Kenguru', 'Dog', 'Joker', 'Betman', 'Superman'];

   return (
      <div id="movies" className="movies anchor">
         {arrayFilms.map((_, index) => (
            <MoviesCard key={index} />
         ))}
      </div>
   );
}

export default MoviesList;
