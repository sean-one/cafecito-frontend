import React from 'react'
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {
    return (
        <header className="appHeader">
            <div className="branding">
                <h1>Cafecito</h1>
            </div>
            <div className="navigation">
                <ul className="navLinks">
                    <Link to='/menu'><li>menu</li></Link>
                    <Link to='/products'><li>products</li></Link>
                </ul>
            </div>
        </header>                
    )
}

export default Header;
