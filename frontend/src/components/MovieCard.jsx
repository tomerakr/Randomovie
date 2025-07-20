import { useState } from "react";
import { observer } from 'mobx-react-lite';
import { useStores } from '../main'; // <- import useStores from main.jsx
import MovieModal from "./MovieModal";
import '../Style/MovieCard.css';

const MovieCard = observer(({ movie, onClick }) => {
    const [showModal, setShowModal] = useState(false);

    const { randomMovieStore } = useStores();

    const handleAddToList = () => {
        randomMovieStore.addMovie(movie);
    };

  return (
    <div>
      <div 
        className="movie-card position-relative" 
        style={{ minWidth: '11rem' }}
        onClick={() => { (onClick && movie.state == 'hidden') ? onClick() : setShowModal(true) }}
      >
        <button className="add-btn btn"
          onClick={(e) => {
            e.stopPropagation(); // Prevents opening the modal
            handleAddToList(); //TODO GET FUNCTIONALITY HERE (either add or remove from list or none)
          }}
        >
          +
        </button>

        <img 
          src={movie.poster_path}
          alt={movie.title} 
          className="img-fluid"
          style={{ height: '34vh', width: '100%', objectFit: 'cover' }}
        />
        
        <div className="overlay-title">
          <h5 className="mb-0 fs-6 fw-bold">{movie.title}</h5>
        </div>
      </div>

      {showModal && <MovieModal movie={movie} onClose={() => setShowModal(false)} />}
    </div>
  );
});

export default MovieCard;
