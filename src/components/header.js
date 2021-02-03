import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Nav from './nav';
import SocialFollow from './socialFollow';

const HeaderContainer = styled.div`
    height: 100%;
    width: 100%;
`;

const Header = () => {

    const { logo } = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "logo.svg"}) {
                publicURL
            }
        }
    `)

    

    return (
    
        <HeaderContainer>
            <header className="header">
                <figure>
                    <Link to="/">
                        <img src={ logo.publicURL } alt="Hotel Bahía Olivo Villa e Leyva" />
                    </Link>
                </figure>
                <nav>
                    <Nav />  
                </nav>
                <SocialFollow />
            </header>
        </HeaderContainer>
        
    )

}

export default Header;
