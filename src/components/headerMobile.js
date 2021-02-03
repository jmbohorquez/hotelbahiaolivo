import React, { useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from "gatsby"
import Nav from './nav'


const HeaderMobile = () => {

    const [ posnav, guardarPosnav ] = useState( false );

    const logoQuery = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "logo-mobile.svg"}) {
            publicURL
            }
        }
    `)

    const { file: { publicURL } } = logoQuery

    const handleClick = () => {
        
        if( ! posnav ){
            guardarPosnav( true )
        }else{
            guardarPosnav( false )
        }
    }

    return (
    
        <header className="header">
            <figure>
                <Link to="/">
                    <img src={ publicURL } alt="Hotel Bahía Olivo Villa e Leyva" />
                </Link>
            </figure>
            <nav className="header-bar-nav-mobile">
                <button 
                    className={ `burger-button-container ${ posnav ? 'cerrar' : 'abrir' }` }
                    onClick={ handleClick }
                >
                    <div className="burger-button-line line-1"></div>
                    <div className="burger-button-line line-2"></div>
                    <div className="burger-button-line line-3"></div>
                </button>
                <Nav 
                    posnav = { posnav }
                />
            </nav>
        </header>
    
    )

}

export default HeaderMobile