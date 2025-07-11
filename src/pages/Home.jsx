import { useDispatch, useSelector } from 'react-redux';
import MoviesScroll from '../components/movies/MoviesScroll';
import MoviesList from '../components/movies/MoviesList';
import Filter from '../components/filter/Filter';
import Banner from '../components/home/Banner';

function Home() {
   const dispatch = useDispatch();
   const count = useSelector((state) => state.counter.value);
   console.log(count);

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
