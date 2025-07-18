import { makeAutoObservable, reaction } from "mobx";
import mysteryImage from '../assets/mystery.jpg';
const STORAGE_KEY = "randomPoster";

class RandomPosterStore {
    movies = [];

    constructor() {
        makeAutoObservable(this);

        // Load from localStorage if exists
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            this.movies = JSON.parse(saved);
        }

        // Save to localStorage automatically on change
        reaction(
            () => this.movies.map(m => ({ id: m.id, state: m.state })), // watch state changes
            () => {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.movies));
            }
        );
    }

    setMovies(movies) { //TODO randomize the order of the movies 
        this.movies = movies.map(movie => ({
            id: movie.id,
            data: movie,
            title: 'Mystery',
            poster_path: mysteryImage,
            state: "hidden",
        }));
    }

    revealMovie(id) {
        const movie = this.movies.find(m => m.id === id);
        if (movie && movie.state === "hidden") {
            movie.state = "chosen";
            movie.title = movie.data.title;
            movie.poster_path = movie.data.poster_path;
        }
    }

    markWatched(id) {
        const movie = this.movies.find(m => m.id === id);
        if (movie) {
            movie.state = "watched";
        }
    }

    reset() {
        this.movies = [];
        localStorage.removeItem(STORAGE_KEY);
    }
}

export const randomPosterStore = new RandomPosterStore();
