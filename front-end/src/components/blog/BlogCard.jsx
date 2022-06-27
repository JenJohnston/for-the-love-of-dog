import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { format } from 'date-fns'
import { Link } from 'gatsby'
import HandlePortableText from '../HandlePortableText'

import { FaPaw } from 'react-icons/fa'

export default function BlogCard({title, path, image, publishedOn, categories, excerpt}) {

    console.log(publishedOn)
    
    return (
        <aside className='card'>
           <GatsbyImage
                className='card__img'
                image={image.imageData}
                alt={image.altText}
           />
           <div className='card__header'>
                <p className='card__categories'>
                    {categories.map((item, index) => (
                        <span key={item.slug.current}>
                            <Link className='card__category' to={`/categories/${item.slug.current}`}>
                                {item.title}
                            </Link>
                            {index < categories.length - 1 ? ' | ' : ''}
                        </span>
                    ))}
                </p>
                <h4 className='card__title'>{title}</h4>
                {publishedOn && (
                        <p className='card__date'>{format(new Date(publishedOn), 'p, MMMM dd, yyyy')}</p>
                    )}
           </div>
           <div className='card__content'>
               <HandlePortableText value={excerpt}/>
           </div>
           <Link to={`blogs/${path}`} className='button__blue'><FaPaw/> Read More</Link>
        </aside>
    )
}
