import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from "./components/ButtonLink";
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo"/>
            </Link>
            <ButtonLink className="ButtonLink" href="/cadastro/video"/>
        </nav>
    );
}

export default Menu;