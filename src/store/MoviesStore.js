import { makeAutoObservable } from "mobx";
import MoviesRepository from "./../MoviesRepository.js";

const baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

const moviesRepository = new MoviesRepository(baseUrl);

export default class MoviesStore {
    movies = undefined;
    isLoaded() { return this.movies !== undefined };
    isLoading() { return this.movies === undefined };
    serverError = false;

    constructor() {
        makeAutoObservable(this);
    }

    async loadAllMovies() {
        try {
            this.movies = await moviesRepository.getAllMovies();
        } catch (error) {
            console.log(error);
            this.serverError = true;
        }
    }
}
