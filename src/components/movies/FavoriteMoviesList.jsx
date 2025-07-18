import MoviesCard from './MoviesCard';

function FavoriteMoviesList({ favorites }) {
   if (favorites.length === 0) {
      return <p className="movies__text">У вас нет избранных фильмов</p>;
   }

   return favorites.map((value) => <MoviesCard key={value.id} {...value} />);
}

export default FavoriteMoviesList;
