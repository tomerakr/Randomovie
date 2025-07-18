import { useState } from 'react'
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import { useStores } from '../main';
import { toJS } from 'mobx';

const Randomovie = observer(() => {
    const { randomMovieStore, randomPosterStore } = useStores();

    return (
        <>
            <Navbar />
            <div className='container' style={{ paddingTop: '6vh' }}>
            {toJS(randomMovieStore.movies).length === 0 &&
                <div className='text-light'>
                    <h1>To create your own movie poster</h1>
                    <h1>Please first add movies</h1>
                    <button type='button' className='btn btn-lg btn-light m-4'>
                        <Link to="/" className="nav-link text-dark">🎬 Home</Link>
                    </button>
                </div>
            }
                <div className='row justify-content-center'>
                    {toJS(randomMovieStore.movies).length > 0 &&
                        <div className='col'>
                            <button type='button' className='btn btn-light m-3'
                                onClick={(e) => {
                                    // e.stopPropagation(); // Prevents opening the modal
                                    randomPosterStore.setMovies(toJS(randomMovieStore.movies));
                                }}
                                >
                                Create Poster
                            </button>
                        </div>
                    }
                </div>
                <div className='row ustify-content-center'>
                    <MovieList movies={toJS(randomMovieStore.movies)} />
                </div>
            </div>
        </>
    );
});

export default Randomovie;
