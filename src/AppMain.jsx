import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchMovies } from './redux/slices/moviesSlice';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import './App.css';

function AppMain() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchMovies());
   }, []);

   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/favorites" element={<Favorites />} />
               <Route path="/movie/:id" element={<Movie />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
}

export default AppMain;
