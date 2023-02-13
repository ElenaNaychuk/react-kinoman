import './Header.scss';
import logo from './../../../src/assets/images/icon-logo.png'
import { useState } from 'react';
import { observer, inject } from "mobx-react";

function Header({ moviesStore }) {

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const showAllMovies = () => {
        moviesStore.loadAllMovies();
    }

    const showMoviesTop = () => {
        moviesStore.loadMoviesTop();
    }

    const showAllSeries = () => {
        moviesStore.showAllTV_Series();
    }

    const showMoviesByKeyword = () => {
        moviesStore.loadMoviesByKey(searchValue);
        setSearchValue('');
    }

    return (
        <header className='header__container'>
            <div className='header'>
                <div className='header__logo-container'>
                    <img className='header__logo' src={logo} alt="logo" />
                    <p className='header__title'>Кино<span className='header__title_orange'>Ман</span></p>
                </div>
                <div className='header__search-container'>
                    <input
                        onChange={handleChange}
                        value={searchValue}
                        className='header__input-search'
                        type="text"
                        placeholder='Поиск' />
                    <button onClick={showMoviesByKeyword} className='header__btn'>Найти</button>
                </div>
            </div>
            <nav className='header__nav-container'>
                <ol className='header__nav'>
                    <li onClick={showAllMovies}>Все</li>
                    <li onClick={showMoviesTop}>Лучшие</li>
                    <li onClick={showAllSeries}>Сериалы</li>
                </ol>
            </nav>
        </header>
    );
}

export default inject((store) => {
    const { moviesStore } = store;
    return { moviesStore }
})(observer(Header));
