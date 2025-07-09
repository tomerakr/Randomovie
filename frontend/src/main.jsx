import { StrictMode, createContext, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import movieStore from './stores/MovieStore';
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

export const StoreContext = createContext({ movieStore });

export function useStores() {
  return useContext(StoreContext);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContext.Provider value={{ movieStore }}>
      <App />
    </StoreContext.Provider>
  </StrictMode>
)
