import './App.css';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Movie from './pages/Movie';
import Footer from './components/layout/Footer';

function App() {
   return (
      <>
         <Header />
         {/* <Home /> */}
         <Favorites />
         {/* <Movie /> */}
         <Footer />
      </>
   );
}

export default App;
