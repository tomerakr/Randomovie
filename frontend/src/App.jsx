import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Randomovie from './pages/Randomovie';
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/randomovie' element={<Randomovie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
