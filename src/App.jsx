import './App.css';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import Favorites from './pages/Favorites';

function App() {
   return (
      <>
         <Header />
         {/* <Home /> */}
         <Favorites />
         <Footer />
      </>
   );
}

export default App;
