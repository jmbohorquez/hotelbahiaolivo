import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet'

import GlobalClass from './ui/globalClass';
import Header from './header'
import HeaderMobile from './headerMobile'
import ContactoBoton from './callWapButton';
import Footer from './footer'

const Layout = ({ children, sitePageClass }) => {

    const isDesktop = useMediaQuery( { minWidth: 769 } );
    
    return (
        
        <>
            <GlobalClass />
            
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Roboto:ital,wght@0,100;0,400;0,700;1,100;1,400&display=swap" rel="stylesheet" />
            </Helmet>
            <div className="site-structure">
                
                { isDesktop ? <Header /> : <HeaderMobile /> }
                
                <main className={ `body-content content-${ sitePageClass }` }>
                    { children }
                </main> 

                <ContactoBoton /> 
                    
                <Footer />
            </div>
        </>
    )
}

Layout.defaultProps = {
    sitePageClass: 'hotel-BO'
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sitePageClass: PropTypes.string.isRequired
}

export default Layout
