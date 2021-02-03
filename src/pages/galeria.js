import React, {useState} from 'react';
import ImgsViewer from 'react-images-viewer';
import styled from '@emotion/styled';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';


const GaleriaPage = styled.div`
    min-height: 100vh;
    padding: 1rem;
    position: relative;

    h1{
        font-size: 4rem;
        margin-bottom:0;
        margin-left:5%;
    }
    .galeria-title-description{
        max-width: 60%;
        margin-bottom: 6rem;
        margin-left:5%;
        margin-top: 0;
    }

    &:before{
        content: '';
        background-color: #E6E6E6;
        height: 50%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
    &:after{
        content: '';
        background-color: #F8D5D5;
        bottom: 0;
        height: 50%;
        position: absolute;
        right: 12%;
        width: 50%;
        z-index: -1;
    }
`;
const GaleriaContainer = styled.div`
    .gallery-wrapper{
        display: flex;
        flex-flow: row wrap;
            
        a{
            display: block;
            padding: 1rem;
            width: 50%;

            @media ( min-width: 769px ){
                width: 25%;
            }
        }
        
    }
`;


const Galeria = () => {

    const [ isVisible, setIsVisible ] = useState( false );
    const [ slide, setSlide ] = useState( 0 );

    const galleryImageList = useStaticQuery(
        graphql`
            query{
                allFile(filter: {relativeDirectory: {eq: "galeria-fotos"}}) {
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
            sitePageClass='galeria'
        >
            <SEO 
                title='Galería de fotos'
            />
            
            <GaleriaPage>
                <h1>Galería de fotos</h1>
                <p className="galeria-title-description">Conoce los jardines, zonas comunes y exteriores del Hotel Bahía Olivo de Villa de Leyva.</p>
                <GaleriaContainer>
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
                </GaleriaContainer>
            </GaleriaPage>


        </Layout>
    );

}

export default Galeria;