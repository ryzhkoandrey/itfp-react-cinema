import { Link } from 'react-router-dom';
import star from '../../assets/icons/star.png';
import img_film from '../../assets/ImageFilm.jpg';

function MoviesCard() {
   return (
      <Link className="movies__card" to="/movie">
         <div className="movies__card-rating">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
         </div>
         <img src={img_film} alt="" />
      </Link>
   );
}

export default MoviesCard;
