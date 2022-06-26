import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

import { IoMdPaw } from 'react-icons/io'

import BlogCards from '../blog/BlogCards'

export default function FeaturedBlogs() {

  const data = useStaticQuery(graphql`
        {
          allSanityFeatured {
            nodes {
              blogs {
                title
                id
                _rawExcerpt
                categories {
                  title
                  slug {
                    current
                  }
                }
                publishedOn
                slug {
                  current
                }
                coverImage {
                  alt
                  asset {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
    `)

    const featuredBlogs = data.allSanityFeatured.nodes[0].blogs
    
 
    return (
        <section className='featuredBlogs container'>
            <div className="featuredBlogs__header">
                <h2>The Dog Blogs</h2>
                <p>Welcome to For The Love of Dog where we help you and your dog to thrive in an environment of empathy, love and kindness.</p>
            </div>
            <div className="featuredBlogs__cards">
                <BlogCards blogs={featuredBlogs} />
            </div>
            <Link to="/blogs" className='featuredBlogs__link'>
                <p>Read Our Blogs</p>
                <IoMdPaw className="featuredBlogs__icon"/>
            </Link>
        </section>
    )
}
