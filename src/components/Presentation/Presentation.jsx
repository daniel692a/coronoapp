import './Presentation.css';
import Doctor from '../../assets/doctor.svg';
import Play from '../../assets/button-play.svg';

const Presentation = () => {
    return (
        <section className="main">
            <section className="main-content">
                <h2 className="title">Cuida la salud de tu <span>familia.</span></h2>
                <p className="description">Todo en un destino para consultas de salud de COVID-19. Consulte a más de 10,000 trabajadores de la salud sobre sus inquietudes.</p>
                <button className="btn">EMPEZAR</button>
                <button className="btn-play"><img src={Play} aria-label="Play button" />VER VIDEO</button>
            </section>
            <figure className="main-img">
                <img src={Doctor} alt="Doctor revisando un paciente" />
            </figure>
        </section>
    );
}

export default Presentation;
