import { useState } from 'react';

function FilterButtons() {
   const [active, changeActive] = useState('Movies');
   const categories = [
      'Movies',
      'Cinema',
      'Adventure',
      'Comedy',
      'Fantasy',
      'History',
      'Cartoon',
      'Detective',
      'Mysticism',
      'Drama',
   ];

   return (
      <div className="filter__buttons">
         {categories.map((value, index) => (
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
