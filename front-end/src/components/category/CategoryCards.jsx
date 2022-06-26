import React from 'react'
import CategoryCard from './CategoryCard'

export default function CategoryCards({categories}) {
    

    return (
        <>
            {categories.map(item => (
                <CategoryCard
                    key={item.id}
                    title={item.title}
                    description={item._rawDescription}
                    slug={item.slug}
                    image={{
                        imageData: item.coverImage.asset.gatsbyImageData,
                        altText: item.coverImage.alt,
                    }}
                />
            ))}
        </>
    )
}
