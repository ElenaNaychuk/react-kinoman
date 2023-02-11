import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './../src/pages/MainPage/MainPage.jsx';
import ErrorPage from './../src/pages/ErrorPage/ErrorPage.jsx';
import MoviePage from './../src/pages/MoviePage/MoviePage.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/movie" element={<MoviePage />} />
        <Route exact path="*" element={<ErrorPage />} />
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
