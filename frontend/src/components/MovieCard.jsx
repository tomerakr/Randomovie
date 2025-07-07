import React, { useState } from "react";
import MovieModal from "./MovieModal";
import '../Style/MovieCard.css'

function MovieCard({ movie }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div 
                className="movie-card position-relative" 
                style={{ width: '15rem', cursor: 'pointer' }}
                onClick={() => setShowModal(true)}
            >
                {/* <button
                    className="add-btn btn btn-sm btn-light"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevents modal from opening
                        handleAddToList(movie);
                    }}
                    >
                    +
                </button> */}
                <img 
                    src={movie.Poster} 
                    alt={movie.Title} 
                    className="img-fluid"
                    style={{ height: '40vh', width: '100%', objectFit: 'cover' }}
                />
                
                <div className="overlay-title">
                    <h5 className="mb-0 fs-6 fw-bold">{movie.Title}</h5>
                </div>
            </div>

            {showModal && <MovieModal movie={movie} onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default MovieCard;