import { useState } from 'react';
import { useSelector } from 'react-redux';

function FilterButtons() {
   const { filmsCategory } = useSelector((store) => store.movies);
   const [active, changeActive] = useState('Movies');

   return (
      <div className="filter__buttons">
         {filmsCategory.map((value, index) => (
            <button
               onClick={() => changeActive(value)}
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
