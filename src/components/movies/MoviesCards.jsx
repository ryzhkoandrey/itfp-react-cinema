import MoviesCard from './MoviesCard';

function MoviesCards({ films }) {
   let moviesToShow = [];

   if (films.filteredMovies.length > 0) {
      moviesToShow = films.filteredMovies;
   } else if (films.filteredMoviesCategories.length > 0) {
      moviesToShow = films.filteredMoviesCategories;
   } else {
      moviesToShow = films.films;
   }

   return moviesToShow.map((value) => <MoviesCard key={value.id} {...value} />);
}

export default MoviesCards;
