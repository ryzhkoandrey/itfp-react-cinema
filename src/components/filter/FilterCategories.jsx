import { useState } from 'react';

function FilterCategories() {
   const [active, setActive] = useState('Popular');
   const categroies = ['Popular', 'Novelty', 'Featured', 'Short films'];

   return (
      <div id="categoryes" className="filter__categoryes anchor">
         <div className="filter__categoryes-flex">
            {categroies.map((category, index) => (
               <div
                  key={index}
                  onClick={() => setActive(category)}
                  className={`filter__categoryes-item ${
                     category === active ? 'active-category' : null
                  }`}
               >
                  <p>{category}</p>
                  <span></span>
               </div>
            ))}
         </div>
         <span></span>
      </div>
   );
}

export default FilterCategories;
