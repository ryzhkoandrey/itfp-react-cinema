import star from '../../assets/icons/star.png';
import img_film from '../../assets/ImageFilm.jpg';

function MoviesCard() {
   return (
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
   );
}

export default MoviesCard;
