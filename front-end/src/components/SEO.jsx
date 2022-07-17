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
           <meta name="google-site-verification" content="3tk9f2PTIeG__vN8qBbud3KJb3ayX57C8aDeKjYnGsA" />
        </Helmet>
    )
}