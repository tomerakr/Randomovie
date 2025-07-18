import { makeAutoObservable } from "mobx";
import { fetchTopRatedMovies, searchMovies } from "../api/tmdb";

class MovieStore {
    movies = [];
    
    constructor() {
        makeAutoObservable(this);
    }

    async loadTopRated() {
        fetchTopRatedMovies()
        .then(data => {
            this.movies = data.map(movie => {
                return {
                    ...movie,
                    poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    backdrop_path: `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
                };
            });
        });
    }

    async searchMovies(query) {
        searchMovies(query)
        .then(data => {
            this.movies = data.map(movie => {
                movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                movie.backdrop_path = `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
            });
        });
    }
}

export const movieStore = new MovieStore();
