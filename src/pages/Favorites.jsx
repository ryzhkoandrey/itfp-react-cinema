import Banner from '../components/favorites/Banner';
import Filter from '../components/Filter';
import FavoritesList from '../components/favorites/FavoritesList';
import MoviesList from '../components/movies/MoviesList';
import MoviesScroll from '../components/movies/MoviesScroll';

function Favorites() {
   return (
      <>
         <Banner />

         <div className="container">
            <Filter />
            <div className="favorites_movies">
               <FavoritesList />
               <MoviesList />
            </div>

            <MoviesScroll />
         </div>
      </>
   );
}

export default Favorites;
