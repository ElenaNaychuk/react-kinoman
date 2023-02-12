import { Link } from 'react-router-dom';
import './MovieCard.scss';

function MovieCard(props) {
    const { posterUrl, nameRu, ratingKinopoisk, countries, id } = props;
    return (
        <Link to={`/movie/${id}`} className='movieCard__container' >
            <img className='movieCard__img' src={posterUrl} alt="movie" />
            <div className='movieCard__title'>{nameRu}</div>
            <div className='movieCard__type'>{
                countries.slice(0, 2).join(', ') +
                (countries.length > 2 ? '...' : '')}</div>
            <div className='movieCard__rating'>Рейтинг: <span className='movieCard__rating_orange'> {ratingKinopoisk}</span></div>
        </Link >
    );
}

export default MovieCard;