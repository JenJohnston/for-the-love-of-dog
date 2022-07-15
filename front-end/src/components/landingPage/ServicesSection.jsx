import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { IoMdPaw } from 'react-icons/io'

export default function ServicesSection() {
    

    return (
        <section className='services container'>
            <div className="services__header">
                <p>For Your Cutest Family Member</p>
                <h2>Our Services</h2>
            </div>
            <div className="services__card" data-aos="fade-left">
                <div className="img__container">
                    <StaticImage
                            className='services__img'
                            src="../../images/services-section.jpg"
                            alt="woman giving dog a bath"
                            
                    />
                </div>
                <div className="services__content">
                    <p>Welcome to For The Love of Dog where we help you and your dog to thrive in an environment of empathy, love and kindness.</p>
                    <p>By using modern methods in behavioural modification and the latest in scientific research, we are here to help train you're most adorable member of the family.</p>
                </div>
            </div>
            <Link to="/services" className='services__link' data-aos="zoom-in">
                <IoMdPaw className="services__icon"/>
                <p>See Our Services</p>
            </Link>
        </section>
    )
}
