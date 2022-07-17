//dependencies

import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

// icons

import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import {BiCopyright} from 'react-icons/bi'
import FooterMedia from './FooterMedia'

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
                        <Link to='/index' className='footer__link'>
                            <StaticImage
                                className='footer__logo'
                                src="../images/fttd-logo-dk.png"
                                alt="logo image for for the love of dog"
                                
                            />
                        </Link>
                </div>
                <div className="icon__container">
                    <div className="icon__links">
                        <a href="tel:7801234567" className='footer__icon'>
                            <FaPhoneAlt/>
                            <span>{`(780)123-4567`}</span>
                        </a>
                        <a href="mailto:example@email.com" className='footer__icon'>
                            <IoMail/>
                            <span>example@email.com</span>
                        </a>
                    </div>
                    <FooterMedia/>
                </div>
                <div className="footnotes">
                    <div className='copywrite'><BiCopyright className='copyicon'/><p> 2022 For The Love Of Dog. All Rights Reserved</p></div>
                    <p>Developed By <a href="https://jennifer-johnston.netlify.app/" target="_blank" rel="noreferrer">Illure | Design</a></p>
                    <p>Schnauzer Model generously provided by <a href="https://sketchfab.com/Nyilonelycompany" target="_blank" rel="noreferrer">Nyilonelycompany</a></p>
                </div>

            </div>

            

        </footer>
    )
}
