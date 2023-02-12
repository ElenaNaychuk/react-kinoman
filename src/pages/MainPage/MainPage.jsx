import { observer, inject } from "mobx-react";

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieList from "../../components/MovieList/MovieList";
import './MainPage.scss';

function MainPage({ movies }) {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default inject((store) => {
    const { moviesStore } = store;
    const { movies } = moviesStore;
    return { movies }
})(observer(MainPage));
