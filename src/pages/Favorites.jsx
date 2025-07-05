import Filter from '../components/home/Filter';

function Favorites() {
   return (
      <>
         <div className="favorites__banner">
            <div className="gradient__overlay"></div>
            <img src="./assets/Blade Runner 2049(2).jpg" alt="" />
         </div>

         <div className="container">
            <Filter />

            <div className="favorites_movies">
               <div className="top-movies">
                  <p>Top Rated Films</p>

                  <div className="top-movies__card">
                     <div className="top-movies__card-padding">
                        <img src="./assets/ImageFilm.jpg" alt="" />
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
                        <img src="./assets/icons/star.png" alt="" />
                        <img src="./assets/icons/star.png" alt="" />
                        <img src="./assets/icons/star.png" alt="" />
                        <img src="./assets/icons/star.png" alt="" />
                        <img src="./assets/icons/star.png" alt="" />
                     </div>
                     <img src="./assets/ImageFilm.jpg" alt="" />
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
