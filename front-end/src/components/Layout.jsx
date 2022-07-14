import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ModalSearchContextProvider } from '../context/ModalSearchContext'
import SearchModal from './SearchModal'

export default function Layout({ children }) {
  return (
        <>
            <ModalSearchContextProvider>
                <Header/>
                <SearchModal/>
                {children}
                <Footer/>
            </ModalSearchContextProvider>
        </>
    );
}
