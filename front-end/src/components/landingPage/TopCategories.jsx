import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

import { IoMdPaw } from 'react-icons/io'
import CategoryCards from '../category/CategoryCards'

export default function TopCategories() {

    const data = useStaticQuery(graphql`
        {
            allSanityFeatured {
            nodes {
                category {
                id
                title
                coverImage {
                    alt
                    asset {
                      gatsbyImageData
                    }
                }
                slug {
                    current
                }
                _rawDescription
                }
            }
            }
        }`)
    
    const topCategories = data.allSanityFeatured.nodes[0].category

    return (
        <section className='topCategories container'>
            <div className="topCategories__header">
                <h2>Our Categories</h2>
                <p>Welcome to For The Love of Dog where we help you and your dog to thrive in an environment of empathy, love and kindness.</p>
            </div>
            <div className="topCategories__cards">
                <CategoryCards categories={topCategories}/>
            </div>
            <Link to="/categories" className='topCategories__link'>
                <p>View Our Categories</p>
                <IoMdPaw className="topCategories__icon"/>
            </Link>
        </section>
    )
}
