import FilterCategories from './FilterCategories';
import FilterButtons from './FilterButtons';
import FilterSearch from './FilterSearch';

function Filter() {
   return (
      <div className="filter">
         <FilterCategories />
         <FilterButtons />
         <FilterSearch />
      </div>
   );
}

export default Filter;
