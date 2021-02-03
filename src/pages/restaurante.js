import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import ImgsViewer from 'react-images-viewer';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroRestaurante from '../components/heroRestaurante';

const GaleriaFotos = styled.div`
    background-color: #E6E6E6;
    padding: 2rem;
    position: relative;

    @media( min-width: 640px ) and ( max-width: 768px ){
        padding: 2rem;
    }

    :after{
        background-color: #AB6C46;
        content: '';
        position: absolute;
        z-index: 0;

        @media( max-width: 768px ){
            height: 100%;
            top: 0;
            right: 0;
            margin: auto;
            width: 75%;
        }
        @media( min-width: 769px ){
            height: 80%;
            right: 8rem;
            top: 1rem;
            width: 60%;
        }
    }


    @media( min-width: 769px ){
        background-color: transparent;
        display:flex;
        justify-content:flex-end;
        margin-top: -20%;
        padding: 50px 10rem 4rem 2rem;

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

        @media( min-width: 769px ){
            width: 80%;
        }

        a{
            display: block;
            line-height: 0;
            height: 96px;
            overflow: hidden;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            position: relative;
            z-index:9;
            width: calc( 50% - 1rem );

            @media( min-width: 640px ) and ( max-width: 768px ){
                height: 200px;
                width: calc( 50% - 1rem );
            }
            @media( min-width: 769px ){
                height: 150px;
                width: calc( 33.3333% - 2rem );
            }
        }
    }
`;

const Restaurante = () => {

    const [ isVisible, setIsVisible ] = useState( false );
    const [ slide, setSlide ] = useState( 0 );
    
    const galleryImageList = useStaticQuery(
        graphql`
            query{
                allFile(filter: {relativeDirectory: {eq: "galeria-restaurante"}}) {
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
            sitePageClass = "restaurante"
        >
            <SEO 
                title="Restaurante"
            />
            <HeroRestaurante />
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

export default Restaurante;