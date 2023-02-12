import { makeAutoObservable } from "mobx";
import MoviesRepository from "./../MoviesRepository.js";

const baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

const moviesRepository = new MoviesRepository(baseUrl);

export default class MovieStore {
    movie = undefined;
    isLoaded() { return this.movie !== undefined };
    isLoading() { return this.movie === undefined };
    serverError = false;

    constructor() {
        makeAutoObservable(this);
    }

    resetMovie() { this.movie = undefined }

    async loadMovie(id) {
        try {
            this.movie = await moviesRepository.getMovie(id);

        } catch (error) {
            console.log(error);
            this.serverError = true;
        }
    }
}
