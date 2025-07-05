import Filter from '../components/Filter';
import background from '../assets/Blade Runner 2049(2).jpg';
import star from '../assets/icons/star.png';
import img_film from '../assets/ImageFilm.jpg';

function Favorites() {
   return (
      <>
         <div className="favorites__banner">
            <div className="gradient__overlay"></div>
            <img src={background} alt="" />
         </div>

         <div className="container">
            <Filter />

            <div className="favorites_movies">
               <div className="top-movies">
                  <p>Top Rated Films</p>

                  <div className="top-movies__card">
                     <div className="top-movies__card-padding">
                        <img src={img_film} alt="" />
                        <div className="top-movies__card-info">
                           <div className="top-movies__card-info-title">
                              <p>Бегущий по лезвию 2049</p>
                              <p>Ридли Скотт</p>
                           </div>
                           <div className="top-movies__card-info-description">
                              <p>Film</p>
                              <p>2019</p>
                              <p>180m</p>
                              <p>9.1</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="movies">
                  <a className="movies__card" href="/">
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
            </div>

            <div className="movies__scroll">
               <button>
                  <i className="fa-solid fa-arrow-down"></i>
               </button>
            </div>
         </div>
      </>
   );
}

export default Favorites;
