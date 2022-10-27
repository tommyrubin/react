import React from "react";
import logo from '../img/logo.png'
import './Logo.css'

const Logo = () => {
    return (
        <a href='#'>
            <img className='Logo' src={logo}></img>
        </a>
    )

}

export default Logo