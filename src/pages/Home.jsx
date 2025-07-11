import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../redux/slices/counterSlice';
import MoviesScroll from '../components/movies/MoviesScroll';
import MoviesList from '../components/movies/MoviesList';
import Filter from '../components/filter/Filter';
import Banner from '../components/home/Banner';

function Home() {
   const dispatch = useDispatch();
   const count = useSelector((state) => state.counter.value);

   return (
      <>
         <Banner />
         <div className="container">
            <button onClick={() => dispatch(changeValue())}>{count}</button>

            <Filter />
            <MoviesList />
            <MoviesScroll />
         </div>
      </>
   );
}

export default Home;
