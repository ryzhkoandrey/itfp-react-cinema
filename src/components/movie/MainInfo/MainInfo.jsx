import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchFilmInState } from '../../../redux/slices/moviesSlice';
import MainInfoLeft from './MainInfoLeft';
import MainInfoRight from './MainInfoRight';

function MainInfo() {
   const id = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(searchFilmInState(id));
   }, [dispatch]);

   const { searchFilm } = useSelector((store) => store.movies);

   return (
      <div className="main__info">
         <MainInfoLeft filmInfo={{ ...searchFilm }} />
         <MainInfoRight />
      </div>
   );
}

export default MainInfo;
