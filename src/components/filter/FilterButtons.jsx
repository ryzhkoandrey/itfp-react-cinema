import { useState } from 'react';
import { useSelector } from 'react-redux';

function FilterButtons() {
   const { filmsCategory } = useSelector((store) => store.movies);
   const [active, changeActive] = useState('All');

   return (
      <div className="filter__buttons">
         <button
            onClick={() => changeActive('All')}
            className={active === 'All' ? 'active' : null}
         >
            All
         </button>
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
