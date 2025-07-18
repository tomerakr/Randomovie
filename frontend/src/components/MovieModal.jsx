import '../Style/MovieModal.css'

function MovieModal({ movie, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* Image */}
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
          }}
        />
        
        <div className='modal-body-content p-4 text-light'>
          {/* Title / Year and Rating */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0 ">{movie.title} | {movie.release_date?.slice(0, 4)}</h4>
            <span className="badge bg-warning text-dark">⭐ {movie.vote_average?.toFixed(1)}</span>
          </div>
          {/* Overview */}
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
