import { useState } from 'react'
import Navbar from "./Navbar";
import MovieList from "./MovieList";

function HomePage() {
    const [movies, setMovies] = useState([]);

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
