import { useEffect } from 'react'
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import { observer } from "mobx-react-lite";
import { useStores } from '../main';
import { toJS } from 'mobx';

function HomePage() {
    const { movieStore } = useStores();

    useEffect(() => {
        movieStore.loadTopRated();
    }, []);

    return (
        <>
            <Navbar/>
            <div className='container' style={{ paddingTop: '6vh' }}>
                <MovieList movies={toJS(movieStore.movies)} />
            </div>
        </>
    );
}

export default observer(HomePage);
