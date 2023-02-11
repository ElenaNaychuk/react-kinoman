import './Header.scss';
import logo from './../../../src/assets/images/icon-logo.png'

function Header() {
    return (
        <header className='header__container'>
            <div className='header'>
                <div className='header__logo-container'>
                    <img className='header__logo' src={logo} alt="logo" />
                    <p className='header__title'>Кино<span className='header__title_orange'>Ман</span></p>
                </div>
                <div className='header__search-container'>
                    <input className='header__input-search' type="text" placeholder='Поиск' />
                    <button className='header__btn'>Найти</button>
                </div>
            </div>
            <nav className='header__nav-container'>
                <ul className='header__nav'>
                    <li>Все</li>
                    <li>Фильмы</li>
                    <li>Сериалы</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;