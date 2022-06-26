import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import HandlePortableText from '../HandlePortableText'

export default function CategoryCard({title, description, slug, image}) {
    

    return (
        <aside className='categoryCard'>
            <div className="categoryCard__background">
                <GatsbyImage
                    className='card__img'
                    image={image.imageData}
                    alt={image.altText}
                />
            </div>
            <div className="categoryCard__content">
                <h2>{title}</h2>
                <div className="category__description">
                    <HandlePortableText value={description}/>
                </div>
            </div>
            <Link to={`/categories/${slug.current}`} className='button__green'>Take A Look</Link>
        </aside>
    )
}
