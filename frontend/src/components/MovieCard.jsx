import React, { useState } from "react";
import MovieModal from "./MovieModal";

function MovieCard({ movie }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div 
                className="card h-100 p-2 bg-dark text-white" 
                style={{ width: '15rem' }}
                onClick={() => {
                    setShowModal(true)
                }}>
                <img src={movie.Poster} alt={movie.Title} className="card-img-top" style={{ height: '35vh'}}/>
                <div className="card-body">
                    <h5 className="mb-0 fw-bold">{movie.Title}</h5>
                </div>
            </div>

            {showModal && <MovieModal movie={movie} onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default MovieCard;