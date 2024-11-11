import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/img/logo.jpg';
import { UserContext } from '../contexts/UserContext';

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

    const { user, handleLogout } = useContext(UserContext);
    const excludedLoggedLinks = ["Login", "Register"];
    const protectedLinks = ["Cards", "Galery","Contact"];
    const excludeLinks = user ? protectedLinks : excludedLoggedLinks;

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
                    {navLinks.filter(link => excludeLinks.includes(link.name))
                    .map((link, index) => (
                        <li className="navbar-item" key={index}>
                            <NavLink to={link.url}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                    <li className="navbar-item">
                    <a onClick={handleLogout}>Logout</a>
                    </li>
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
