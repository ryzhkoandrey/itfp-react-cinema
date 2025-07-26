import MoviesCard from './MoviesCard';

function FavoriteMoviesList({ favorites }) {
   if (favorites.favoritesMovies.length === 0) {
      return <p className="movies__text">У вас нет избранных фильмов</p>;
   }

   return favorites.favoritesMovies.map((value) => (
      <MoviesCard key={value.id} {...value} />
   ));
}

export default FavoriteMoviesList;
