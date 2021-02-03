import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';
import Img from 'gatsby-image';

const BackgroundImageSpa = styled(BackgroundImage)`
    height: 100vh;
    width: 100%;
`;
const BackgroundImageSpaInner = styled.div`
    height: 100%;
    top: 0;
    width: 100%;
    position: absolute;
`;

const TextWrapper = styled.div`
    background-color: #F4DAAA;
    padding: 2rem;
    position: absolute;

    h1{
        font-size: 5rem;
        margin: 0;

        @media( min-width: 1281px ){
            font-size: 9rem;
        }
    }
    p{
        font-size: 1.5rem;
        font-style: italic;
        font-weight: 100;
    }

    @media( max-width: 768px ){
        bottom: -2rem;
        right: 1rem;
        width: 65%;

        :after{
            background: radial-gradient(circle at center,rgba( 0,0,0,.3 ) 20%,transparent 22%);
            background-size: 20px 20px;
            content: '';
            left: -50%;
            height: 200px;
            opacity: .5;
            position: absolute;
            top: -25%;
            width: 100%;
        }
    }

    @media( min-width: 769px ) and ( max-width: 1280px ){
        bottom: 0;
        right: 0;
        padding-bottom: 20%;
        width: 50%;
    }
    @media( min-width: 1281px ){
        bottom: 0;
        right: 0;
        padding-bottom: 18%;
        width: 50%;
    }
`;

const FotosDemo = styled.div`
        
    display: flex;
    flex-flow: row nowrap;
    column-gap: 2rem;

    @media( min-width: 790px ) and ( max-width: 1280px ){
        bottom: -15%;
        height: 40%;
        position: absolute;
        right: 6rem;
        width: 80%;
        z-index: 999;

        div{
            height: 100%;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        }

        div:first-child{
            width: 70%;
        }
        div:last-child{
            flex: 1;
        }
    }

    @media( min-width: 1281px ){
        bottom: -20%;
        height: 46%;
        position: absolute;
        right: 6rem;
        width: 80%;
        z-index: 999;

        div{
            height: 100%;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        }

        div:first-child{
            width: 70%;
        }
        div:last-child{
            flex: 1;
        }
    }

`;

const HeroSpa = () => {

    const { hero, heroMovil, foto1, foto2 } = useStaticQuery(
        graphql`
            query{
                hero: file( relativePath: { eq: "spa-hero.jpg" } ){
                    childImageSharp {
                        fluid(maxWidth: 1440, quality: 100 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                heroMovil: file( relativePath: { eq: "spa-hero-movil.jpg" } ){
                    childImageSharp {
                        fluid(maxWidth: 768, quality: 100 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                foto1: file( relativePath: { eq: "spa-hotel-bahia-olivo-hero-foto-1.jpg" } ){
                    childImageSharp {
                        fluid(maxWidth: 700, quality: 100 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                foto2: file( relativePath: { eq: "spa-hotel-bahia-olivo-hero-foto-2.jpg" } ){
                    childImageSharp {
                        fluid(maxWidth: 322, quality: 100 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );

    const isDesktop = useMediaQuery( { minWidth: 769 } );
    
    return(
        <BackgroundImageSpa
            tag={ 'section' }
            fluid={ isDesktop ? hero.childImageSharp.fluid : heroMovil.childImageSharp.fluid }
            fadeIn="soft"
        >
            <BackgroundImageSpaInner>
                <TextWrapper>
                    <h1>Spa</h1>
                    <p>Nature Spa en Bahía Olivo Hotel Boutique es ampliamente reconocido en Villa de Leyva por la calidad y experiencia de nuestras esteticistas.</p>
                </TextWrapper>
                { isDesktop && (
                    <>
                        <FotosDemo className="fotos-demo-wrapper">
                            <Img fluid={ foto1.childImageSharp.fluid } />
                            <Img fluid={ foto2.childImageSharp.fluid } />
                        </FotosDemo>
                    </>
                ) }
            </BackgroundImageSpaInner>
        </BackgroundImageSpa>
    );

}

export default HeroSpa;