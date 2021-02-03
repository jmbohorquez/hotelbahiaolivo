import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';
import BotonesHero from '../components/botonesHero';

const BackgroundRestaurante = styled( BackgroundImage )`
    height: 100vh;
    width: 100%;
`;

const BackgroundRestauranteInner = styled.div`
    background-color: rgba(0,0,0,.3);
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;

    .botones-hab-planes{
        bottom: 0;
        display: flex;
        column-gap: 2rem;
        flex-flow: row nowrap;
        padding: 2rem;
        position:absolute;
        width: 100%;

        @media( min-width: 640px ) and ( max-width: 768px ){
            right: 0;
            width: 70%;
        }
        @media( min-width: 769px ){
            bottom: auto;
            top: 10rem;
            display: flex;
            column-gap: 2rem;
            position: absolute;
            right: 1rem;
            width: 50%;
        }
    }

    .botones-hab-planes-card{
        background: #FFF;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        width: 50%;

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
        
    }
`;

const TextWrapper = styled.div`
    padding: 2rem;

    h1{
        color: #FFF;
        font-size: 5rem;
        margin: 0;
    }
    p{
        color: #FFF;
        font-weight: 100;
        margin: 0;
    }

    .precios-container{
        padding-top: 4rem;
    }
    .precios-titulo{
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 400;
    }
    .precio-cantidad{
        font-size: 3rem;
    }

    @media( min-width: 640px ) and ( max-width: 768px ){
        width: 60%;

        h1{
            font-size: 7rem;
        }
        p{
            color: #FFF;
            font-weight: 100;
            margin: 0;
        }
    }

    @media( min-width: 769px ){
        padding-top: 10rem;
        width: 50%;

        h1{
            font-size: 7rem;
        }
        p{
            font-size: 2rem;
        }

        .precios-titulo{
            font-size: 3rem;
        }
        .precio-cantidad{
            font-size: 4rem;
        }
    }
`;

const HeroRestaurante = () => {

    const { imageMobile, imageDesktop, whatsapp } = useStaticQuery(
        graphql`
            query{
                imageMobile: file( relativePath: { eq: "restaurante-hotel-bahia-olivo-hero-movil.jpg" } ){
                    childImageSharp {
                        fluid(maxWidth: 768, quality: 100 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageDesktop: file( relativePath: { eq: "restaurante-hotel-bahia-olivo-hero.jpg" } ){
                    childImageSharp {
                        fluid( maxWidth: 1280, quality: 100) {
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
    
    return(
        <BackgroundRestaurante
            tag={ 'section' }
            fluid={ isMobile ? imageMobile.childImageSharp.fluid : imageDesktop.childImageSharp.fluid }
            fadeIn="soft"
        >
            <BackgroundRestauranteInner>
                <TextWrapper>
                    <h1>Restaurante</h1>
                    <p>El Restaurante de Bahía Olivo Hotel Boutique es el complemento perfecto para una velada romántica con tu pareja.</p>

                    <div className="precios-container">
                        <p className="precios-titulo">Platos especiales</p>
                        <a 
                            href="https://api.whatsapp.com/send?phone=+573143339798&text=Hola,%20busco%20información%20sobre%20el%20hotel" 
                            className="btn"
                        >
                            <img src={ whatsapp.publicURL } alt="Reservar Hotel Bahía Olivo Villa de Leyva" />
                            Contactar
                        </a>
                    </div>
                </TextWrapper>

                <BotonesHero 
                    clase="rellax"
                    velocidad="+1"
                />
                
            </BackgroundRestauranteInner>
        </BackgroundRestaurante>
    );

}

export default HeroRestaurante;