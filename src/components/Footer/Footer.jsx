import logoFooter from './../../../src/assets/images/icon-footer.png';
import logo from './../../../src/assets/images/icon-logo.png';
import './Footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__logo-container'>
                <img className='footer__logo' src={logo} alt="logo" />
                <p className='footer__title'>Кино<span className='footer__title_orange'>Ман</span></p>
            </div>
            <div className='footer__text'>
                <img className='footer__logo' src={logoFooter} alt="logo" />
            </div>
        </footer>
    );
}

export default Footer;