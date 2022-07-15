import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import HandlePortableText from '../HandlePortableText'

export default function CategoryCard({title, description, slug, image}) {
    

    return (
        <aside className='card'
               data-aos="fade-up"
               data-aos-duration="2000"
        >
            <div className="card__background">
                <GatsbyImage
                    className='card__img'
                    image={image.imageData}
                    alt={image.altText}
                />
                <div className="card__overlay">
                    
                </div>
            </div>
            <div className="card__content">
                <h2>{title}</h2>
                <div className="card__description">
                    <HandlePortableText value={description}/>
                </div>
            </div>
            <Link to={`/categories/${slug.current}`} className='button__green'>Take A Look</Link>
        </aside>
    )
}
