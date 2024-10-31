import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/img/logo.jpg';

const Header = ({ 
    imageSrc = logo, 
    imageAlt = "Logo Bakery", 
    brandUrl, 
    navLinks 
}) => {
    // Estado para manejar la visibilidad del menú
    const [isVisible, setIsVisible] = useState(false);

    // Función para alternar la visibilidad del menú
    const toggleNav = () => {
        setIsVisible(prevVisible => !prevVisible);
    };

    return (
        <header className="header">
            <nav className="nav">
                <NavLink to={brandUrl}>
                    <img src={imageSrc} alt={imageAlt} className="logo" />
                </NavLink>
                <button className="nav-toggle" onClick={toggleNav}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <ul className={`navbar ${isVisible ? 'navbar_visible' : ''}`}>
                    {navLinks.map((link, index) => (
                        <li className="navbar-item" key={index}>
                            <NavLink to={link.url}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    brandUrl: PropTypes.string.isRequired,
    navLinks: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Header;
