import video from '../assets/videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4';
import star from '../assets/icons/star.png';

function Movie() {
   return (
      <main>
         <div className="video-wrapper">
            <video controls>
               <source src={video} type="video/mp4" />
            </video>
         </div>

         <div className="main__info">
            <div className="main__info-left">
               <div className="main__info-left-title">
                  <p>Бегущий по лезвию 2049</p>
                  <div className="main__info-rating">
                     <img src={star} />
                     <img src={star} />
                     <img src={star} />
                     <img src={star} />
                     <img src={star} />
                  </div>
               </div>
               <div className="main__info-left-categoryes">
                  <p>18+</p>
                  <p>HD</p>
                  <p>2022</p>
                  <p>Movie</p>
               </div>
               <div className="main__info-left-about">
                  <p>Description</p>
                  <p>
                     Two years have passed unnoticed in Naruto's world. Former
                     newcomers joined the ranks of experienced Shinobi in the ranks
                     of tuning and zenin. The main characters did not sit still –
                     everyone became a disciple of one of the legendary Sannin – the
                     three great ninja Konoha.
                  </p>
               </div>
            </div>

            <div className="main__info-right">
               <p>About</p>
               <div className="main__info-rigth-info">
                  <div>
                     <p>Type:</p>
                     <p>Movie</p>
                  </div>
                  <div>
                     <p>Director:</p>
                     <p>Movie</p>
                  </div>
                  <div>
                     <p>Date aired:</p>
                     <p>Movie</p>
                  </div>
                  <div>
                     <p>Duration:</p>
                     <p>Movie</p>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
}

export default Movie;
