import React, { useState } from "react";
import { observer } from 'mobx-react-lite';
import { useStores } from '../main'; // <- import useStores from main.jsx
import MovieModal from "./MovieModal";
import '../Style/MovieCard.css';
import { toJS } from 'mobx';

const MovieCard = observer(({ movie }) => {
    const [showModal, setShowModal] = useState(false);

    // ✅ Access the store from context
    const { movieStore } = useStores();

    const handleAddToList = () => {
        movieStore.addMovie(movie);
        console.log(toJS(movieStore.selectedMovies));
    };

  return (
    <div>
      <div 
        className="movie-card position-relative" 
        style={{ minWidth: '11rem', cursor: 'pointer' }}
        onClick={() => setShowModal(true)}
      >
        <button className="add-btn btn"
          onClick={(e) => {
            e.stopPropagation(); // Prevents opening the modal
            handleAddToList();
          }}
        >
          +
        </button>

        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
