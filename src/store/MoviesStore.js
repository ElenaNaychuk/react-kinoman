import { makeAutoObservable } from "mobx";
import MoviesRepository from "./../MoviesRepository.js";

const baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

const moviesRepository = new MoviesRepository(baseUrl);

export default class MoviesStore {
    movies = undefined;
    isLoading() { return this.movies === undefined };
    serverError = false;

    constructor() {
        makeAutoObservable(this);
    }

    resetMovies() {
        this.movies = undefined;
        console.log('resetting');
    }

    setMovies(movies) {
        this.movies = movies;
    }

    async loadAllMovies() {
        try {
            this.resetMovies();
            const movies = await moviesRepository.getAllMovies();
            this.setMovies(movies.items);
        } catch (error) {
            console.log(error);
            this.serverError = true;
        }
    }

    async loadMoviesByKey(key) {
        try {
            this.resetMovies();
            const movies = await moviesRepository.getMoviesByKey(key);
            this.setMovies(movies);
        } catch (error) {
            console.log(error);
            this.serverError = true;
        }
    }

    async loadMoviesTop() {
        try {
            this.resetMovies();
            const movies = await moviesRepository.getMoviesTop();
            this.setMovies(movies);
        } catch (error) {
            console.log(error);
            this.serverError = true;
        }
    }

    async showAllTV_Series() {
        try {
            this.resetMovies();
            const movies = await moviesRepository.getAllMovies();
            const tvSeries = movies.items.filter(movie => movie.type === 'TV_SERIES');
            this.setMovies(tvSeries);
        } catch (error) {
            console.log(error);
            this.serverError = true;
        }
    }
}
