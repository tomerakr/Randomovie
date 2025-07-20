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

    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    setMovies(movies) {
        const shuffled = this.shuffleArray(movies);

        this.movies = shuffled.map(movie => ({
            id: movie.id,
            data: movie,
            title: 'Mystery',
            poster_path: mysteryImage,
            state: "hidden",
        }));
    }

    revealMovie(id) {
        console.log(id);
        console.log(this.movies)
        const movie = this.movies.find(m => m.id === id);
        if (movie && movie.state === "hidden") {
            movie.state = "chosen";
            movie.title = movie.data.title;
            movie.poster_path = movie.data.poster_path;
            movie.backdrop_path = movie.data.backdrop_path;
            movie.vote_average = movie.data.vote_average;
            movie.overview = movie.data.overview;
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
