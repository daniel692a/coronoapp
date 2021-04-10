import './Presentation.css';
import Doctor from '../../assets/doctor.svg';

const Presentation = () => {
    return (
        <section>
            <h1>Cuida la salud de tu <span>Familia</span></h1>
            <img src={Doctor} alt="Doctor revisando a una persona"/>
        </section>
    );
}

export default Presentation;
