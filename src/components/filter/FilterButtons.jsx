import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCategoriesFilms } from '../../redux/slices/moviesSlice';

function FilterButtons() {
   const dispatch = useDispatch();
   const { filmsCategory } = useSelector((store) => store.movies);
   const [active, changeActive] = useState('All');

   const categoryButtonLogic = (value) => {
      changeActive(value);
      dispatch(searchCategoriesFilms(value));
   };

   return (
      <div className="filter__buttons">
         <button
            onClick={() => categoryButtonLogic('All')}
            className={active === 'All' ? 'active' : null}
         >
            All
         </button>
         {filmsCategory.map((value, index) => (
            <button
               onClick={() => categoryButtonLogic(value)}
               className={value === active ? 'active' : null}
               key={index}
            >
               {value}
            </button>
         ))}
      </div>
   );
}

export default FilterButtons;
