import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Movie from './pages/Movie';
import Home from './pages/Home';

function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Provider store={store}>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/movie" element={<Movie />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </Provider>
            <Footer />
         </BrowserRouter>
      </>
   );
}

export default App;
