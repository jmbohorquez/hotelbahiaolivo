import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';


import BotonesHero from '../components/botonesHero';

const HeroContainer = styled( BackgroundImage )`
    height: 60vh;
    width: 100%;

    @media( min-width: 769px ){
        height: 100vh;
        position: relative;
        z-index: 9;
    }

`;

const HeroInnerContainer = styled.div`
    align-items: flex-end;
    background-color: rgba(0,0,0,0.35);
    display: flex;
    justify-content: flex-start;
    height: 100%;
    width: 100%;

    @media( min-width: 381px ) and ( max-width: 768px ){
        justify-content: space-between;
    }
    @media( min-width: 769px ){
        align-items: center;
        position: relative;
    }

    .botones-hab-planes{
        display: flex;
        flex-flow: column;
        padding: 1rem;
        position:relative;
        width: 148px;

        @media( min-width: 640px ) and ( max-width: 768px ){
            width: 180px;
        }
        @media( min-width: 769px ){
            bottom: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 2rem;
            margin-bottom: -100px;
            position: absolute;
            right: 1rem;
            width: 60%;
        }
    }

    .botones-hab-planes-card{
        background: #FFF;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        margin-bottom: 1rem;

        :last-of-type{
            margin-bottom: 0;
        }

        a{
            display: block;
            line-height: 0;

            div{
                width: 100%;
            }
        }

        picture{
            img{
                position: static !important;
            }
        }

        h2{
            font-size: clamp( 18px, 3vw, 2.5rem );
            margin: 0;
            padding: 1rem;
            text-align: center;

            a{
                color: #000;
                line-height: normal;
            }
        }

        @media( min-width: 769px ){
            margin: 0;

            :first-child{
                grid-column: 1 / 2;
            }
            :last-child{
                grid-column: 2 / 3;
            }
        }
        
    }
`;

const HeroTextContainer = styled.div`
    padding: 1rem;
    width: 40%;
    
    h1, h3, p{
        color: #FFF;
        font-family: 'Roboto', sans-serif;
        text-shadow: 1px 2px 4px rgba(22, 22, 22, 0.92);
    }

    .texto-intro{
        font-weight: 100;
        margin:0;
        text-transform: uppercase;
    }
    .titulo{
        font-size: clamp( 2rem, 5vw, 4rem );
        font-weight: 400;
        margin: 0;
        text-transform: uppercase;
        line-height: normal;
    }
    .copy{
        font-style: italic;
        line-height: 1.2;
        margin: 0;
    }

    @media( min-width: 518px ) and ( max-width: 768px ){
        
        width: 70%;

        .texto-intro{
            font-size: clamp( 1.8rem, 5vw, 3rem );
        }
        .titulo{
            font-size: clamp( 3rem, 8vw, 4.6rem );
        }
        .copy{
            font-size: clamp( 1.3rem, 5vw, 2.5rem );
            margin-top: 1rem;
        }
    }

    @media( min-width: 769px ){
        padding-left: 2rem;
        width: 60%;

        .texto-intro{
            font-size: clamp( 1rem, 3vw, 3rem );
        }
        .titulo{
            font-size: clamp( 3rem, 3vw, 6rem );
            line-height: 1;
        }
        .copy{
            font-size: clamp( 1.2rem, 2vw, 2.5rem );
            margin-top: 1rem;
        }

        .btn{
            margin-top: 2rem;
        }
    }

`;

const HeroInicio = () => {

    const { imageMobile, imageDesktop, whatsapp } = useStaticQuery(
        graphql`
            query{
                imageMobile: file( relativePath: { eq: "inicio-banner-tablet-hotel-bahia-olivo.jpg" } ){
                    childImageSharp {
                        fluid(maxWidth: 768, quality: 100 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageDesktop: file( relativePath: { eq: "inicio-banner-desktop-hotel-bahia-olivo.jpg" } ){
                    childImageSharp {
                        fluid( maxWidth: 1440, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                whatsapp: file(relativePath: {eq: "whatsapp.svg"}) {
                    publicURL
                }
            }
        `
    );

    const isMobile = useMediaQuery( { maxWidth: 768 } );
    const isPhone = useMediaQuery( { maxWidth: 414 } );
    
    return (
        <HeroContainer 
            tag={ 'section' }
            fluid={ isMobile ? imageMobile.childImageSharp.fluid : imageDesktop.childImageSharp.fluid }
            fadeIn="soft"
        >
            <HeroInnerContainer>
                
                { ! isPhone && (
                    <HeroTextContainer>
                        <p className="texto-intro">Intimo, exclusivo</p>
                        <h1 className="titulo">Con servicio personalizado</h1>
                        <h3 className="copy">A tan solo 3 cuadras y media de la plaza principal de Villa…</h3>
                        <a href="https://api.whatsapp.com/send?phone=+573143339798&text=Hola,%20busco%20información%20sobre%20el%20hotel" 
                            className="btn"
                        >
                            <img src={ whatsapp.publicURL } alt="Reservar Hotel Bahía Olivo Villa de Leyva" />
                            Reservar
                        </a>
                    </HeroTextContainer>
                ) }
                
                <BotonesHero />

            </HeroInnerContainer>
        </HeroContainer>
    );

}

export default HeroInicio;