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
                    <li className="nav-item">Características</li>
                    <li className="nav-item">Apoyo</li>
                    <li className="nav-item">Contáctanos</li>
                </ul>
            </nav>
            <div className="rect"></div>
        </header>
    )
}

export default Header;