import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/randomovie' element={<Randomovie />}></Route>
        </Routes>
      </BrowserRouter>
      <Navbar setMovies={setMovies} />
      <div className='container' style={{ paddingTop: '6vh' }}>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App
