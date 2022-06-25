import React from 'react';
import './Nav.css'

function Nav(props) {
    return (
        <div className='nav'>
         <img 
            className='nav__logo'
            src='/logo.png'
            alt='Netfilx Logo'
         /> 
            
        </div>
    );
}

export default Nav;