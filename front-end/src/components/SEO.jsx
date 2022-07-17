import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

export default function Seo({title, description, keywords, author}) {
    
    const { site } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    description
                    title
                    author
                    keywords
                }
            }
        }
    `)

    console.log(site)

    const seo = {
        title: title
        ? `${site.siteMetadata.title} | ${title}`
        : site.siteMetadata.title,
        description: description || site.siteMetadata.description,
        keywords: keywords || site.siteMetadata.keywords,
        author: author || site.siteMetadata.author
       
    }

    return (
        <Helmet>
           <title>{seo.title}</title>
           <meta name="description" content={seo.description} />
           <meta name="keywords" content={seo.keywords} />
           <meta name="author" content={seo.author} />
        </Helmet>
    )
}