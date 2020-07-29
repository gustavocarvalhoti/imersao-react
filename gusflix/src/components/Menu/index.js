import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from "./components/ButtonLink";

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} Alt="Logo"/>
            </a>
            <ButtonLink className="ButtonLink" href="/"/>
        </nav>
    );
}

export default Menu;