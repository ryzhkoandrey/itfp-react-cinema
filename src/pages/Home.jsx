import Banner from '../components/home/Banner';
import Filter from '../components/filter/Filter';
import MoviesList from '../components/movies/MoviesList';
import MoviesScroll from '../components/movies/MoviesScroll';

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
