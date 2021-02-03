import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Nav = ({ posnav }) => {

    return(
        <ul className={ `header-nav-links ${  posnav ? 'mostrar' : 'ocultar'  }` }>
            <li className="header-link">
                <Link to="/">
                    Inicio
                </Link>
            </li>
            <li className="header-link">
                <Link to="/habitaciones">
                    Habitaciones
                </Link>
            </li>
            <li className="header-link">
                <Link to="/tour-virtual">
                    Tour Virtual
                </Link>
            </li>
            <li className="header-link">
                <Link to="/spa">
                    Spa
                </Link>
            </li>
            <li className="header-link">
                <Link to="/planes">
                    Planes
                </Link>
            </li>
            <li className="header-link">
                <Link to="/galeria">
                    Galería
                </Link>
            </li>
            <li className="header-link">
                <Link to="/covid-19">
                    Covid-19
                </Link>
            </li>
        </ul>
    )

}

Nav.defaultProps = {
    posnav: false
}

Nav.propTypes = {
    posnav: PropTypes.bool.isRequired
}

export default Nav