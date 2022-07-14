import React, { createContext, useState, useMemo } from "react";

const ModalSearchContext = createContext()

const ModalSearchContextProvider = ({ children }) => {
    const [ isModalSearchOpen, setIsModalSearchOpen ]  = useState()

    const initValue = useMemo(() => ({
        
            isModalSearchOpen,
            openModalSearch: () => {
                setIsModalSearchOpen(true)
            },

            closeModalSearch: () => {
                setIsModalSearchOpen(false)
            }
        }),
        [isModalSearchOpen]
    )
    return (
        <ModalSearchContext.Provider value={initValue}>
            {children}
        </ModalSearchContext.Provider>
    )
}

export {ModalSearchContext, ModalSearchContextProvider}