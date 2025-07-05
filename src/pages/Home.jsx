import Banner from '../components/home/Banner';
import Filter from '../components/Filter';
import MoviesList from '../components/movies/MoviesList';

function Home() {
   return (
      <>
         <Banner />
         <div className="container">
            <Filter />
            <MoviesList />
            <div className="movies__scroll">
               <button>
                  <i className="fa-solid fa-arrow-down"></i>
               </button>
            </div>
         </div>
      </>
   );
}

export default Home;
