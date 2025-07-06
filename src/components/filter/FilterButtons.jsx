import { useState } from 'react';

function FilterButtons() {
   const [active, setActive] = useState('');
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
         {categories.map((category, index) => (
            <button
               onClick={() => setActive(category)}
               className={category === active ? 'active' : null}
               key={index}
            >
               {category}
            </button>
         ))}
      </div>
   );
}

export default FilterButtons;
