import './App.css';
import Header from './components/layout/Header';
import Banner from './components/home/Banner';
import Filter from './components/home/Filter';
import MoviesList from './components/movies/MoviesList';
import Footer from './components/layout/Footer';

function App() {
   return (
      <>
         <Header />
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

         <Footer />
      </>
   );
}

export default App;
