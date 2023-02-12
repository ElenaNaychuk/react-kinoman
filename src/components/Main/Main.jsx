import { observer, inject } from "mobx-react";

import MovieList from '../MovieList/MovieList';
import './Main.scss';

function Main({ moviesStore }) {

    return (
        <main className='main-container'>
            <MovieList />
        </main>
    )
}

export default inject((store) => {
    const { moviesStore } = store;
    return { moviesStore }
})(observer(Main));
