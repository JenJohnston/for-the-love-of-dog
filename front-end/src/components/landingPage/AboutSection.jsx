import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { IoMdPaw } from 'react-icons/io'

export default function AboutSection() {
    

    return (
        <section className='about container'>
            <div className="about__header">
                <p>Well Hello...</p>
                <h2>Welcome</h2>
            </div>
            <div className="about__card" data-aos="fade-right">
                <div className="img__container">
                    <StaticImage
                            className='about__img'
                            src="../../images/about-section.jpg"
                            alt="logo image for for the love of dog"
                            
                    />
                </div>
                <div className="about__content">
                    <p>Welcome to For The Love of Dog a premier dog grooming spa and training studio based in Edmonton, Alberta where we offer a wide range of services to help you care for your beloved family member</p>

                    <p>With over 20 years of experience in dog grooming, dog training and with a strong educational background, we use the latest modern methods in dog behaviour, psychology and ethical care as part of our core philosophy.</p>
                </div>
            </div>
            <Link to="/about" className='about__link' data-aos="zoom-in">
                <p>Find Out More</p>
                <IoMdPaw className="about__icon"/>
            </Link>
        </section>
    )
}
