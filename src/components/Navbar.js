import './Component.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/home" className='item-nav'><i class="fa-solid fa-user"></i>Home</Link>
            <Link to="/studies" className='item-nav'><i class="fa-solid fa-graduation-cap"></i>Estudios</Link>
            <Link to="/jobs" className='item-nav'><i class="fa-solid fa-timeline-arrow"></i>Experiencia</Link>
            <Link to="/projects" className='item-nav'><i class="fa-solid fa-rectangle-history"></i>Proyectos</Link>
            <Link to="/contact" className='item-nav'><i class="fa-solid fa-circle-envelope"></i>Contacto</Link>
        </nav>
     
    );
}

export default Navbar;