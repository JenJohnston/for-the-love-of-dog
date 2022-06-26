import React from 'react'
import BlogCard from './BlogCard'


export default function BlogCards({blogs}) {
    

    return (
        <>
            {blogs && blogs.map(blog => 
                <BlogCard
                    title={blog.title}
                    path={blog.slug.current}
                    key={blog.id}
                    categories={blog.categories}
                    image={{
                        imageData: blog.coverImage.asset.gatsbyImageData,
                        altText: blog.coverImage.alt,
                    }}
                    publishedOn={blog.publishedOn}
                    excerpt={blog._rawExcerpt}
                />)}
        </>
    )
}
