import React from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { BlogResultItems, CategoryResultItem, ServiceResultItem } from './SearchItems'
 
export default function SearchResult({
    searchQuery,
    blogsIndexStore,
    categoriesIndexStore,
    servicesIndexStore
}) {
    const blogsResult = useFlexSearch(
        searchQuery,
        JSON.stringify(blogsIndexStore.index),
        blogsIndexStore.store
    )
    const categoriesResult = useFlexSearch(
        searchQuery,
        JSON.stringify(categoriesIndexStore.index),
        categoriesIndexStore.store
    )
    const servicesResult = useFlexSearch(
        searchQuery,
        JSON.stringify(servicesIndexStore.index),
        servicesIndexStore.store
    )

    if (
        blogsResult.length === 0 &&
        categoriesResult.length === 0 &&
        servicesResult.length === 0
    ) {
        return <p>No Result Found.</p>
      }

    return (
        <>
            {blogsResult.length > 0 && (
                <>
                    <h2 className='search__header'>Blogs</h2>
                    {blogsResult.map((result) => (
                        <BlogResultItems
                            key={result.id}
                            blog={result}
                        />
                    ))}
                </>
            )}
            {categoriesResult.length > 0 && (
                <>
                    <h2 className='search__header'>Categories</h2>
                    {categoriesResult.map((result) => (
                        <CategoryResultItem 
                            key={result.id} 
                            category={result} 
                        />
                    ))}
                </>
            )}
            {servicesResult.length > 0 && (
                <>
                    <h2 className='search__header'>Services</h2>
                    {servicesResult.map((result) => (
                        <ServiceResultItem
                            key={result.id}
                            service={result}
                        />
                    ))}
                </>
            )}
        </>
    )
}