import { useState, useEffect } from 'react'
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
                <MovieList movies={toJS(movieStore.selectedMovies)} />
            </div>
        </>
    );
});

export default Randomovie;
