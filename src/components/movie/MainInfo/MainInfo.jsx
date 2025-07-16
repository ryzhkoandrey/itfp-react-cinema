import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchFilmInState } from '../../../redux/slices/moviesSlice';
import MainInfoLeft from './MainInfoLeft';
import MainInfoRight from './MainInfoRight';

function MainInfo() {
   const id = useParams();
   const dispatch = useDispatch();
   const { searchFilm, status } = useSelector((store) => store.movies);

   useEffect(() => {
      if (status === 'fulfilled') {
         dispatch(searchFilmInState(id));
      }
   }, [dispatch, status]);

   return (
      <div className="main__info">
         {searchFilm.status === 'loading' ? (
            <p>Loading...</p>
         ) : (
            <>
               <MainInfoLeft filmInfo={{ ...searchFilm }} />
               <MainInfoRight filmInfo={{ ...searchFilm }} />
            </>
         )}
      </div>
   );
}

export default MainInfo;
