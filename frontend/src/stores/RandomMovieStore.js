import { makeAutoObservable } from 'mobx';

class RandomMovieStore {
    movies = [];

    constructor() {
        makeAutoObservable(this);
    }

    addMovie(movie) {
        if (!this.movies.some(m => m.id === movie.id)) {
            this.movies.push(movie);
        }
    }

    removeMovie(imdbID) {
        this.movies = this.movies.filter(m => m.imdbID !== imdbID);
    }

    clearMovies() {
        this.movies = [];
    }
}

export const randomMovieStore = new RandomMovieStore();