import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import HandlePortableText from '../HandlePortableText'

import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { FaPaw } from 'react-icons/fa'

export default function ServiceCard({path, title, subtitle, excerpt, body, price, image}) {
    

    return (
        <aside className='card'>
            <GatsbyImage
                className='card__img'
                image={image.imageData}
                alt={image.altText}
           />
           <div className="card__content">
               <div className="card__header">
                    <h4 className="card__title">{title}</h4>
                    <h5 className="card__subtitle">{subtitle}</h5>
               </div>
              <div className="card__body">
                 <p>P$ <span>{price}</span></p>
                 <p>Features</p>
                 <HandlePortableText value={body}/>
              </div>
           </div>
           <div className="card__menu">
               <div className="card__contactLinks">
                   <a href="mailto:example@email.com"><IoMail className='card__icon'/></a>
                   <a href="tel:+17802345678"><FaPhoneAlt className='card__icon'/></a>
               </div>
               <Link to={`/services/${path}`} className='button__blue'><FaPaw/> Read More</Link>
           </div> 
        </aside>
    )
}
