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
            <div className='container' style={{ paddingTop: '6vh' }}>
            {toJS(movieStore.selectedMovies).length === 0 &&
                <div className='text-light'>
                    <h1>To create your own movie poster</h1>
                    <h1>Please first add movies</h1>
                    <button type='button' className='btn btn-lg btn-light m-4'>
                        <Link to="/" className="nav-link text-dark">🎬 Home</Link>
                    </button>
                </div>
            }
                <div className='row justify-content-center'>
                    {toJS(movieStore.selectedMovies).length > 0 &&
                        <div className='col-4'>
                            <button type='button' className='btn btn-light m-3'
                                onClick={(e) => {
                                    // e.stopPropagation(); // Prevents opening the modal
                                    localStorage.setItem('posterMovies', JSON.stringify(toJS(movieStore.selectedMovies)));
                                }}
                                >
                                Create Poster
                            </button>
                        </div>
                    }
                </div>
                <div className='row ustify-content-center'>
                    <MovieList movies={toJS(movieStore.selectedMovies)} />
                </div>
            </div>
        </>
    );
});

export default Randomovie;
