import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

export default function Seo({title, description}) {
    
    const { site } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    description
                    title
                }
            }
        }
    `)

    const seo = {
        title: title
        ? `${site.siteMetadata.title} | ${title}`
        : site.siteMetadata.title,
        description: description || site.siteMetadata.description,
    }

    return (
        <Helmet>
           <title>{seo.title}</title>
           <meta name="description" content={seo.description} />
        </Helmet>
    )
}