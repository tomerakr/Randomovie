import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { observer } from 'mobx-react-lite';

const MovieList = observer(({ movies }) => {
  
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {/* {loading && <p>Loading...</p>} */}
      {/* {!loading && movies.length === 0 && <p>No results found</p>} */}

      <div className="container">
        {/*TODO add title  */}
        <div className='row justify-content-start'>
            {movies.length > 0 &&
              movies.map(movie => (
                <div key={movie.id} className="col-sm-6 col-md-4 col-lg-2 mb-4">
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
});

export default MovieList;
