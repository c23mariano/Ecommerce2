import React from "react";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#"> El Dato Car</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="#">Autos</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Camionetas</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Motos</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Carrito</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;