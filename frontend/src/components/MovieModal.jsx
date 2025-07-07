import React from "react";

function MovieModal({ movie, onClose }) {
  return (
    <div className="modal d-block" tabIndex="-1" style={{ background: 'rgba(87, 42, 42, 0.28)' }}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{movie.Title}</h5>
                    <button type="button" className="btn-close" onClick={onClose}></button>
                </div>
                <div className="modal-body">
                    <p>Year: {movie.Year}</p>
                    <p>Type: {movie.Type}</p>
                    {/* add more movie details here */}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    </div>
  );
}


export default MovieModal;