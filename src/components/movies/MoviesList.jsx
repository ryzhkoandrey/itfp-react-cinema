import MoviesCard from './MoviesCard';

function MoviesList() {
   const arrayFilms = ['Kenguru', 'Dog', 'Joker', 'Betman', 'Superman'];

   return (
      <div id="movies" className="movies anchor">
         <MoviesCard />
         <MoviesCard />
         <MoviesCard />
         <MoviesCard />
         <MoviesCard />
         <MoviesCard />
         <MoviesCard />
         <MoviesCard />
      </div>
   );
}

export default MoviesList;
