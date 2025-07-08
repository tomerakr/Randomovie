import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Randomovie from './components/Randomovie';
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
