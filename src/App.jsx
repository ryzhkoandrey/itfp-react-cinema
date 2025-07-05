import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Banner from './components/home/Banner';
import Filter from './components/home/Filter';
import MoviesList from './components/movies/MoviesList';
import Footer from './components/layout/Footer';

function App() {
   const [value, changeValue] = useState([]);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => {
            if (!response.ok) {
               throw new Error('Произошла ошибка');
            } else {
               return response.json();
            }
         })
         .then((response) => {
            console.log(response);
            changeValue(response);
         })
         .catch((error) => console.error(error));
   }, []);

   return (
      <>
         <p style={{ color: '#fff' }}>{value[0]?.name}</p>

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
