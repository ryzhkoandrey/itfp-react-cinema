import background from '../assets/Blade Runner 2049(2).jpg';
import Filter from '../components/Filter';
import FavoritesList from '../components/favorites/FavoritesList';
import MoviesList from '../components/movies/MoviesList';
import MoviesScroll from '../components/movies/MoviesScroll';

function Favorites() {
   return (
      <>
         <div className="favorites__banner">
            <div className="gradient__overlay"></div>
            <img src={background} alt="" />
         </div>

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
