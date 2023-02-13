import { observer, inject } from "mobx-react";

import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';

function MovieList({ moviesStore }) {

    if (moviesStore.serverError) {
        return <p className='movieList__error'>Ошибка загрузки...</p>;
    }

    if (moviesStore.isLoading()) {
        return <p className='movieList__container-loading'>Loading ...</p>;
    }

    return (
        < section className='movieList__container' >
            {
                moviesStore.movies.map((movie) =>
                    < MovieCard
                        key={movie.kinopoiskId}
                        id={movie.kinopoiskId}
                        posterUrl={movie.posterUrl}
                        nameRu={movie.nameRu}
                        ratingKinopoisk={movie.ratingKinopoisk}
                        countries={movie.countries.map(item => item.country)}
                    />)
            }
        </ section>
    );
}

export default inject((store) => {
    const { moviesStore } = store;
    return { moviesStore }
})(observer(MovieList));
