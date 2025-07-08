import '../Style/MovieModal.css'

function MovieModal({ movie, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* Image */}
        <img
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt={movie.title}
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
          }}
        />

        {/* Title / Year and Rating */}
        <div className="d-flex justify-content-between align-items-center p-3">
          <h4 className="mb-0 text-light">
            {movie.title} | {movie.release_date?.slice(0, 4)}
          </h4>
          <span className="badge bg-warning text-dark">
            ⭐ {movie.vote_average?.toFixed(1)}
          </span>
        </div>

        {/* Overview */}
        <div className="px-3 pb-4 text-light">
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
