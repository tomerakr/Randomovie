import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStores } from '../main'; // <- import useStores from main.jsx
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import { toJS } from 'mobx';

const Randomovie = observer(() => {
    
    const [movies, setMovies] = useState([]);
    
    const { movieStore } = useStores();

    return (
        <>
            <Navbar setMovies={setMovies} />
            {toJS(movieStore.selectedMovies) == 0 &&
                <div className='text-light'>
                    <h1>To create your own movie poster</h1>
                    <h1>Please first add movies</h1>
                    <button type='button' className='btn btn-lg btn-light m-4'>
                        <Link to="/" className="nav-link text-dark">🎬 Home</Link>
                    </button>
                </div>
            }
            <div className='container' style={{ paddingTop: '6vh' }}>
                <MovieList movies={toJS(movieStore.selectedMovies)} />
            </div>
        </>
    );
});

export default Randomovie;
