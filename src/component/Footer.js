import React from 'react'
import footerPic from '../assets/insure-landing-page-master/images/bg-pattern-footer-desktop.svg'
import footerLogo from '../assets/insure-landing-page-master/images/logo.svg'
import facebookIcon from '../assets/insure-landing-page-master/images/icon-facebook.svg'
import twitterIcon from '../assets/insure-landing-page-master/images/icon-twitter.svg'
import pinterestIcon from '../assets/insure-landing-page-master/images/icon-pinterest.svg'
import instagramIcon from '../assets/insure-landing-page-master/images/icon-instagram.svg'

const Footer = () => {
    return (
        <section className = "footerElement">
            <div id = "footer">
            <div className = "footerMobile">
                <img src = {footerPic} />
            </div>
                
                <div className = "footerBar">
                    <img src = {footerLogo} />
                </div>
                <div className = "icons-links">
                    <ul>
                        <li><a href = ""><img src = {facebookIcon} /></a></li>
                        <li><a href = ""><img src = {twitterIcon} /></a></li>
                        <li><a href = ""><img src = {pinterestIcon} /></a></li>
                        <li><a href = ""><img src = {instagramIcon} /></a></li>
                    </ul>
                </div>
                </div>

                    <div className = "footerList">
                        <div className = "company">
                            <h1>our company</h1>
                            <ul>
                                <li><a href = "#">How we work</a></li>
                                <li><a href = "#">Why insure?</a></li>
                                <li><a href = "#">view plans</a></li>
                                <li><a href = "#">reviews</a></li>
                            </ul>
                        </div>
                        <div className = "Help">
                            <h1>Help me</h1>
                            <ul>
                                <li><a href = "#">FAQ</a></li>
                                <li><a href = "#">terms of us</a></li>
                                <li><a href = "#">privacy policy</a></li>
                                <li><a href = "#">cookies</a></li>
                            </ul>
                        </div>
                        <div className = "company">
                            <h1>our company</h1>
                            <ul>
                                <li><a href = "#">sales</a></li>
                                <li><a href = "#">support</a></li>
                                <li><a href = "#">live chat</a></li>
                                
                            </ul>
                        </div>
                        <div className = "others">
                            <h1>others</h1>
                            <ul>
                                <li><a href = "#">career</a></li>
                                <li><a href = "#">press</a></li>
                                <li><a href = "#">licences</a></li>
                                
                        
                            </ul>
                        </div>
                </div>
        </section>
        
         )
 }
                    
                    

export default Footer
