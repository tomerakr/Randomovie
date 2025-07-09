import { useState, useEffect } from 'react'
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import { fetchTopRatedMovies } from '../api/tmdb';

function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTopRatedMovies()
        .then(data => {
            setMovies(data);
        });
    }, []);

    return (
        <>
            <Navbar setMovies={setMovies} />
            <div className='container' style={{ paddingTop: '6vh' }}>
                <MovieList movies={movies} />
            </div>
        </>
    );
}

export default HomePage;
