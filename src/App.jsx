import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Movie from './pages/Movie';
import Footer from './components/layout/Footer';

function App() {
   return (
      <>
         <BrowserRouter>
            <Header />

            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/favorites" element={<Favorites />} />
               <Route path="/movie" element={<Movie />} />
            </Routes>

            <Footer />
         </BrowserRouter>
      </>
   );
}

export default App;
