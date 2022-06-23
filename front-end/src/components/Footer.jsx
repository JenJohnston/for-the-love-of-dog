import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function Footer() {
    

    return (
        <footer className='footer'>
            <div className="footer__background">
                <svg className='bezier__curve' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path fill="#B1C63D" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,202.7C672,203,768,181,864,154.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <div className="hero_rectangle">
                </div>
            </div>
            <div className="footer__content container">
                <div className="footer__logoContainer">
                        <Link to='/' className='footer__link'>
                            <StaticImage
                                className='footer__logo'
                                src="../../images/fttd-logo-dk.png"
                                alt="logo image for for the love of dog"
                                
                            />
                        </Link>
                </div>
            </div>
            
        </footer>
    )
}
