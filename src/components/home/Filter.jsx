import { useState } from 'react';

function Filter() {
   const [status, changeStatus] = useState('Popular');
   const filter_categroies = ['Popular', 'Novelty', 'Featured', 'Short films'];

   return (
      <div className="filter">
         <div id="categoryes" className="filter__categoryes anchor">
            <div className="filter__categoryes-flex">
               {filter_categroies.map((category, index) => (
                  <div
                     key={index}
                     onClick={() => changeStatus(category)}
                     className={`filter__categoryes-item ${
                        category === status ? 'active-category' : null
                     }`}
                  >
                     <p>{category}</p>
                     <span></span>
                  </div>
               ))}
            </div>
            <span></span>
         </div>

         <div className="filter__buttons">
            <button>Movies</button>
            <button>Cinema</button>
            <button>Adventure</button>
            <button>Comedy</button>
            <button>Fantasy</button>
            <button>History</button>
            <button>Cartoon</button>
            <button>Detective</button>
            <button>Mysticism</button>
            <button>Drama</button>
         </div>

         <div className="filter__search">
            <input type="text" placeholder="Search..." />
            <button>
               <i className="fa fa-search"></i>
            </button>
         </div>
      </div>
   );
}

export default Filter;
