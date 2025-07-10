import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';
import './App.css';

export const Films = createContext();

function App() {
   const [value, changeValue] = useState([]);

   useEffect(() => {
      async function fetchItems() {
         await fetch('https://686fd2504838f58d1123034b.mockapi.io/movies')
            .then((data) => data.json())
            .then((data) => changeValue(data))
            .catch((error) => console.error(error));
      }
      fetchItems();
   }, []);

   return (
      <>
         <BrowserRouter>
            <Header />
            <Films.Provider value={value}>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/movie" element={<Movie />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </Films.Provider>
            <Footer />
         </BrowserRouter>
      </>
   );
}

export default App;
