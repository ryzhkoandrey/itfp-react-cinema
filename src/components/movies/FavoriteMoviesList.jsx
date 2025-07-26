import MoviesCard from './MoviesCard';

function FavoriteMoviesList({ favorites }) {
   let moviesToShow = [];

   if (favorites.filteredMovies.length > 0) {
      moviesToShow = favorites.filteredMovies.filter((searchFilms) => {
         return favorites.favoritesMovies.some(
            (searchTitle) => searchTitle.title === searchFilms.title
         );
      });
   } else if (favorites.filteredMoviesCategories.length > 0) {
      moviesToShow = favorites.filteredMoviesCategories.filter((searchFilms) => {
         return favorites.favoritesMovies.some(
            (searchTitle) => searchTitle.title === searchFilms.title
         );
      });
   } else {
      moviesToShow = favorites.favoritesMovies;
   }

   // if (favorites.favoritesMovies.length === 0) {
   //    return <p className="movies__text">У вас нет избранных фильмов</p>;
   // }

   return moviesToShow.map((value) => <MoviesCard key={value.id} {...value} />);
}

export default FavoriteMoviesList;
