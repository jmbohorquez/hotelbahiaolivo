import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import ListadoHabitaciones from '../components/listHabitaciones';
import SEO from '../components/seo';
import { 
    ElHotel, 
    ContactoContainer, 
    LasHabitaciones, 
    Spa,
    Ubicacion } from '../components/ui/inicioClass';

    import HeroInicio from '../components/heroInicio';


const HotelImagenLat = styled( Img )`
    height: 100%;
    object-fit: cover;
    width: 100%;
`;

const IndexPage = () => {

    const [ textoHotel, guardarTextoHotel ] = useState( false );

    const { hotel, spa, mail, location } = useStaticQuery(
        graphql`
            query{
                hotel: file(relativePath: {eq: "inicio-el-hotel.jpg"}) {
                    childImageSharp {
                      fluid(maxWidth: 800, quality: 100) {
                          ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                }
                spa: file(relativePath: {eq: "inicio-spa.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 371, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                restaurante: file(relativePath: {eq: "restaurante-hotel-bahia-olivo.jpg"}) {
                    childImageSharp {
                        fluid( maxWidth: 700, quality: 100 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                mail: file(relativePath: {eq: "mail.svg"}) {
                    publicURL
                }
                location: file(relativePath: {eq: "location.svg"}) {
                    publicURL
                }
            }
        `
    );
    
    const isPhone = useMediaQuery( { maxWidth: 414 } );

    const mostrarTexto = () => {

        if( ! textoHotel ){
            guardarTextoHotel( true );
        }else{
            guardarTextoHotel( false );
        }

    }

    return(
    
        <Layout
            sitePageClass = 'inicio'
        >
            <SEO 
                title="Villa de Leyva" 
            />
            <HeroInicio />
            
            <ElHotel
                id="hotel-bahia-olivo"
            >
                <div className="inner-container">
                    <div className={ `text-limiter ${ textoHotel ? 'abierto' : 'cerrado' }` }>
                        <h2>El Hotel</h2>
                        <p>El hotel Boutique y Spa Bahía Olivo se encuentra a solo 3 cuadras y media de la plaza principal de Villa de Leyva se caracteriza por contar con un entorno íntimo, exclusivo y con servicio personalizado, conservando la nueva tendencia de los hoteles boutique, innovando continuamente y adaptándose a la medida exacta de sus necesidades.</p>
                        <p>El hotel está construido en una casa que conserva el estilo colonial de Villa de Leyva; con un diseño sobrio y una decoración elegante, el hotel Boutique y Spa Bahía Olivo ofrece unos espacios muy acogedores conservando el sello propio de Villa de Leyva, ofreciendo a sus huéspedes el servicio de restaurante, spa y parqueadero privado.</p>
                    </div>
                    { isPhone && (
                        <div
                            className="link-read-more"
                        >
                            <Link 
                                to="#hotel-bahia-olivo"
                                onClick={ mostrarTexto }
                            >
                                Leer más { textoHotel ? String.fromCharCode(8593) : String.fromCharCode(8595) } 
                            </Link>
                        </div>
                    ) }
                    <ContactoContainer>
                        <Link to="mailto:hotelbahiaolivo@gmail.com">
                            <img src={ mail.publicURL } alt="Mail Hotel Bahía Olivo" />
                        </Link>
                        <Link to="#ubicacion">
                            <img src={ location.publicURL } alt="Ubicación Hotel Bahía Olivo" />
                        </Link>
                    </ContactoContainer>
                </div>

                { ! isPhone && (
                    <div className="inicio-hotel-imagen-container">
                        <HotelImagenLat 
                            fluid={ hotel.childImageSharp.fluid } 
                            alt="Exterior Hotel Bahía Olivo Villa de Leyva"
                        />
                    </div>
                ) }
                
            </ElHotel>
            <LasHabitaciones>
                <div className="inner-container">
                    <h2>Las Habitaciones</h2>
                    <p>Las habitaciones y suites de nuestro hotel son amplias, modernas, cómodas y al mejor estilo de los hoteles en Villa de Leyva, enmarcadas por bellos jardines interiores, dando así, un ambiente campestre.</p>
                </div>
                <ListadoHabitaciones />
                
            </LasHabitaciones>
            <Spa>
                <div className="image-container">
                    <Img fluid={ spa.childImageSharp.fluid } alt="Spa Villa de Leyva" />
                </div>
                <div className="text-container">
                    <div className="titulo-wrapper">
                        <h2>Nature Spa</h2>
                        <p>Rejuvenece tu cuerpo y tu mente.</p>
                    </div>
                    <div className="contenido-wrapper">
                        { ! isPhone && (
                            <p>Nature Spa en Bahía Olivo Hotel Boutique es ampliamente reconocido en Villa de Leyva por la calidad y experiencia de nuestras esteticistas.</p>
                        ) }
                        <Link 
                            to="/spa"
                            className="btn"
                        >
                            Ver el Spa
                        </Link>
                    </div>
                </div>
            </Spa>
            {/*<RestauranteWrapper>
                <Restaurante 
                    tag={ 'section' }
                    fluid={ restaurante.childImageSharp.fluid }
                    fadeIn="soft"  
                >
                    <div className="inner-backgroun-image">
                        <div className="text-wrapper">
                            <h2>Restaurante</h2>
                            <p>El Restaurante del Hotel Boutique es el complemento perfecto para una velada romántica con tu pareja.</p>
                            <Link
                                to="/restaurante"
                                className="btn"
                            >
                                Ver el restaurante
                            </Link>
                        </div>
                    </div>
                </Restaurante>
            </RestauranteWrapper>*/}
            <Ubicacion
                id="ubicacion"
            >
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992.6377769558901!2d-73.52815672181899!3d5.633073782937891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e41d713c437e6db%3A0x24b127d51945c55a!2sHotel%20Bahia%20Olivo!5e0!3m2!1ses!2sco!4v1604258501912!5m2!1ses!2sco" 
                    width="600" 
                    height="450" 
                    frameBorder="0" 
                    allowFullScreen 
                    aria-hidden="false" 
                    title="Ubicación hotel Bahía Olivo en Villa de Leyva"
                ></iframe>
                <div 
                    className="text-wrapper"
                >
                    <h2>Ubicación</h2>
                    <p>El Hotel Boutique Bahía Olivo se encuentra ubicado a tan solo tres cuadras y media de la plaza principal de Villa de Leyva.</p>
                </div>
            </Ubicacion>
        </Layout>
    )

}

export default IndexPage
