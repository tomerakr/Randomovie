import { useState, useEffect } from 'react';
import { searchMovies } from '../api/tmdb';
import { useStores } from '../main';

const NUM_SUGGESTIONS = 5

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    
    const { movieStore } = useStores();

    const searchMoviesByTerm = () => {
        setSuggestions([]);
        movieStore.searchMovies(searchTerm);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log(searchTerm)
            searchMoviesByTerm();
        }
    };
    
    useEffect(() => {
        if (!searchTerm) {
            setSuggestions([]);
            return;
        }
        
        searchMovies(searchTerm)
        .then(data => {
            setSuggestions(data.slice(0, NUM_SUGGESTIONS) || []);
        });
  }, [searchTerm]);

    return (
        <div className='position-relative'>
            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                <input className="form-control me-3" 
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)}
                    }
                    onKeyDown={handleKeyDown}/>
            </form> 

            {suggestions.length > 0 && (
                <ul className="list-group position-absolute w-100 z-1 mt-1">
                    {suggestions.map((movie) => (
                        <li 
                            key={movie.id}
                            className="list-group-item"
                            onClick={() => {
                                setSearchTerm(movie.Title);
                                searchMoviesByTerm();
                            }}
                            >
                        {movie.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;