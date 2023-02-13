import { Link } from 'react-router-dom';
import './ErrorPage.scss';

function ErrorPage() {
    return (
        <div className='errorPage__container'>
            <div className='errorPage__wrapper'>
                <h1 className='errorPage__title'>Упс...</h1>
                <p className='errorPage__message'>Страница не найдена</p>
                <div className='errorPage__message'>
                    Вернуться на <Link to='/' className='errorPage__link'>главную</Link>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;