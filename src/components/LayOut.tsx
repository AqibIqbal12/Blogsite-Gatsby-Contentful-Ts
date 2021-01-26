import React from 'react';
import NavBar from './Navigation/NavBar';
import Footer from './Footer/Footer';

const LayOut = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}
export default LayOut;