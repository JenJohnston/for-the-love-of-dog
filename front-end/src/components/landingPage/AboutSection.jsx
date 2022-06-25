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
            <div className="img__container">
                <StaticImage
                        className='about__img'
                        src="../../images/about-section.jpg"
                        alt="logo image for for the love of dog"
                        
                />
            </div>
            <p>Welcome to For The Love of Dog where we help you and your dog to thrive in an environment of empathy, love and kindness.</p>
            <p>By using modern methods in behavioural modification and the latest in scientific research, we are here to help train you're most adorable member of the family.</p>
            <Link to="/about" className='about__link'>
                <p>Find Out More</p>
                <IoMdPaw className="about__icon"/>
            </Link>
        </section>
    )
}
