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
   // useEffect(() => {
   //    async function fetchItems() {
   //       await fetch('https://686fd2504838f58d1123034b.mockapi.io/movies')
   //          .then((data) => data.json())
   //          .then((data) => changeValue(data))
   //          .catch((error) => console.error(error));
   //    }
   //    fetchItems();
   // }, []);

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
