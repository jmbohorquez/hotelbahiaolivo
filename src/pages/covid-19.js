import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from '@emotion/styled';

import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PlanesBackgroundImage = styled( BackgroundImage )`
    min-height: 100vh;

    .bgi-text-container{
        display: flex;
        flex-flow: column;
        height: 100vh;
        justify-content: center;
        padding: 1rem;
        width: 100%;

        @media ( min-width: 769px ){
            padding: 2rem;
            width: 35%;
        }
    }
`;

const ContenidoContainer = styled.div`
    padding: 1rem;
    width: 100%;

    @media ( min-width: 769px ){
        margin: 0 auto;
        padding: 2rem;
        width: 70%;
    }
`;

const Covid19 = () => {

    const { bgImage, bgImageMobile } = useStaticQuery( 
        graphql`
            query{
                bgImage: file( relativePath: { eq: "medidas-covid-19-desktop.jpg" } ){
                    childImageSharp {
                        fluid(maxWidth: 1440, quality: 100 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                bgImageMobile: file( relativePath: { eq: "medidas-covid-19-movil.jpg" } ){
                    childImageSharp {
                        fluid( maxWidth: 768, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        ` 
    );

    const isMobile = useMediaQuery( { maxWidth: 768 } );
    
    return(
        <Layout>
            <SEO 
                title="Hoteles Medidas Covid-19"
            />
            <PlanesBackgroundImage
                tag={ 'section' }
                fluid={ isMobile ? bgImageMobile.childImageSharp.fluid : bgImage.childImageSharp.fluid }
                fadeIn="soft"
            >
                <div className="bgi-text-container">
                    <h1>Regulaciones de bioseguridad - Bahía Olivo Hotel Boutique</h1>
                    <p>El hotel Bahia Olivo Boutique & Spa cumple con la resolución 666 y 1285 del 2020  establecidos por el Gobierno Nacional, aplicando el protocolo de bioseguridad específico para COVID-19.</p>
                    <p>Según nuestro protocolo de bioseguridad no podrá alojarse ninguna persona  que cuente con síntomas relacionados con el COVID-19</p>
                    <p>Es de uso obligatorio el tapabocas dentro de las instalaciones del hotel</p>
                </div>
            </PlanesBackgroundImage>
            <ContenidoContainer>
                <p>Así  mismo en Villa de Leyva se encuentra una gran variedad de sitios Turísticos como lo son:</p>
                    <ul>
                        <li>Monasterio de Santo Eccehomo</li> 
                        <li>Granja de avestruces</li>
                        <li>Casa de Barro</li>
                        <li>Pozos Azules</li>
                        <li>Parque Gondava</li>
                        <li>El Viñedo Ain Karim</li>
                        <li>Museo El Fosil</li>
                        <li>laguna de Iguaque</li>
                        <li>Cascada la periquera</li>
                        <li>Museo Antonio Nariño</li>
                        <li>Aventura Park</li>
                    </ul>
                <p>Estos sitios los huéspedes podrán visitar y conocer los cuales cuentan con el permiso de funcionamiento y cumplimiento de la normatividad vigente y protocolos de bioseguridad. Esta información se suministrará en las instalaciones del hotel.</p>
            </ContenidoContainer>
        </Layout>
    );

}

export default Covid19;