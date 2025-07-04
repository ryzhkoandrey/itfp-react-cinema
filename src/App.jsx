import './App.css';

import star from './assets/icons/star.png';
import video from './assets/videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4';
import header_banner from './assets/background.jpg';
import img_film from './assets/ImageFilm.jpg';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
   return (
      <>
         <Header />

         <div className="header__banner">
            <div>
               <p>REACT CINEMA</p>
               <p>
                  Subheading that sets up context, shares more info about the
                  website, or generally gets people psyched to keep scrolling.{' '}
               </p>
               <div>
                  <a href="#movies">Movies</a>
                  <button>Favorites</button>
               </div>
            </div>
            <video autoPlay muted loop>
               <source src={video} type="video/mp4" />
            </video>
            <img src={header_banner} alt="" />
         </div>

         <div className="container">
            <div className="filter">
               <div id="categoryes" className="filter__categoryes anchor">
                  <div className="filter__categoryes-flex">
                     <div className="filter__categoryes-item active-category">
                        <p>Popular</p>
                        <span></span>
                     </div>
                     <div className="filter__categoryes-item">
                        <p>Novelty</p>
                        <span></span>
                     </div>
                     <div className="filter__categoryes-item">
                        <p>Featured</p>
                        <span></span>
                     </div>
                     <div className="filter__categoryes-item">
                        <p>Short films</p>
                        <span></span>
                     </div>
                  </div>
                  <span></span>
               </div>
               <div className="filter__buttons">
                  <button>Movies</button>
                  <button>Cinema</button>
                  <button>Adventure</button>
                  <button>Comedy</button>
                  <button>Fantasy</button>
                  <button>History</button>
                  <button>Cartoon</button>
                  <button>Detective</button>
                  <button>Mysticism</button>
                  <button>Drama</button>
               </div>
               <div className="filter__search">
                  <input type="text" placeholder="Search..." />
                  <button>
                     <i className="fa fa-search"></i>
                  </button>
               </div>
            </div>

            <div id="movies" className="movies anchor">
               <a className="movies__card" href="./movie.html">
                  <div className="movies__card-rating">
                     <img src={star} alt="" />
                     <img src={star} alt="" />
                     <img src={star} alt="" />
                     <img src={star} alt="" />
                     <img src={star} alt="" />
                  </div>
                  <img src={img_film} alt="" />
               </a>
            </div>

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
