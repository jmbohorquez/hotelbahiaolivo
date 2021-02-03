import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PlanesGrid = styled.div`
    
    .planes-container{
        background-color: #F2DABD;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        clear: both;
        margin-bottom: 2rem;
        overflow:hidden;
        position:relative;
        width: 281px;

        .gatsby-image-wrapper{
            height: 158px;
        }

        .text-wrapper{
            padding: 1rem;
            h3{
                margin: 0;
                a{
                    color: #000;
                    display: block;
                }
            }
            p{
                color: #750202;
                font-weight: 100;
                font-style: italic;
                margin: 0;
            }
        }

    }

    .planes-container:nth-child( even ){
        float: right;
    }

    @media( min-width: 414px ) and ( max-width: 768px ){
        .planes-container{
            width: 60%;

            .gatsby-image-wrapper{
                height: 220px;
            }
        }
    }
    @media( min-width: 769px ){
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        column-gap: 2rem;
        left: -15%;
        position: absolute;
        row-gap: 2rem;
        width: 80%;

        .text-wrapper{
            width: calc(100% - 15%);
        }

        .planes-container{
            float: none !important;
            transition: all .3s ease-in-out;
            width: calc( 50% - 2rem );

            .text-wrapper{
                width: 100%;
            }

            :hover{
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                transform: scale( 1.03, 1.03 );
            }
        }
        
    }

`;

const PlanesBackgroundImage = styled( BackgroundImage )`
    min-height: 100vh;
`;

const BackgroundImageInner = styled.div`
    padding: 2rem;
    height: 100%;

    :after{
        content: '';
        background-color: #750202;
        height: 100%;
        left: 0;
        margin: auto;
        position: absolute;
        top: 0;
        right: 0;
        width: 70%;
        z-index: 0;
    }

    .text-wrapper{
        overflow: hidden;
        position: relative;
        z-index: 9;

        h1{
            color: #FFF;
            font-size: 6rem;
            line-height: 100%;
            margin-bottom: 0;
            text-align: center;
        }
        .planes-subtitulo{
            margin-top: 0;
            color: #FFF;
            padding-bottom: 2rem;
            padding-left: 2rem;
            text-transform: uppercase;
        }

    }

    @media( min-width: 769px ){
        :after{
            left: 15%;
            right: auto;
            width: 50%;
        }

        .text-wrapper{
            left: 15%;
            overflow: visible;

            h1{
                padding-left: 2rem;
                text-align: left;
            }
        }
       
    }
`;

const NuevoTag = styled.span`
    background-color: #750202;
    color: #FFF;
    position:absolute;
    text-align: center;
    text-transform: uppercase;
    transform: rotate(-45deg);
    z-index: 9;
    top: 20px;
    left: -25px;
    width: 45%;

    @media( min-width: 769px ){
        top: 20px;
        left: -35px;
        width: 30%;
    }
`;

const Planes = () => {

    const { planesList, imageMobile, imageDesktop } = useStaticQuery( 
        graphql`
            query{
                planesList: allWordpressWpPlanes {
                    nodes {
                        slug
                        title
                        id
                        featured_media {
                            localFile {
                                childImageSharp {
                                    fluid( maxWidth: 600 ) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                        post_meta_fields {
                            estandarchimeneabaja
                        }
                    }
                }
                imageMobile: file( relativePath: { eq: "planes-fondo-movil.jpg" } ){
                    childImageSharp {
                        fluid(maxWidth: 768, quality: 100 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageDesktop: file( relativePath: { eq: "planes-fondo-desktop.jpg" } ){
                    childImageSharp {
                        fluid( maxWidth: 1440, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        ` 
    );

    const isMobile = useMediaQuery( { maxWidth: 768 } );
    
    return(
        <Layout
            sitePageClass = 'planes'
        >
            <SEO 
                title="Planes" 
            />
            
            <PlanesBackgroundImage
                tag={ 'section' }
                fluid={ isMobile ? imageMobile.childImageSharp.fluid : imageDesktop.childImageSharp.fluid }
                fadeIn="soft"
            >
                <BackgroundImageInner>
                    <div className="text-wrapper">
                        <h1>Planes</h1>
                        <p className="planes-subtitulo">Para una ocasión especial</p>
                        <PlanesGrid>

                            { planesList.nodes.map( plan => (
                                <div 
                                    key={ plan.id }
                                    className={ `planes-container planes-${ plan.slug }` }
                                >
                                    { plan.slug === 'plan-relax' && <NuevoTag>Nuevo</NuevoTag> }
                                    <a 
                                        href={ plan.slug }
                                    >
                                        <Img 
                                            fluid={ plan.featured_media.localFile.childImageSharp.fluid }
                                        />
                                    </a>
                                    <div className="text-wrapper">
                                        <h3>
                                            <a 
                                                href={ plan.slug }
                                            >
                                                { plan.title }
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            ) ) }
                            
                        </PlanesGrid>
                    </div>
                </BackgroundImageInner>
            </PlanesBackgroundImage>
        </Layout>
    );

}

export default Planes;