import React from 'react'
import { Link } from 'react-router-dom';

import './header.css'

// fontawesome mobile menu icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="appHeader">
            <div className="branding">
                <Link to='/'><h1>Cafecito</h1></Link>
            </div>
            <div className="navigation">
                <ul className="navLinks">
                    {/* <Link to='/menu'><li>menu</li></Link> */}
                    <Link to='/events'><li>events</li></Link>
                    <Link to='/products'><li>products</li></Link>
                </ul>
                <div className="mobileMenu">
                    <FontAwesomeIcon icon={ faBars } size="3x" />
                </div>
            </div>
        </header>                
    )
}

export default Header;
