import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchFilmInState } from '../../../redux/slices/moviesSlice';
import Rating from '../Rating';

function MainInfoLeft() {
   const id = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(searchFilmInState(id));
   }, [dispatch]);

   const { searchFilm } = useSelector((store) => store.movies);

   console.log(searchFilm);

   return (
      <div className="main__info-left">
         <div className="main__info-left-title">
            <p>{searchFilm.film.title}</p>
            {/* <p>Бегущий по лезвию 2049</p> */}
            <Rating />
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
               Two years have passed unnoticed in Naruto's world. Former newcomers
               joined the ranks of experienced Shinobi in the ranks of tuning and
               zenin. The main characters did not sit still – everyone became a
               disciple of one of the legendary Sannin – the three great ninja
               Konoha.
            </p>
         </div>
      </div>
   );
}

export default MainInfoLeft;
