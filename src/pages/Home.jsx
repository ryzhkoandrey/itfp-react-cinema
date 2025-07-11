import MoviesScroll from '../components/movies/MoviesScroll';
import MoviesList from '../components/movies/MoviesList';
import Filter from '../components/filter/Filter';
import Banner from '../components/home/Banner';

function Home() {
   return (
      <>
         <Banner />
         <div className="container">
            <Filter />
            <MoviesList />
            <MoviesScroll />
         </div>
      </>
   );
}

export default Home;
