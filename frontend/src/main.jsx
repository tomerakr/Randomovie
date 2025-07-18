import { StrictMode, createContext, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import { movieStore } from './stores/MovieStore.js';
import { randomMovieStore } from './stores/RandomMovieStore.js';
import { randomPosterStore } from './stores/RandomPosterStore.js'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

export const StoreContext = createContext({ movieStore, randomMovieStore, randomPosterStore });

export function useStores() {
  return useContext(StoreContext);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContext.Provider value={{ movieStore, randomMovieStore, randomPosterStore }}>
      <App />
    </StoreContext.Provider>
  </StrictMode>
)
