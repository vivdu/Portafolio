import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Error4(){
    return (
        <div class="error404">
            <Link to="/home" className='error item-nav'><i class="fa-solid fa-user"></i>Volver al Home</Link>
            <h2>Error 404: La página no existe</h2>
            <img src="https://cdn3.iconfinder.com/data/icons/lightly-icons/30/652868-surprised-480.png" alt='icono'></img>
        </div>
    )
};

export default Error4;