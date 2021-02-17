import React from 'react';
import { Link } from 'react-router-dom';

import cafecitologo from '../../imgs/cafecitoC-white-lrg.png';
import './landing.css';

// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Landing() {
    return (
        <div className="landingPage">
            <div className="brandingLogo">
                <img src={cafecitologo} alt='cafecito the brand' />
            </div>
            <div className="socialHub">
                <div>
                    <a href={`${process.env.REACT_APP_INSTAGRAM_LINK}`} target="blank"><FontAwesomeIcon icon={faInstagram} size='6x' /></a>
                </div>
                <div>
                    <a href={`${process.env.REACT_APP_FACEBOOK_LINK}`} target="blank"><FontAwesomeIcon icon={faFacebook} size='6x' /></a>
                </div>
            </div>
            <Link to='/menu'><button>ENTER</button></Link>
        </div>
    )
}

export default Landing;