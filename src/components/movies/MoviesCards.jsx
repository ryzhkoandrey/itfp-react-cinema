import MoviesCard from './MoviesCard';

function MoviesCards({ films }) {
   const moviesToShow =
      films.filteredMovies.length > 0 ? films.filteredMovies : films.films;

   return moviesToShow.map((value) => <MoviesCard key={value.id} {...value} />);
}

export default MoviesCards;
