import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { observer, inject } from "mobx-react";

import MainPage from './../src/pages/MainPage/MainPage.jsx';
import ErrorPage from './../src/pages/ErrorPage/ErrorPage.jsx';
import MoviePage from './../src/pages/MoviePage/MoviePage.jsx';

function App({ moviesStore }) {

    useEffect(() => { moviesStore.loadAllMovies() }, []);

    return (
        <Router>
            <Routes>
                <Route exact path="/movie/:id" element={<MoviePage />} />
                <Route exact path="*" element={<ErrorPage />} />
                <Route exact path="/" element={<MainPage />} />
            </Routes>
        </Router>
    );
}

export default inject((store) => {
    const { moviesStore } = store;
    return { moviesStore }
})(observer(App));
