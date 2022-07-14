import React, { useContext, useState, useEffect } from 'react'
import { ModalSearchContext } from '../context/ModalSearchContext'
import axios from 'axios'
import { CgClose } from 'react-icons/cg'
import SearchField from './SearchField'
import { graphql, useStaticQuery } from 'gatsby'
import SearchResult from './SearchResult'

const query = graphql`
{
    localSearchBlogs {
        publicStoreURL
        publicIndexURL
    }
    localSearchCategories {
        publicStoreURL
        publicIndexURL
    }
    localSearchServices {
        publicStoreURL
        publicIndexURL
    }
}
`

export default function SearchModal() {

    const { isModalSearchOpen, closeModalSearch }  = useContext(ModalSearchContext)

    const handleSearchModal = () => {
        closeModalSearch()
    }

    const { isSearchModalOpen } = useContext(ModalSearchContext);
    const [ searchQuery, setSearchQuery ] = useState('')
    const [blogsIndexStore, setBlogsIndexStore] = useState(null);
    const [categoriesIndexStore, setCategoriesIndexStore] = useState(null);
    const [servicesIndexStore, setServicesIndexStore] = useState(null);
    const data = useStaticQuery(query)

    useEffect(() => {
        if (isSearchModalOpen) {
          document.body.style.overflow = 'hidden';
          setSearchQuery('');
        } else {
          document.body.style.overflow = 'initial';
        }
    }, [isSearchModalOpen]);

    const {
        publicStoreURL: blogsPublicStoreURL,
        publicIndexURL: blogsPublicIndexURL,
    } = data.localSearchBlogs;
    const {
        publicStoreURL: categoriesPublicStoreURL,
        publicIndexURL: categoriesPublicIndexURL,
    } = data.localSearchCategories;
    const {
        publicStoreURL: servicesPublicStoreURL,
        publicIndexURL: servicesPublicIndexURL,
    } = data.localSearchServices;

    const handleOnFocus = async () => {
        if(blogsIndexStore && categoriesIndexStore && servicesIndexStore) return

        const [
            {data: blogsIndex},
            {data: blogsStore},
            {data: categoriesIndex},
            {data: categoriesStore},
            {data: servicesIndex},
            {data: servicesStore},
        ] = await Promise.all([
            axios.get(blogsPublicIndexURL),
            axios.get(blogsPublicStoreURL),
            axios.get(categoriesPublicIndexURL),
            axios.get(categoriesPublicStoreURL),
            axios.get(servicesPublicIndexURL),
            axios.get(servicesPublicStoreURL),
        ])
        setBlogsIndexStore({
            index: blogsIndex,
            store: blogsStore,
        })
        setCategoriesIndexStore({
            index: categoriesIndex,
            store: categoriesStore,
        })
        setServicesIndexStore({
            index: servicesIndex,
            store: servicesStore,
        })
        
    }

    if(!isModalSearchOpen) return null
    return (
        <div className='modal'>
            <button 
                className='modal__toggle'
                onClick={handleSearchModal} 
                onKeyDown={handleSearchModal}
                tabIndex={0}
            >
                <CgClose/>
            </button>
            <div className="modal__content">
                <div>
                    <h3>Let's Play Fetch!</h3>
                    <p>...our doggies are hard at work looking for your content</p>
                </div>
                <SearchField
                    value={searchQuery}
                    setValue={setSearchQuery}
                    onFocus={handleOnFocus}
                />
                {
                    searchQuery 
                    && blogsIndexStore
                    && categoriesIndexStore
                    && servicesIndexStore
                    && (
                       <div className='modal__result'>
                           <SearchResult
                                searchQuery={searchQuery}
                                blogsIndexStore={blogsIndexStore}
                                categoriesIndexStore={categoriesIndexStore}
                                servicesIndexStore={servicesIndexStore}
                           />
                       </div> 
                    )
                }
            </div>
        </div>
    )
}
