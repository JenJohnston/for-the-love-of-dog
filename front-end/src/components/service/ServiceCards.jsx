import React from 'react'
import ServiceCard from './ServiceCard'

export default function ServiceCards({services}) {
    

    return (
        <>
            {services && services.map(service =>
                <ServiceCard
                    path={service.slug.current}
                    key={service.id}
                    title={service.title}
                    subtitle={service.subtitle}
                    excerpt={service._rawExcerpt}
                    body={service._rawBody}
                    price={service.price}
                    image={{
                        imageData: service.coverImage.asset.gatsbyImageData,
                        altText: service.coverImage.alt,
                    }}
                />)}
        </>
    )
}
