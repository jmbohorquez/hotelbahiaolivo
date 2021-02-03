import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import ImgsViewer from 'react-images-viewer';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSpa from '../components/heroSpa';

const MainContent = styled.div`
    @media( min-width: 769px ){
        display: flex;
        flex-flow: row nowrap;
    }
`;

const CuerpoTexto = styled.div`
    background-color: #F0F0F0;
    padding: 4rem 10rem 2rem 2rem;

    @media( min-width: 769px ){
        background-color: #FFF;
        padding-top: 16%;
        width: 50%;
    }
`;

const SpaPrecio = styled.div`
    
    padding: 4rem 2rem 6rem;

    p{
        color: #797979;
        margin: 0;
        
        width: 75%;
    }

    .precio-titulo{
        font-size: 2.5rem;
        text-transform: uppercase;
    }
    .precio-cantidad{
        color: #000;
        font-size: 3rem;
    }
    .precio-condiciones{
        font-size: 1.3rem;
        font-style: italic;
    }

    @media( max-width: 768px ){
        display: flex;
        flex-flow: column;
        align-items: flex-end;

        p{
            text-align: right;
        }

    }

    @media( min-width: 769px ){
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        justify-content: center;
        background-color: #F4DAAA;
        padding-left: 10%;
        padding-top: 18%;
        width: 50%;

        p{
            text-align: left;
        }

        .precio-titulo{
            font-size: 3rem;
        }
        .precio-cantidad{
            font-size: 3.5rem;
            line-height:normal;
        }
        .precio-condiciones{
            font-size: 2rem;
        }
    }
`;

const GaleriaFotos = styled.div`
    padding: 0 2rem;
    position: relative;

    @media ( min-width: 414px ) and ( max-width: 768px ){
        padding: 0 2rem 2rem;
    }

    :after{
        background-color: #F4DAAA;
        content: '';
        position: absolute;
        z-index: -1;

        @media( max-width: 768px ){
            height: 110%;
            top: -5%;
            right: 0;
            left: 0;
            margin: auto;
            width: 60%;
        }
        @media( min-width: 769px ){
            height: 120px;
            right: 0;
            top: 0;
            width: 50%;
        }
    }


    @media( min-width: 769px ){
        padding: 50px 2rem 4rem;

        :before{
            background-color:#E6E6E6;
            content: '';
            height: calc( 100% - 120px );
            left: 0;
            bottom: 0;
            position:absolute;
            width: 100%;
            z-index: -1;
        }
    }
    
    .gallery-wrapper{
        display: flex;
        flex-flow: row wrap;

        column-gap: 2rem;
        row-gap: 2rem;

        a{
            display: block;
            line-height: 0;
            overflow: hidden;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

            @media( max-width: 768px ){
                height: 120px;
                width: calc( 50% - 1rem );
            }
            @media( min-width: 769px ){
                height: 200px;
                width: calc( 33.3333% - 2rem );
            }
        }
    }
`;

const Spa = () => {

    const [ isVisible, setIsVisible ] = useState( false );
    const [ slide, setSlide ] = useState( 0 ); 
    
    const galleryImageList = useStaticQuery(
        graphql`
            query{
                allFile(filter: {relativeDirectory: {eq: "galeria-spa"}}) {
                    edges {
                        node {
                            childImageSharp {
                                fluid( maxWidth:1200 ) {
                                    src
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                            name
                        }
                    }
                }
                file(relativePath: {eq: "whatsapp.svg"}) {
                    publicURL
                }
            }
        `
    );

    const images = [];

    galleryImageList.allFile.edges.map( srcs => (
        images.push( { src: srcs.node.childImageSharp.fluid.src } )
    ) );

    const showSlide = index => {
        setIsVisible( true );
        setSlide( index );
    }

    const gotoPrevious = () => {
        if( slide > 0 ){
            setSlide( slide - 1 );
        }
    }
    const gotoNext = () => {
        if( slide < images.length ){
            setSlide( slide + 1 );
        }
    }

    const closeViewer = () => {
        setIsVisible( false );
        setSlide( 0 );
    }
    
    return(
        <Layout
            sitePageClass = "spa"
        >
            <SEO 
                title="Spa"
            />
            
            <HeroSpa />
            <MainContent>
                <CuerpoTexto>
                    <p>Fantásticas instalaciones diseñadas para ofrecer a nuestros huéspedes y visitantes el mejor bienestar y descanso.</p>
                    <p>Completa el circuito de Zonas Húmedas que incluye jacuzzi con hidromasaje, sauna y baño turco.</p>
                    <p>Gran variedad de masajes en pareja: Disfruta la magia y los placeres del chocolate, las frutas, los aromas y los aceites, mientras suavizas e hidratas tu piel.</p>
                    <p><strong>Pregunta por el Servicio de Manicure y Pedicure.</strong></p>
                </CuerpoTexto>
                <SpaPrecio>
                    <p className="precio-titulo">Masajes</p>
                    <p className="precio-cantidad">Contáctanos y pregunta por nuestros precios</p>
                    <p className="precio-condiciones">Horario de las zonas húmedas: de 9am a 7pm. El servicio de jacuzzi en el Spa tiene costo adicional.</p>
                    <a 
                        href="https://api.whatsapp.com/send?phone=+573143339798&text=Hola,%20quiero%20saber%20sobre%20el%20spa%20o%20masajes" 
                        className="btn"
                    >
                        <img src={ galleryImageList.file.publicURL } alt="Spa Villa de Leyva" />
                        Contactar
                    </a>
                </SpaPrecio>
            </MainContent>
            <GaleriaFotos>
                <div className="gallery-wrapper">
                    { galleryImageList.allFile.edges.map( (image, index) => (
                        <a
                            href="#!"
                            onClick={ () =>  showSlide( index ) }
                        >
                            <Img 
                                key={ index }
                                fluid={ image.node.childImageSharp.fluid } 
                                loading="lazy"
                                alt={ image.node.name }
                            />
                        </a>
                    ) ) }

                    <ImgsViewer
                        imgs = { images }
                        currImg = { slide }
                        isOpen = { isVisible }
                        onClickPrev={ gotoPrevious }
                        onClickNext={ gotoNext }
                        onClose={ closeViewer }
                    />
                </div>
            </GaleriaFotos>
        </Layout>
    );

}

export default Spa;