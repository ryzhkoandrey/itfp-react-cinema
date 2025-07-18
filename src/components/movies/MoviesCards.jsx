import MoviesCard from './MoviesCard';

function MoviesCards({ films }) {
   return films.map((value) => <MoviesCard key={value.id} {...value} />);
}

export default MoviesCards;
