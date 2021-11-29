import React from 'react'
import logo from '../assets/insure-landing-page-master/images/logo.svg'

import './css/nav.css'

const Navbar = () => {
    return (
        <nav>
            <div className = "logo">
                <img src = {logo} alt = "" />
                </div>
                <div className = "list">
                    <ul>
                        <li><a href= "#">How we work</a></li>
                        <li><a href= "#">blog</a></li>
                        <li><a href= "#">Account</a></li>
                    <button id="btn">View Plan</button>
                    </ul>

                </div>
        </nav>
    )
}

export default Navbar
