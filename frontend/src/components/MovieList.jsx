import MovieCard from './MovieCard';
import { observer } from 'mobx-react-lite';

const MovieList = observer(({ movies, cardOnClick }) => {
  
  // const [loading, setLoading] = useState(true);

  return (
    <div>
      {/* {loading && <p>Loading...</p>} */}
      {/* {!loading && movies.length === 0 && <p>No results found</p>} */}

      <div className="container">
        {/*TODO add title  */}
        <div className='row justify-content-start'>
            {movies.length > 0 &&
              movies.map(movie => (
                <div key={movie.id} className='col mb-4'> {/* TODO: here is what decide if the poster is all across or just 1 col, change based on size col-lg-3 */}
                    <MovieCard movie={movie} onClick={() => cardOnClick(movie.id)} />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
});

export default MovieList;
