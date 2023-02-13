import { Link, useParams } from 'react-router-dom';
import { observer, inject } from "mobx-react";
import { useEffect } from 'react';
import arrowBack from './../../assets/images/icon-left-arrow.png'

import './MoviePage.scss';

function MoviePage({ movieStore }) {
    const { id } = useParams();

    useEffect(() => {
        movieStore.loadMovie(id);
        const cleanUpFn = movieStore.resetMovie.bind(movieStore);
        return cleanUpFn;
    }, [id]);

    if (movieStore.serverError) {
        return <p className='moviePage__error'>Ошибка загрузки...</p>;
    }

    if (movieStore.isLoading()) {
        return <p className='moviePage__container-loading'>Loading ...</p>;
    }

    return (
        <div className='moviePage__container'>
            <Link to='/'><img className='moviePage__img_back' src={arrowBack} alt="photo" /></Link>
            <div className='moviePage__wrapper'>
                <img className='moviePage__img' src={movieStore.movie.posterUrl} alt="photo" />
                <div className='moviePage__movie-data'>
                    <div className='moviePage__nameRu item'>
                        Название на русском: <span className='orange'>{movieStore.movie.nameRu}</span>
                    </div>
                    <div className='moviePage__nameOriginal item'>
                        Название на английском: <span className='orange'>{movieStore.movie.nameOriginal}</span>
                    </div>
                    <div className='moviePage__countries item'>
                        Страна: <span className='orange'>{movieStore.movie.countries.map(item => item.country).join(', ')}</span>
                    </div>
                    <div className='moviePage__genres item'>
                        Жанр: <span className='orange'>{movieStore.movie.genres.map(item => item.genre).join(', ')}</span>
                    </div>
                    <div className='moviePage__ratingKinopoisk item'>
                        Рейтинг: <span className='orange'>{movieStore.movie.ratingKinopoisk}</span>
                    </div>
                    <div className='moviePage__year item'>Год выпуска: <span className='orange'>{movieStore.movie.year}</span></div>
                </div>
            </div>
            <div className='moviePage__description'>{movieStore.movie.description}</div>
        </div>
    );
}

export default inject((store) => {
    const { movieStore } = store;
    return { movieStore }
})(observer(MoviePage));

