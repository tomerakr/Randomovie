import { makeAutoObservable } from 'mobx';

class MovieStore {
    selectedMovies = [];

    constructor() {
        makeAutoObservable(this);
    }

    addMovie(movie) {
        if (!this.selectedMovies.some(m => m.id === movie.id)) {
            this.selectedMovies.push(movie);
        }
    }

    removeMovie(imdbID) {
        this.selectedMovies = this.selectedMovies.filter(m => m.imdbID !== imdbID);
    }

    clearMovies() {
        this.selectedMovies = [];
    }
}

const movieStore = new MovieStore();
export default movieStore;
