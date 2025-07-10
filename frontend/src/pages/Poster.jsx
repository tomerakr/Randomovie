import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStores } from '../main'; // <- import useStores from main.jsx
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import { toJS } from 'mobx';

const Poster = observer(() => {
    
    const [movies, setMovies] = useState([]);

    const { movieStore } = useStores();
    
    useEffect(() => {
        const saved = localStorage.getItem('posterMovies');
        if (saved) {
            setMovies(JSON.parse(saved));
        }
      }, []);    

    return (
        <>
            <Navbar setMovies={setMovies} />
            {movies.length == 0 &&
                <div className='text-light'>
                    <h1>You have yet to create a movie poster</h1>
                    <h2>Please first add movies then go to randomovie to create your poster</h2>
                    <button type='button' className='btn btn-lg btn-light m-4'>
                        <Link to="/" className="nav-link text-dark">🎬 Home</Link>
                    </button>
                </div>
            }
            <div className='container' style={{ paddingTop: '6vh' }}>
                <div className=''>
                    <MovieList movies={movies} />
                </div>
            </div>
        </>
    );
});

export default Poster;
