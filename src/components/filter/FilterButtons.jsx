import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCategoriesFilms } from '../../redux/slices/moviesSlice';

function FilterButtons() {
   const { filmsCategory } = useSelector((store) => store.movies);
   const [active, changeActive] = useState('All');
   const dispatch = useDispatch();

   const handlerCategory = (value) => {
      changeActive(value);
      dispatch(searchCategoriesFilms(value));
   };

   return (
      <div className="filter__buttons">
         <button
            onClick={() => handlerCategory('All')}
            className={active === 'All' ? 'active' : null}
         >
            All
         </button>
         {filmsCategory.map((value, index) => (
            <button
               onClick={() => handlerCategory(value)}
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
