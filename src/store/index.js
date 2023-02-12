import MoviesStore from './MoviesStore.js';
import MovieStore from './MovieStore.js';

export const stores = {
    moviesStore: new MoviesStore(),
    movieStore: new MovieStore(),
}