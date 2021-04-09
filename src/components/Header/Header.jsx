import logo from '../../assets/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <figure className="header-logo">
                <img src={logo} alt='Logo Coronoapp' />
            </figure>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="nav-item">Inicio</li>
                    <li>Características</li>
                    <li>Apoyo</li>
                    <li>Contáctanos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;